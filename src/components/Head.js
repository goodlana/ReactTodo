//날짜, 요일, 남은 할일 개수
import React from 'react';
import styled from 'styled-components';
import { useTodoState } from './Context'

const HeadStyle = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: rgb(51,42,50);
  }

  .day {
    color: rgb(135, 135, 135);
    margin-bottom: 12px;
  }

  .tasks-left{
    color: rgb(186, 114, 123);
    font-weight: bold;
  }
`

function Head () {
  const todos = useTodoState()
  let todoNum = todos.filter(todo => !todo.done)

  const today= new Date();
  const dateString = today.toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day:'numeric'
  });
  const dayName = today.toLocaleDateString('ko-KR', {weekday: 'long'})

  return(
    <HeadStyle>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">할 일 {todoNum.length}개 남음</div>
    </HeadStyle>
  )
}

export default Head
