import { Minus, Plus } from '@phosphor-icons/react'
import { AddOrLessButton, ButtonContainer } from './styles'

export function InputNumber() {
  return (
    <ButtonContainer>
      <AddOrLessButton>
        <Minus size={16} color="#8047F8" className="minusIcon" />
      </AddOrLessButton>
      <div>1</div>
      <AddOrLessButton>
        <Plus size={16} color="#8047F8" className="plusIcon" />
      </AddOrLessButton>
    </ButtonContainer>
  )
}
