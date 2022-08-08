import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useStorageContext } from "../../context";
import { updateSnackbar } from "../../reducer/actions";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 20px;
  justify-content: center;
  background-color: #6BBD60;
`;

const SnackbarDescription = styled.span`
  font-size: 20px;
  color: white;
`;

const Snackbar = () => {
  const [state, dispatch] = useStorageContext();

  useEffect(() => {
    if (state.showSnackbar) {
      setTimeout(() => {
        dispatch(updateSnackbar(false));
      }, 3000);
    }
  }, [state.showSnackbar, dispatch]);

  if (!state.showSnackbar) {
    return null;
  }

  return (
    <Container>
      <SnackbarDescription>Product added successfully</SnackbarDescription>
    </Container>
  );
};

export default Snackbar;
