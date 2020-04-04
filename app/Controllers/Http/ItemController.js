'use strict'
const Item = use('App/Models/Item')
class ItemController {
  async index ({ params }) {
    const items = await Item.query().where('order_id', params.orders_id).fetch()
    return items
  }

  async store ({ request, params }) {
    const data = request.only(['qtd', 'title', 'price', 'tag'])
    const item = await Item.create({ ...data, order_id: params.orders_id })
    return item
  }

  async show ({ params }) {
    const item = await Item.findOrFail(params.id)
    return item
  }

  async update ({ params, request }) {
    const item = await Item.findOrFail(params.id)
    const data = request.only(['qtd', 'title', 'price'])
    item.merge(data)
    await item.save()
    return item
  }

  async destroy ({ params }) {
    const item = await Item.findOrFail(params.id)
    await item.delete()
  }
}

module.exports = ItemController
