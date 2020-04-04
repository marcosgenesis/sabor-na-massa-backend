'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class ClientAddress extends Model {
  client () {
    return this.belongsTo('App/Models/Client')
  }

  orders () {
    return this.belongsToMany('App/Models/ClientAddress')
  }
}

module.exports = ClientAddress
