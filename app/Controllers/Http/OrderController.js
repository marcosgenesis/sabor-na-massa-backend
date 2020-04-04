'use strict'
const Order = use('App/Models/Order')
class OrderController {
  async index ({ request }) {
    const { page } = request.get()
    const orders = await Order.query().with('client').with('address').with('items').paginate(page)

    return orders
  }

  async store ({ request }) {
    const data = request.all()
    const order = await Order.create(data)
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
