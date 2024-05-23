import { Minus, Plus } from '@phosphor-icons/react'
import { AddOrLessButton, ButtonContainer } from './styles'

interface InputNumberProps {
  amount: number
  onMinusProductFunction: React.MouseEventHandler
  onAddProductFunction: React.MouseEventHandler
}

export function InputNumber({
  amount,
  onMinusProductFunction,
  onAddProductFunction,
}: InputNumberProps) {
  return (
    <ButtonContainer>
      <AddOrLessButton onClick={onMinusProductFunction}>
        <Minus size={16} color="#8047F8" className="minusIcon" />
      </AddOrLessButton>
      <div>{amount}</div>
      <AddOrLessButton onClick={onAddProductFunction}>
        <Plus size={16} color="#8047F8" className="plusIcon" />
      </AddOrLessButton>
    </ButtonContainer>
  )
}
