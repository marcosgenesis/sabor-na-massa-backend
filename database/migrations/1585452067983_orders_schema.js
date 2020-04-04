'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class OrdersSchema extends Schema {
  up () {
    this.create('orders', (table) => {
      table.increments()
      table
        .integer('client_id')
        .unsigned()
        .references('id')
        .inTable('clients')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
        .notNullable()
      table
        .integer('client_address_id')
        .unsigned()
        .references('id')
        .inTable('client_addresses')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.float('subtotal').defaultTo(0)
      table.string('obs')
      table.string('status').defaultTo('Não feita')
      table.timestamps()
    })
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrdersSchema
