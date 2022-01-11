import { useState } from "react";
import Modal from 'react-modal';
import { Header } from './components/Header';
import { Dashboard } from './components/Dashboard';

import {TransactionsProvider} from './TransactionsContext';
import { GlobalStyle } from "./styles/global";
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');

export function App() {
  const [newTransactionModalOpen, setNewTransactionModalOpen] = useState(false);

  function handleOpenTransactionModal() {
    setNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenTransactionModal={handleOpenTransactionModal}/>
      <Dashboard />
      <NewTransactionModal isOpen={newTransactionModalOpen} onRequestClose={handleCloseTransactionModal}/>
      <GlobalStyle />
    </TransactionsProvider>
  );
}