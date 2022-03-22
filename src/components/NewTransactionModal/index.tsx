import Modal from "react-modal";
import { Container,TransactionTypeContainer, RadioBox } from "./styles";
import closeImg from "../../assets/close.svg"
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import { useState } from "react";

interface NewTransactionModalProps{

    isOpen: boolean;
    onRequestClose: () => void;

}
export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
    
    const [type, setType] = useState('deposit');

    return(
        <Modal
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"

        >
            
            <button 
            type="button" 
            onClick={onRequestClose} 
            className="react-modal-close"
            >

                <img src={closeImg} alt="Fechar modal" />
            </button>

           <Container>
            <h2>Cadastrar transação</h2>

             <input placeholder="Titulo" />

             <input 
             type="'number" 
             placeholder="Valor"/>   

            <TransactionTypeContainer>
                <RadioBox
                type="button"
                onClick={() => {setType('deposit')}}
                isActive={type === 'deposit'}
                >
                    <img src={incomeImg} alt="Entrada de valor" />
                    <span>Entrada</span>
                </RadioBox>

                <RadioBox
                type="button"
                onClick={() => {setType('withrow')}}
                isActive={type === 'withrow'}
                >
                    <img src={outcomeImg} alt="Saida de valor" />
                    <span>Saida</span>
                </RadioBox>
            </TransactionTypeContainer>

             <input placeholder="Categoria"/>

             <button type="submit">Cadastrar</button>
           </Container>
        </Modal>
    );
}