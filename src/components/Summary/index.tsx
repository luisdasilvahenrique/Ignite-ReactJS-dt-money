import { Container } from "./styles";
import React, {useContext} from "react";
import incomesImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { TransactionsContext } from "../../TransactionsContext";

export function Summary(){
    const {transactions} = useContext(TransactionsContext);
    
    const totalDeposit = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'deposit'){
            return acc + transaction.amount;
        }
        return acc;
    }, 0)

    const totalWithrow = transactions.reduce((acc, transaction) => {
        if(transaction.type === 'withrow'){
            return acc - transaction.amount;
        }
        return acc;
    }, 0)

    const Total = totalDeposit + totalWithrow;
    
    return(
       <Container>
           <div>
               <header>
                   <p>Entradas</p>
                   <img src={incomesImg} alt="Entradas" />
               </header>
               <strong>R$ {totalDeposit}</strong>
           </div>

           <div>
               <header>
                   <p>Saídas</p>
                   <img src={outcomeImg} alt="Saídas" />
               </header>
               <strong>R$ {totalWithrow}</strong>
           </div>

           <div className="highlight-background">
               <header>
                   <p>Total</p>
                   <img src={totalImg} alt="Total" />
               </header>
               <strong>R$ {Total}</strong>
           </div>
       </Container>
    )
}