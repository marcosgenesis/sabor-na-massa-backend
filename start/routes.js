'use strict'

const Route = use('Route')
Route.post('users', 'UserController.store').validator('User')
Route.post('sessions', 'SessionController.store')
Route.group(() => {
  Route.resource('orders', 'OrderController').apiOnly().validator(
    new Map(
      [
        [
          ['order.store'],
          ['Order']
        ]
      ]
    ))
  Route.resource('orders.items', 'ItemController').apiOnly().validator(
    new Map(
      [
        [
          ['order.items.store'],
          ['Item']
        ]
      ]
    ))
  Route.resource('clients', 'ClientController')
}).middleware(['auth'])
