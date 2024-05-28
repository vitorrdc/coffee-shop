import { Minus, Plus } from '@phosphor-icons/react'
import { AddOrLessButton, ButtonContainer } from './styles'

interface InputNumberProps {
  amount: number
  id: number
  onAddProductFunction: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void
  onMinusProductFunction: (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number,
  ) => void
}

export function InputNumber({
  amount,
  id,
  onMinusProductFunction,
  onAddProductFunction,
}: InputNumberProps) {
  return (
    <ButtonContainer>
      <AddOrLessButton onClick={(event) => onMinusProductFunction(event, id)}>
        <Minus size={16} color="#8047F8" className="minusIcon" />
      </AddOrLessButton>
      <div>{amount}</div>
      <AddOrLessButton onClick={(event) => onAddProductFunction(event, id)}>
        <Plus size={16} color="#8047F8" className="plusIcon" />
      </AddOrLessButton>
    </ButtonContainer>
  )
}
