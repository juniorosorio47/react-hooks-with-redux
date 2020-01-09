import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Cart } from './styles'
import logo from '../../assets/images/logo.svg'

export default function Header () {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Meu Carrinho</strong>
          <span>3 Itens</span>
        </div>
      </Cart>
    </Container>
  )
}
