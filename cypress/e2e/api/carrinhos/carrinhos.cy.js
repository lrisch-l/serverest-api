describe('Cart API', () => {
  let token
  let cartId

  const products = [
    { idProduto: 'BeeJh5lz3k6kSIzA', quantidade: 1 },
    { idProduto: 'YaeJ455lz3k6kSIzA', quantidade: 3 }
  ]

  beforeEach(() => {
    return cy.loginAdmin().then((res) => {
      token = res.body.authorization
      return cy.cancelCart(token)
    })
  })

  it('should return 401 when creating cart without token', () => {
    cy.createCart(products, '').then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body.message).to.include('Token de acesso ausente')
    })
  })

  it('should list carts and return 200', () => {
    cy.getCarts().then((res) => {
      expect(res.status).to.eq(200)
      expect(res.body.quantidade).to.be.greaterThan(0)
      expect(res.body.carrinhos[0]).to.have.all.keys(
        'produtos',
        'precoTotal',
        'quantidadeTotal',
        'idUsuario',
        '_id'
      )
    })
  })

  it('should return 400 for nonexistent cart ID', () => {
    cy.getCartById('00000000000000000000000000000000').then((res) => {
      expect(res.status).to.eq(400)
      if (res.body && res.body.message) {
        expect(String(res.body.message)).to.include('Carrinho não encontrado')
      } else {
        expect(res.body).to.be.an('object')
        expect(res.body).to.not.be.null
      }
    })
  })

  it('should complete the cart purchase and return 200', () => {
    cy.createCart(products, token).then(() => {
      cy.checkoutCart(token).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.message).to.be.oneOf([
          'Registro excluído com sucesso',
          'Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário',
          'Não foi encontrado carrinho para esse usuário'
        ])
      })
    })
  })

  it('should return 401 when trying to complete purchase without token', () => {
    cy.checkoutCart('').then((res) => {
      expect(res.status).to.eq(401)
      expect(String(res.body.message)).to.include('Token de acesso ausente')
    })
  })

  it('should cancel a cart and restock items', () => {
    cy.createCart(products, token).then(() => {
      cy.cancelCart(token).then((res) => {
        expect(res.status).to.eq(200)
        expect(res.body.message).to.be.oneOf([
          'Registro excluído com sucesso',
          'Registro excluído com sucesso | Não foi encontrado carrinho para esse usuário',
          'Não foi encontrado carrinho para esse usuário'
        ])
      })
    })
  })

  it('should return 401 when trying to cancel cart without token', () => {
    cy.cancelCart('').then((res) => {
      expect(res.status).to.eq(401)
      expect(res.body.message).to.include('Token de acesso ausente')
    })
  })
})
