import styled from 'styled-components'
import { colors } from '../../styles'

export const Container = styled.div`
  border-radius: 8px;
  background-color: ${colors.white};
  padding: 24px;
  margin-bottom: 40px;
  h2,
  h3 {
    font-size: 18px;
    font-weight: bold;
    color: ${colors.white};
    margin-bottom: 24px;
  }
  .marginTop {
    margin-top: 24px;
  }
  p {
    font-size: 14px;
    line-height: 22px;
  }
`
