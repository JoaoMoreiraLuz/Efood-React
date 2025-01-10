import styled from 'styled-components'
import { breakpoints, colors } from '../../styles'

type InputGroupProps = {
  maxWidth?: string
  marginBottom?: string
}

export const Row = styled.div`
  display: flex;
  column-gap: 34px;
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => props.maxWidth || 'auto'};
  margin-bottom: ${(props) => props.marginBottom || 'auto'};

  label {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 8px;
    display: block;
    color: ${colors.white};

    @media (max-width: ${breakpoints.tablet}) {
      font-size: 13px;
    }
  }

  input {
    background-color: ${colors.white};
    border: 1px solid ${colors.white};
    height: 32px;
    border: none;
    width: 100%;
    margin-bottom: 8px;

    &.error {
      border: 2px solid rgb(255, 0, 8);
    }
  }
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 16px;
  color: ${colors.white};
`

export const SucessMessage = styled.p`
  color: ${colors.white};
  margin-bottom: 24px;
  font-size: 14px;
  font-weight: 400;
`
