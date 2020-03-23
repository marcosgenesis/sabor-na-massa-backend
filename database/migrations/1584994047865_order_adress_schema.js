'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrderAdressSchema extends Schema {
  up () {
    this.create('order_addresses', (table) => {
      table.increments()
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('district')
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('order_adresses')
  }
}

module.exports = OrderAdressSchema
