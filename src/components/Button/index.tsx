import { ButtonContainer } from './style'

export type Props = {
  type: 'button' | 'submit' | 'link'
  title?: string
  onClick?: () => void
  children: string
  disabled?: boolean
  maxWidth?: string
}

const Button = ({
  children,
  type,
  disabled,
  onClick,
  title,
  maxWidth
}: Props) => (
  <ButtonContainer
    type={type}
    title={title}
    onClick={onClick}
    disabled={disabled}
    maxWidth={maxWidth}
  >
    {children}
  </ButtonContainer>
)

export default Button
