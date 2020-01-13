/* eslint-disable react/prop-types */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { formatPrice } from '../../utils/format'
import * as CartActions from '../../store/modules/cart/actions'
import { Container, ProductTable, Total } from './styles'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'

export default function Cart() {
  const dispatch = useDispatch()

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1))
  }
  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1))
  }

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subTotal: formatPrice(product.price * product.amount),
    }))
  )

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  )

  return (
    <Container>
      <ProductTable>
        <thead>
          <th />
          <th>PRODUTO</th>
          <th>QTD</th>
          <th>SUBTOTAL</th>
          <th />
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <img src={item.image} alt={item.title} />
              </td>
              <td>
                <strong>{item.title}</strong>
                <span>{item.priceFormatted}</span>
              </td>
              <td>
                <div>
                  <button type="button" onClick={() => decrement(item)}>
                    <MdRemoveCircleOutline size={20} color="7159c1" />
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button" onClick={() => increment(item)}>
                    <MdAddCircleOutline size={20} color="7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>{item.subTotal}</strong>
              </td>
              <td>
                <button>
                  <MdDelete
                    size={20}
                    color="7159c1"
                    onClick={() =>
                      dispatch(CartActions.removeFromCart(item.id))
                    }
                  />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>{total}</strong>
        </Total>
      </footer>
    </Container>
  )
}
