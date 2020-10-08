//Context만들기 - 다른 컴포넌트에서 바로 사용할 수 있게.
import React, { useReducer, createContext, useContext, useRef } from 'react';

const initialTodos = [
  {
    id: 1,
    text:"프로젝트 생성하기",
    done: true
  },
  {
    id: 2,
    text: '컴포넌트 스타일링하기',
    done: true
  },
  {
    id: 3,
    text: 'Context 만들기',
    done: false
  },
  {
    id: 4,
    text: '기능 구현하기',
    done: false
  }
]



function todoReducer (state, action) {
  switch(action.type) {
    case 'CREATE':
      return state.concat(action.todo)
    case 'TOGGLE':
      return state.map(todo =>
        todo.id === action.id  //action.id야!!
        ? { ...todo, done: !todo.done }
        : todo
        );
    case 'REMOVE':
      return state.filter(todo =>
        todo.id !== action.id //action.id야!!
      )
    default:
      throw new Error(`Unhandled action type: ${action.type}`)
  }
}

const stateContext = createContext();
const dispatchContext = createContext();
//next id 관리
const nextIdContext = createContext();

export function TodoProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, initialTodos);
  const nextId = useRef(5)
  return (
    <stateContext.Provider value={state}>
      <dispatchContext.Provider value={dispatch}>
        <nextIdContext.Provider value={nextId}>
          { children }  
        </nextIdContext.Provider>
      </dispatchContext.Provider>
    </stateContext.Provider>
  )
}

//커스텀 Hook 만들기
export function useTodoState() {
  //Provider로 감싸져있지 않을 때를 위한 에러처리
  const context = useContext(stateContext)
  if(!context) {
    throw new Error('Cannot find StateProvider')
  }
  return context
}

export function useTodoDispatch() {
  //Provider로 감싸져있지 않을 때를 위한 에러처리
  const context = useContext(dispatchContext)
  if(!context) {
    throw new Error('Cannot find dispatchProvider')
  }
  return context
}

export function useTodoNextId() {
  //Provider로 감싸져있지 않을 때를 위한 에러처리
  const context = useContext(nextIdContext)
  if(!context) {
    throw new Error('Cannot find nextIdProvider')
  }
  return context
}