'use strict'

const Antl = use('Antl')
class Order {
  get messages () {
    return Antl.list('validation')
  }

  get validateAll () {
    return true
  }

  get rules () {
    return {
      client_name: 'required'
    }
  }
}

module.exports = Order
