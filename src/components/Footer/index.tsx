import { Container, FooterSection, SectionTitle, Links, Link } from './styles'

const currentYear = new Date().getFullYear()

const Footer = () => (
  <Container>
    <div className="container">
      <FooterSection>
        <SectionTitle>Categorias</SectionTitle>
        <Links>
          <li>
            <Link
              title="Clique aqui para acessar jogos de RPG"
              to="/categories#rpg"
            >
              RPG
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de ação"
              to="/categories#action"
            >
              AÇÃO{' '}
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de esportes"
              to="/categories#sports"
            >
              ESPORTES
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de simulação"
              to="/categories#simulation"
            >
              SIMULAÇÃO
            </Link>
          </li>
          <li>
            <Link
              title="Clique aqui para acessar jogos de luta"
              to="/categories#fight"
            >
              LUTA
            </Link>
          </li>
        </Links>
      </FooterSection>
      <FooterSection>
        <SectionTitle>Acesso Rápido</SectionTitle>
        <Links>
          <li>
            <Link to="/#on-sale">PROMOÇÕES</Link>
          </li>
          <li>
            <Link to="/#coming-soon">EM BREVE</Link>
          </li>
        </Links>
      </FooterSection>
      <p>{currentYear} - &copy; E-PLAY Todos os direitos reservados</p>
    </div>
  </Container>
)

export default Footer
