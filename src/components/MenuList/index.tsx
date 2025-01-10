import { useState } from 'react'
import { useDispatch } from 'react-redux'

import { add, open } from '../../store/reducers/cart'
import { formatPrice } from '../../utils'

import MenuProduct from '../MenuProduct'
import { ProductsContainer } from '../../styles'
import * as S from './style'
import Button from '../Button'

import close from '../../assets/images/close.png'

type Props = {
  pratos?: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

const MenuList = ({ pratos }: Props) => {
  const dispatch = useDispatch()

  const [modal, setModal] = useState<ModalState>({
    isVisible: false,
    descricao: '',
    foto: '',
    id: 0,
    nome: '',
    porcao: '',
    preco: 0
  })

  const closeModal = () => {
    setModal({
      isVisible: false,
      descricao: '',
      foto: '',
      id: 0,
      nome: '',
      porcao: '',
      preco: 0
    })
  }

  const addToCart = () => {
    dispatch(add(modal))
    dispatch(open())
  }
  return (
    <>
      <ProductsContainer>
        <div className="container">
          <S.List>
            {pratos?.map((pratos) => (
              <li
                key={pratos.id}
                onClick={() => {
                  setModal({
                    descricao: pratos.descricao,
                    foto: pratos.foto,
                    id: pratos.id,
                    isVisible: true,
                    nome: pratos.nome,
                    porcao: pratos.porcao,
                    preco: pratos.preco
                  })
                }}
              >
                <MenuProduct
                  id={pratos.id}
                  title={pratos.nome}
                  description={pratos.descricao}
                  image={pratos.foto}
                />
              </li>
            ))}
          </S.List>
        </div>
      </ProductsContainer>
      <S.Modal className={modal.isVisible ? 'visible' : ' '}>
        <S.ModalContent className="container">
          <S.Close
            src={close}
            onClick={() => {
              closeModal()
            }}
          />
          <div>
            <img src={modal.foto} alt={modal.nome} />
          </div>
          <div>
            <h1>{modal.nome}</h1>
            <p>{modal.descricao}</p>
            <p>{modal.porcao}</p>
            <Button type="button" maxWidth="250px" onClick={addToCart}>
              {`Adicionar ao carrinho - ${formatPrice(modal.preco)}`}
            </Button>
          </div>
        </S.ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </S.Modal>
    </>
  )
}

export default MenuList
