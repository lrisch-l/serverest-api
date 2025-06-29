describe('Login API', () => {
  it('should login successfully with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: 'fulano@qa.com',
        password: 'teste'
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
      expect(response.body.message).to.eq('Login realizado com sucesso')
    })
  })

  it('should return 401 when credentials are invalid', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: 'invalido@teste.com',
        password: 'errado'
      },
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(401)
      expect(response.body.message).to.eq('Email e/ou senha inválidos')
    })
  })
})
