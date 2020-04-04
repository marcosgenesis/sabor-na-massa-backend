'use strict'

const Database = use('Database')
const Client = use('App/Models/Client')

class ClientController {
  async index ({ request, response, view }) {
    const { page } = request.get()
    const clients = await Client.query().with('addresses').paginate(page)
    return clients
  }

  async store ({ request }) {
    const data = request.only(['name', 'phone'])
    const addresses = request.input('addresses')
    const trx = await Database.beginTransaction()

    const client = await Client.create(data, trx)
    await client.addresses().createMany(addresses, trx)

    await trx.commit()
    return client
  }

  async show ({ params, request, response, view }) {
    const client = await Client.findOrFail(params.id)
    await client.load('orders')
    return client
  }

  async update ({ params, request }) {
    const client = await Client.findOrFail(params.id)
    const data = request.all()
    client.merge(data)
    await client.save()
    return client
  }

  async destroy ({ params }) {
    const client = await Client.findOrFail(params.id)
    await client.delete()
  }
}

module.exports = ClientController
