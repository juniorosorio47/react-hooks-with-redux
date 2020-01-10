import React from 'react'

import { Container } from './styles'

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead></thead>
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
