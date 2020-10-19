import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md'
import {  useTodoDispatch } from './Context'

const Remove = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  color: #787878;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #ff6b6b;
  }
  display: none;
`

const ItemsStyle = styled.div`
  display:flex;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  &:hover{
    ${Remove} {
      display: initial;
    }
  }
`
// 기능 이름: Component Selector
//이 스타일은 ItemStyle 위에 커서가 있을 때,
// Remove 컴포넌트를 보여주라는 의미를 가지고 있습니다.


const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  border: 1px solid #ced4da;
  margin-right: 10px;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  ${props => 
    props.done &&  //props.done이 true면 border를 변경
    css `
      border: 1px solid #6e991d;
      color: #6e991d
  `}
`


const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: #490507;
  ${props => 
    props.done && //prop.done이 true면 글자색을 회색으로 변경
    css `
      text-decoration-line: line-through;
      color: #ced4da 
    `}
`

function Items ({ id, text, done }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id })
  const onRemove = () => dispatch({ type: "REMOVE", id})

  return (
      <ItemsStyle>
        <CheckCircle done={done} onClick={onToggle}>
          {done && <MdDone />}
        </CheckCircle>
        <Text done={done}>{text}</Text>
        <Remove onClick={onRemove}>
          <MdDelete />
        </Remove>
      </ItemsStyle>
  )
}

export default React.memo(Items);