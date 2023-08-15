import { TouchableOpacityProps } from 'react-native'

import { Container, Title, FilterStyleProps } from './styles'

type FilterExtensions = TouchableOpacityProps & FilterStyleProps

interface FilterProps extends FilterExtensions {
  title: string
}

export function Filter({ title, isActive = false, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Title>{title}</Title>
    </Container>
  )
}
