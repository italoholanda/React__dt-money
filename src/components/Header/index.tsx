import React, { useState } from "react";
import logoImg from "../../assets/logo.svg";
import { Container, Content } from "./styles";
import Modal from "react-modal";

export function Header() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpem] =
    useState(false);

  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpem(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransactionModalOpem(false);
  }

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dt money" />
        <button onClick={handleOpenNewTransactionModal}>Nova transação</button>
        <Modal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        >
          <h2>Cadastrar transação</h2>
        </Modal>
      </Content>
    </Container>
  );
}
