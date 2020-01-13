import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'
import { MdShoppingBasket } from 'react-icons/md'
import { Container, Cart } from './styles'

export default function Header() {
  // Get the information of Redux is easier with hooks
  const cartSize = useSelector(state => state.cart.length)

  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="RocketShoes" />
      </Link>
      <Cart to="/cart">
        <div>
          <strong> Meu Carrinho </strong>
          <span> {cartSize} Itens </span>
        </div>
        <MdShoppingBasket size={36} color="#FFF" />
      </Cart>
    </Container>
  )
}
