/* eslint-disable comma-dangle */
import React from 'react'
import { connect } from 'react-redux'
import { Container, ProductTable, Total } from './styles'
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md'

function Cart({ cart }) {
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
                  <button type="button">
                    <MdRemoveCircleOutline size={20} color="7159c1" />
                  </button>
                  <input type="number" readOnly value={item.amount} />
                  <button type="button">
                    <MdAddCircleOutline size={20} color="7159c1" />
                  </button>
                </div>
              </td>
              <td>
                <strong>R$499</strong>
              </td>
              <td>
                <MdDelete size={20} color="7159c1" />
              </td>
            </tr>
          ))}
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar Pedido</button>

        <Total>
          <span>TOTAL</span>
          <strong>R$1999.90</strong>
        </Total>
      </footer>
    </Container>
  )
}

const mapStateToProps = state => ({
  cart: state.cart,
})

export default connect(mapStateToProps)(Cart)
