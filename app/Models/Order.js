'use strict'

const Model = use('Model')

class Order extends Model {
  items () {
    return this.hasMany('App/Models/Item')
  }

  client () {
    return this.belongsTo('App/Models/Client')
  }

  address () {
    return this.belongsTo('App/Models/ClientAddress')
  }
}

module.exports = Order
