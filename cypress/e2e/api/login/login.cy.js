describe('Login API', () => {
  const testUser = {
    nome: 'Login Test User',
    email: `login.${Date.now()}@qa.com.br`,
    password: 'teste123',
    administrador: 'true'
  }

  // POST /usuarios → create a valid user before running login test
  before(() => {
    cy.createUser(testUser)
  })

  // POST /login → should return 200 for valid credentials
  it('should login successfully with valid credentials', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: testUser.email,
        password: testUser.password
      }
    }).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('authorization')
      expect(response.body.message).to.eq('Login realizado com sucesso')
    })
  })

  // POST /login → should return 401 for invalid credentials
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
