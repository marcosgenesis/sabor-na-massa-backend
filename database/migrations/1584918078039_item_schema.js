'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ItemSchema extends Schema {
  up () {
    this.create('items', (table) => {
      table.increments()
      table
        .integer('order_id')
        .unsigned()
        .references('id')
        .inTable('orders')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.integer('qtd').notNullable()
      table.string('title').notNullable()
      table.float('price').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('items')
  }
}

module.exports = ItemSchema
