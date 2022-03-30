<<<<<<< Updated upstream
import { TransactionContext } from "./TransactionContext";
=======
import { TransactionsContext, TransactionsProvider} from "./TransactionsContext";
>>>>>>> Stashed changes
import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import Modal from "react-modal";
import { useState } from "react";
import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    function handleOpenNewTransactionModal(){
        setIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal(){
        setIsNewTransactionModalOpen(false)
    }

  return (
<<<<<<< Updated upstream
    <TransactionContext.Provider value={[]}>
=======
    <TransactionsProvider>
>>>>>>> Stashed changes
      <Header onOpenNewlTransactionModal={handleOpenNewTransactionModal} />
      
      <Dashboard />
     
      <NewTransactionModal 
       isOpen={isNewTransactionModalOpen}

       onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyle />
<<<<<<< Updated upstream
    </TransactionContext.Provider>
=======
    </TransactionsProvider>
>>>>>>> Stashed changes
  );
}

