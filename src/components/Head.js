//날짜, 요일, 남은 할일 개수
import React, { useEffect } from "react";
import styled from "styled-components";
import { useTodoState, useTodoDispatch } from "./Context";
import { BiListUl, BiCircle, BiCheckCircle } from "react-icons/bi";

const HeadStyle = styled.div`
  padding: 48px 32px 24px 32px;
  border-bottom: 1px solid #e9ecef;

  h1 {
    margin: 0;
    font-size: 36px;
    color: rgb(51, 42, 50);
  }

  .day {
    color: rgb(135, 135, 135);
    margin-bottom: 12px;
  }

  .tasks-left {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(186, 114, 123);
    font-weight: bold;
  }
  .easy-buttons {
    font-size: 30px;
  }
  .easy-button {
    margin: 0px 3px;
    padding: 0px 2px;
    cursor: pointer;
  }
`;

function Head() {
  const todos = useTodoState();
  let todoNum = todos.filter((todo) => !todo.done);

  const today = new Date();
  const dateString = today.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const dayName = today.toLocaleDateString("ko-KR", { weekday: "long" });
  const dispatch = useTodoDispatch();

  useEffect(() => {
    localStorage.setItem("FILTERED", "ALL");
  }, []);

  const setALL = () => {
    localStorage.setItem("FILTERED", "ALL");
    dispatch({
      type: "ALL",
    });
  };

  const setDONE = () => {
    localStorage.setItem("FILTERED", "DONE");
    dispatch({
      type: "DONE",
    });
  };

  const setTODO = () => {
    localStorage.setItem("FILTERED", "TODO");
    dispatch({
      type: "TODO",
    });
  };

  return (
    <HeadStyle>
      <h1>{dateString}</h1>
      <div className="day">{dayName}</div>
      <div className="tasks-left">
        할 일 {todoNum.length}개 남음
        <div className="easy-buttons">
          <BiListUl className="easy-button" onClick={setALL} />
          <BiCheckCircle className="easy-button" onClick={setTODO} />
          <BiCircle className="easy-button" onClick={setDONE} />
        </div>
      </div>
    </HeadStyle>
  );
}

export default Head;
