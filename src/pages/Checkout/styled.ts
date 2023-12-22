import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
}
type RowProps = {
  marginTop?: string
}

type TabButtonProps = {
  isActive: boolean
}

export const Row = styled.div<RowProps>`
  display: flex;
  align-items: flex-end;
  column-gap: 24px;
  margin-top: ${(props) => props.marginTop || '0'};

  @media (max-width: ${breakpoints.tablet}) {
    display: block;
  }
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;
  max-width: ${(props) => props.maxWidth || 'auto'};

  label {
    display: block;
    margin-bottom: 8px;
    font-size: 14px;
  }

  input,
  select {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    border: 1px solid ${colors.white};
    background-color: ${colors.white};

    &.error {
      border: 1px solid #e44747;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    margin-top: 24px;
  }
`

export const TabButton = styled.button<TabButtonProps>`
  height: 32px;
  margin-right: 16px;
  padding: 0 8px;
  font-size: 14px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  color: ${colors.white};
  background-color: ${(props) =>
    props.isActive ? colors.highlightColor : colors.black};
  cursor: pointer;

  img {
    margin-right: 8px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    width: 100%;
    margin-top: 8px;
  }
`
