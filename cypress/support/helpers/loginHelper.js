Cypress.Commands.add('loginAPI', () => {
  return cy
    .request({
      method: 'POST',
      url: '/login',
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      }
    })
    .then((res) => {
      return res.body.authorization
    })
})
