import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { getQueryValue } from "../../utils";

const Container = styled.div`
  text-align: center;
  padding: 4px;
`;

const Input = styled.input`
  height: 32px;
`;

const SearchInput = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (searchTerm !== router.query.q) {
      setSearchTerm(getQueryValue(router.query.q));
    }
  }, [router.query.q]);

  const onChangeInput = (updatedSearchTerm: string) => {
    setSearchTerm(updatedSearchTerm);
    router.query.q = updatedSearchTerm;
    router.push(
      {
        pathname: "/",
        query: { ...router.query },
      },
      undefined,
      {}
    );
  };

  return (
    <Container>
      <Input
        placeholder="Search a product!"
        onChange={(event) => onChangeInput(event.target.value)}
        value={searchTerm}
        maxLength={30}
      />
    </Container>
  );
};

export default SearchInput;
