import React, { ReactNode } from "react";
import styled from "@emotion/styled";
import Head from "next/head";
import Header from "../Header";
import Footer from "../Footer";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ebebeb;
`;

const PageTitle = styled.h1`
  text-align: center;
`;

const Content = styled.main`
  padding: 0 16px;
  display: flex;
  min-height: calc(100vh - 120px);
  flex-direction: column;
  @media (min-width: 420px) {
    padding: 0 20px;
    max-width: 932px;
    margin: 0 auto;
  }
  @media (min-width: 1200px) {
    padding: 0 24px;
  }
`;

interface PageProps {
  children: ReactNode;
  withSearch?: boolean;
  title?: string;
}

const Page = ({ children, withSearch, title }: PageProps) => (
  <PageContainer>
    <Head>
      <title>Santex challenge</title>
      <meta name="description" content="Santex challenge" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Header withSearch={withSearch} />
    <Content>
      {title && <PageTitle>{title}</PageTitle>}
      {children}
    </Content>
    <Footer />
  </PageContainer>
);

export default Page;
