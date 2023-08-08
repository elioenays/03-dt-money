import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

import LogoImg from '../../assets/logo.svg'

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={LogoImg}
          alt=''
        />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  )
}
