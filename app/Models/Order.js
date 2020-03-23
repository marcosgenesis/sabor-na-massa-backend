'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Order extends Model {
  items () {
    return this.hasMany('App/Models/Item')
  }

  address () {
    return this.hasOne('App/Models/OrderAddress')
  }
}

module.exports = Order
