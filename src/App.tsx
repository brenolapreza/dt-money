import { useState } from "react";
import Modal from "react-modal";
import { TransactionProvider } from "./TransactionContext";
import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";

export function App() {
  const [isModalNewTransactional, setIsModalNewTransactional] = useState(false);

  const handleNewTransaction = () => {
    setIsModalNewTransactional(true);
  };

  const handleCloseNewtransaction = () => {
    setIsModalNewTransactional(false);
  };

  //Make sure to bind modal to appElement
  Modal.setAppElement("#root");

  return (
    <div className="App">
      <TransactionProvider>
        <Header onTransactionNewModal={handleNewTransaction} />
        <NewTransactionModal
          isOpen={isModalNewTransactional}
          onRequestClose={handleCloseNewtransaction}
        />
        <Dashboard />
      </TransactionProvider>
    </div>
  );
}
