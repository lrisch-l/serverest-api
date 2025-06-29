// Product commands (originals in Portuguese)
Cypress.Commands.add('cadastrarProduto', (produto, token) => {
  return cy.request({
    method: 'POST',
    url: '/produtos',
    failOnStatusCode: false,
    headers: token ? { authorization: token } : {},
    body: produto
  })
})

Cypress.Commands.add('buscarProdutos', (params = {}) => {
  return cy.request({
    method: 'GET',
    url: '/produtos',
    qs: params
  })
})

Cypress.Commands.add('buscarProdutoPorId', (_id) => {
  return cy.request({
    method: 'GET',
    url: `/produtos/${_id}`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('atualizarProduto', (_id, dados, token) => {
  return cy.request({
    method: 'PUT',
    url: `/produtos/${_id}`,
    failOnStatusCode: false,
    headers: token ? { authorization: token } : {},
    body: dados
  })
})

Cypress.Commands.add('deletarProduto', (_id, token) => {
  return cy.request({
    method: 'DELETE',
    url: `/produtos/${_id}`,
    failOnStatusCode: false,
    headers: token ? { authorization: token } : {}
  })
})

// English aliases used in test suite
Cypress.Commands.add('createProduct', (produto, token) => cy.cadastrarProduto(produto, token))
Cypress.Commands.add('getProducts', (params = {}) => cy.buscarProdutos(params))
Cypress.Commands.add('getProductById', (_id) => cy.buscarProdutoPorId(_id))
Cypress.Commands.add('updateProduct', (_id, dados, token) => cy.atualizarProduto(_id, dados, token))
Cypress.Commands.add('deleteProduct', (_id, token) => cy.deletarProduto(_id, token))

// User creation for test setup
Cypress.Commands.add('createUser', (user) => {
  return cy.request({
    method: 'POST',
    url: '/usuarios',
    failOnStatusCode: false,
    body: user
  })
})

// Login admin; create if necessary
Cypress.Commands.add('loginAdmin', () => {
  const adminUser = {
    nome: 'Admin QA',
    email: 'admin@qa.com.br',
    password: 'admin',
    administrador: 'true'
  }

  return cy.loginUser(adminUser.email, adminUser.password).then((res) => {
    if (res.status === 401) {
      return cy.createUser(adminUser).then(() => {
        return cy.loginUser(adminUser.email, adminUser.password)
      })
    }
    return res
  })
})

// Generic user login command
Cypress.Commands.add('loginUser', (email, password) => {
  return cy.request({
    method: 'POST',
    url: '/login',
    failOnStatusCode: false,
    body: {
      email,
      password
    }
  })
})
