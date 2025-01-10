import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import InputMask from 'react-input-mask'
import { useDispatch, useSelector } from 'react-redux'
import { clear, close, isBuyingTrue } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'
import { formatPrice, getTotalPrice } from '../../utils'
import { RootReducer } from '../../store'

import * as S from './style'
import Button from '../Button'

const Checkout = () => {
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation()
  const [isPaying, setIsPaying] = useState(false)
  const { items } = useSelector((state: RootReducer) => state.cart)
  const dispatch = useDispatch()

  const form = useFormik({
    initialValues: {
      receiver: '',
      description: '',
      city: '',
      zipCode: '',
      number: '',
      complement: '',
      cardName: '',
      cardNumber: '',
      cardCode: '',
      expiresMonth: '',
      expiresYear: ''
    },
    validationSchema: Yup.object({
      receiver: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      description: Yup.string().required('O campo é obrigatório'),
      city: Yup.string().required('O Campo é obrigatório'),
      zipCode: Yup.string()
        .min(8, 'O campo precisa ter 8 caracteres')
        .max(9, 'O campo precisa ter 8 caracteres')
        .required('O campo é obrigatório'),
      number: Yup.string().required('O campo é obrigatório'),
      complement: Yup.string(),
      cardName: Yup.string()
        .min(5, 'O nome precisa ter pelo menos 5 caracteres')
        .required('O campo é obrigatório'),
      cardNumber: Yup.string()
        .max(19, 'O pode ter no máximo 16 caracteres')
        .required('O campo é obrigatório'),
      cardCode: Yup.string().required('O campo é obrigatório'),
      expiresMonth: Yup.string().required('O campo é obrigatório'),
      expiresYear: Yup.string().required('O campo é obrigatório')
    }),
    onSubmit: (values) => {
      purchase({
        delivery: {
          receiver: values.receiver,
          address: {
            description: values.description,
            city: values.city,
            zipCode: values.zipCode,
            number: Number(values.number),
            complement: values.complement
          }
        },
        payment: {
          card: {
            name: values.cardName,
            number: values.cardNumber,
            code: Number(values.cardCode),
            expires: {
              month: Number(values.expiresMonth),
              year: Number(values.expiresYear)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.preco as number
        }))
      })
    }
  })

  const checkInputHasError = (fieldName: string) => {
    const hasBeenTouched = fieldName in form.touched
    const isInvalid = fieldName in form.errors
    const hasError = hasBeenTouched && isInvalid

    return hasError
  }

  const finishTransaction = () => {
    dispatch(isBuyingTrue())
    dispatch(close())
  }

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear())
    }
  }, [isSuccess, dispatch])

  if (isSuccess && data)
    return (
      <>
        <S.Title>Pedido realizado - {data.orderId}</S.Title>
        <S.SucessMessage>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </S.SucessMessage>
        <S.SucessMessage>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.{' '}
        </S.SucessMessage>
        <S.SucessMessage>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.SucessMessage>
        <S.SucessMessage>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.SucessMessage>
        <Button maxWidth="100%" type="button" onClick={finishTransaction}>
          Concluir
        </Button>
      </>
    )

  return (
    <div>
      <form onSubmit={form.handleSubmit}>
        {!isPaying ? (
          <>
            <S.Title>Entrega</S.Title>
            <S.InputGroup>
              <label htmlFor="receiver">Quem irá receber</label>
              <input
                id="receiver"
                type="text"
                name="receiver"
                value={form.values.receiver}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('receiver') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="description">Endereço</label>
              <input
                id="description"
                type="text"
                name="description"
                value={form.values.description}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('description') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="city">Cidade</label>
              <input
                id="city"
                type="text"
                name="city"
                value={form.values.city}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('city') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="zipCode">CEP</label>
                <InputMask
                  id="zipCode"
                  type="text"
                  name="zipCode"
                  value={form.values.zipCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('zipCode') ? 'error' : ''}
                  mask="99999-999"
                />
              </S.InputGroup>
              <S.InputGroup className="155px">
                <label htmlFor="number">Número</label>
                <input
                  id="number"
                  type="text"
                  name="number"
                  value={form.values.number}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('number') ? 'error' : ''}
                />
              </S.InputGroup>
            </S.Row>
            <S.InputGroup marginBottom="24px">
              <label htmlFor="complement">Complemente(opicional)</label>
              <input
                id="complement"
                type="text"
                name="complement"
                value={form.values.complement}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('complement') ? 'error' : ''}
              />
            </S.InputGroup>
            <Button
              type="button"
              maxWidth="100%"
              onClick={() => setIsPaying(true)}
            >
              Continuar com o pagamento
            </Button>
            <Button
              type="button"
              maxWidth="100%"
              onClick={() => dispatch(isBuyingTrue())}
            >
              Voltar para o carrinho
            </Button>
          </>
        ) : (
          <>
            <S.Title>
              Pagamento - Valor a pagar {formatPrice(getTotalPrice(items))}
            </S.Title>
            <S.InputGroup>
              <label htmlFor="cardName">Nome no cartão</label>
              <input
                id="cardName"
                type="text"
                name="cardName"
                value={form.values.cardName}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
                className={checkInputHasError('cardName') ? 'error' : ''}
              />
            </S.InputGroup>
            <S.Row>
              <S.InputGroup maxWidth="228px">
                <label htmlFor="cardNumber">Número do cartão</label>
                <InputMask
                  id="cardNumber"
                  type="text"
                  name="cardNumber"
                  value={form.values.cardNumber}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardNumber') ? 'error' : ''}
                  mask="9999 9999 9999 9999"
                />
              </S.InputGroup>
              <S.InputGroup maxWidth="87px">
                <label htmlFor="cardCode">CVV</label>
                <InputMask
                  id="cardCode"
                  type="text"
                  name="cardCode"
                  value={form.values.cardCode}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('cardCode') ? 'error' : ''}
                  mask="999"
                />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup maxWidth="155px">
                <label htmlFor="expiresMonth">Mês de vencimento</label>
                <InputMask
                  id="expiresMonth"
                  type="text"
                  name="expiresMonth"
                  value={form.values.expiresMonth}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresMonth') ? 'error' : ''}
                  mask="99"
                />
              </S.InputGroup>
              <S.InputGroup marginBottom="24px" maxWidth="155px">
                <label htmlFor="expiresYear">Ano de vencimento</label>
                <InputMask
                  id="expiresYear"
                  type="text"
                  name="expiresYear"
                  value={form.values.expiresYear}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                  className={checkInputHasError('expiresYear') ? 'error' : ''}
                  mask="99"
                />
              </S.InputGroup>
            </S.Row>
            <Button
              type="submit"
              title="Clique aqui para finalizar a compra"
              maxWidth="100%"
              disabled={isLoading}
              onClick={form.handleSubmit}
            >
              {isLoading ? 'Finalizando compra...' : 'Finalizar pagamento'}
            </Button>
            <Button
              type="button"
              maxWidth="100%"
              onClick={() => setIsPaying(false)}
            >
              Editar o endereço
            </Button>
          </>
        )}
      </form>
    </div>
  )
}

export default Checkout
