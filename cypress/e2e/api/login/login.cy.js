describe('Login API', () => {
  const testUser = {
    nome: 'Login Test User',
    email: `login.${Date.now()}@qa.com.br`,
    password: 'teste123',
    administrador: 'true'
  }

  before(() => {
    cy.createUser(testUser)
  })

  it('should authenticate successfully with valid credentials @smoke', () => {
    cy.loginAPI(testUser.email, testUser.password).then((token) => {
      expect(token).to.be.a('string').and.not.be.empty
    })
  })

  it('should return 401 when using invalid credentials @smoke', () => {
    cy.request({
      method: 'POST',
      url: '/login',
      body: {
        email: 'invalid.user@example.com',
        password: 'wrongPassword'
      },
      failOnStatusCode: false
    }).then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body.message).to.eq('Email e/ou senha inválidos')
    })
  })
})
