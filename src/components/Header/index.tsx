import logoImg from '../../assets/logo.svg'
import { Container,Content } from './styles'
interface HeaderProps{
        onOpenNewlTransactionModal: () => void;
    }

export function Header({ onOpenNewlTransactionModal }: HeaderProps){

    return(
    <Container>
        <Content>
        <img src={logoImg} alt="dt money" />

        <button 
        type="button" 
        onClick={onOpenNewlTransactionModal} 
        >
            Nova transação
        </button>

        </Content>
    </Container>
    )
}
