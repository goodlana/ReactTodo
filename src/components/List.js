import React, {useEffect} from 'react';
import styled from 'styled-components';
import Items from './Items'
import { useTodoState, } from './Context'

const ListBlock = styled.div`
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto; /*내용이 잘림. 필요할 때만 스크롤바 나타남 */
`

function List () {
  const todos = useTodoState();

  useEffect(() => {localStorage.setItem("todolist", todos)
  },[todos])

  useEffect(() => {
    localStorage.todolist = todos
  },[todos])

  const isFiltered = localStorage.getItem('FILTERED');

  const renderList = (isFiltered) => {
    let newTodos;
    switch(isFiltered) {
      case "ALL":
        newTodos = todos;
        break;
      case "TODO":
        newTodos = todos.filter(todo => todo.isFiltered === true)
        break;
      case "DONE":
        newTodos = todos.filter(todo => todo.isFiltered === true)
        break;
      default:
        newTodos = todos
    }

    return(
      <ListBlock>
        {newTodos.map(todo => (
          <Items
            key={todo.id}
            id={todo.id}
            text={todo.text}
            done={todo.done}
            />
        ))
        }
      </ListBlock>
    )
  }

  return (
    <>
      {renderList(isFiltered)}
    </>
  )
}
export default List;