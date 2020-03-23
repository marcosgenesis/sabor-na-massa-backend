'use strict'
const Database = use('Database')
const Order = use('App/Models/Order')
class OrderController {
  async index ({ request }) {
    const { page } = request.get()
    const projects = await Order.query().with('items').paginate(page)
    return projects
  }

  async store ({ request }) {
    const data = request.only('client_name')
    const address = request.input('address')
    const trx = await Database.beginTransaction()

    const order = await Order.create(data, trx)
    await order.address().create(address, trx)

    await trx.commit()
    return order
  }

  async show ({ params }) {
    const order = await Order.findOrFail(params.id)
    await order.load('items')
    return order
  }

  async update ({ params, request }) {
    const order = await Order.findOrFail(params.id)
    const data = request.only('client_name')
    order.merge(data)
    await order.save()
    return order
  }

  async destroy ({ params }) {
    const order = await Order.findOrFail(params.id)
    await order.delete()
  }
}

module.exports = OrderController
