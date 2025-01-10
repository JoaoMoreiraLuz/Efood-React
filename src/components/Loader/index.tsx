import { BounceLoader } from 'react-spinners'

import { Container } from './style'
import { colors } from '../../styles'

const Loader = () => (
  <Container>
    <BounceLoader color={colors.red} />
  </Container>
)

export default Loader
