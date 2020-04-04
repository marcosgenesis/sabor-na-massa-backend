'use strict'
const User = use('App/Models/User')
class SessionController {
  async store ({ request, response, auth }) {
    const { username, password } = request.all()
    const token = await auth.attempt(username, password)
    const user = await User.findBy('username', username)
    return { token, user }
  }
}

module.exports = SessionController
