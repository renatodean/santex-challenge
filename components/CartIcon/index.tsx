import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { Cart, CartFill } from "@styled-icons/bootstrap";
import { useStorageContext } from "../../context";
import CartPopup from "../CartPopup";
import useOnClickOutside from "../../hooks/click-outside";

const Container = styled.div`
  text-align: end;
  padding: 5px;
`;

const CartContainer = styled.div`
  position: relative;
  width: 30px;
  float: right;
  cursor: pointer;
`;

const QuantityAmount = styled.div`
  position: absolute;
  right: -8px;
  top: -8px;
  z-index: 1;
  background-color: white;
  padding: 3px 0;
  border-radius: 50%;
  font-size: 10px;
  font-weight: bold;
  border: 1px solid black;
  width: 20px;
  text-align: center;
  height: 20px;
`;

const CartPopupContainer = styled.div`
  display: block;
`;

const CartIcon = () => {
  const ref = useRef(null);
  const [state] = useStorageContext();
  const [showCartPopup, setShowCartPopup] = useState(false);
  const { products } = state;
  const productsQuantity = products.reduce(
    (previous, product) => previous + product.quantity,
    0
  );

  useOnClickOutside(ref, () => setShowCartPopup(false));

  return (
    <Container>
      <CartContainer
        data-testid="cart-icon"
        tabIndex={0}
        onClick={() => setShowCartPopup(true)}
      >
        {!productsQuantity ? (
          <Cart size="30" />
        ) : (
          <>
            <CartFill size="30" />
            <QuantityAmount>{productsQuantity}</QuantityAmount>
          </>
        )}
      </CartContainer>
      {showCartPopup && (
        <CartPopupContainer ref={ref}>
          <CartPopup products={products} />
        </CartPopupContainer>
      )}
    </Container>
  );
};

export default CartIcon;
