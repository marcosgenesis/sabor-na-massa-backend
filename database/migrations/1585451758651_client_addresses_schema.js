'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ClientAddressesSchema extends Schema {
  up () {
    this.create('client_addresses', (table) => {
      table.increments()
      table.string('nickname').notNullable()
      table
        .integer('client_id')
        .unsigned()
        .references('id')
        .inTable('clients')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.string('street').notNullable()
      table.integer('number').notNullable()
      table.string('city').notNullable()
      table.string('state').notNullable()
      table.string('neighborhood').notNullable()
      table.string('cep').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('client_addresses')
  }
}

module.exports = ClientAddressesSchema
