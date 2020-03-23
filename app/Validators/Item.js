'use strict'

const Antl = use('Antl')
class Item {
  get messages () {
    return Antl.list('validation')
  }

  get rules () {
    return {
      qtd: 'required|number',
      title: 'required',
      price: 'required|float'
    }
  }
}

module.exports = Item
