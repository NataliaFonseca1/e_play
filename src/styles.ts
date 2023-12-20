import { createGlobalStyle } from 'styled-components'

export const cores = {
  branca: '#EEEEEE',
  preta: '#111111',
  cinza: '#333',
  verde: '#10AC84',
  cinzaClaro: '#A3A3A3'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}
export const GlobalCss = createGlobalStyle`
*{
margin: 0;
padding: 0;
box-sizing: border-box;
font-family: Roboto,sans-serif ;
list-style: none;
}
body{
  background-color: ${cores.preta};
  color:${cores.branca};
  padding-top: 40px;

}
.container{
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: ${breakpoints.desktop}){
    max-width: 80%;
  }
}
`
