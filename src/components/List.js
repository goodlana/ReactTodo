import React from 'react';
import styled from 'styled-components';
import Items from './Items'
import { useTodoState, useTodoDispatch } from './Context'

const ListStyle = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; /*내용이 잘림. 필요할 때만 스크롤바 나타남 */
`

function List () {
  const todos = useTodoState();
  return(
    <ListStyle>
      {todos.map(todo => (
        <Items
          key={todo.id}
          id={todo.id}
          text={todo.text}
          done={todo.done}
          />
      ))
      }
    </ListStyle>
  )
}

export default List;