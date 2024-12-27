import { useState } from 'react'
import { MenuItem } from '../../Pages/Home'
import { ProductsContainer } from '../../styles'
import MenuProduct from '../MenuProduct'
import { AddCarrinho, Close, List, Modal, ModalContent } from './style'
import close from '../../assets/images/close.png'
import { useDispatch } from 'react-redux'
import { add, open } from '../../store/reducers/cart'

type Props = {
  pratos?: MenuItem[]
}

interface ModalState extends MenuItem {
  isVisible: boolean
}

export const formataPreco = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
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
          <List>
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
          </List>
        </div>
      </ProductsContainer>
      <Modal className={modal.isVisible ? 'visible' : ' '}>
        <ModalContent className="container">
          <Close
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
            <AddCarrinho onClick={addToCart}>
              Adicionar ao carrinho - {formataPreco(modal.preco)}
            </AddCarrinho>
          </div>
        </ModalContent>
        <div onClick={() => closeModal()} className="overlay"></div>
      </Modal>
    </>
  )
}

export default MenuList
