import React from "react";
import styled from "@emotion/styled";
import Image from "next/image";
import SearchInput from "../SearchInput";
import CartIcon from "../CartIcon";
import { useRouter } from "next/router";

const HeaderContainer = styled.header<HeaderProps>`
  background-color: white;
  display: grid;
  grid-template-columns: ${({ withSearch }) =>
    withSearch ? "1fr 1fr 1fr" : "1fr 1fr"};
  height: 60px;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`;

const HomeLink = styled.div`
  cursor: pointer;
  position: relative;
  margin: 10px 0;
  height: 20px;
  width: 90px;
  @media (min-width: 420px) {
    margin: 5px 0;
    height: 30px;
    width: 155px;
  }
  @media (min-width: 1200px) {
    margin: 0;
    height: 40px;
    width: 180px;
  }
`;

interface HeaderProps {
  withSearch?: boolean;
}

const Header = ({ withSearch = false }: HeaderProps) => {
  const router = useRouter();

  return (
    <HeaderContainer withSearch={withSearch}>
      <HomeLink
        tabIndex={0}
        onClick={() => router.push("/")}
        onKeyPress={(event) => {
          if (event.key === "Enter") {
            router.push("/");
          }
        }}
        data-testid="home-link"
      >
        <Image
          priority
          src="/santex-logo.png"
          alt="Santex Logo"
          layout="fill"
        />
      </HomeLink>
      {withSearch && <SearchInput />}
      <CartIcon />
    </HeaderContainer>
  );
};

export default Header;
