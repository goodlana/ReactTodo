//템플릿
import React from 'react';
import styled from 'styled-components'

const TemplateBox = styled.div`
  width: 512px;
  height: 768px;
  
  position: relative; /* 추후 박스 하단에 추가 버튼을 위치시키기 위함*/
  background: white;
  border-radius: 16px;
  box-shadow: 1px 1px 15px gray;

  margin: 0 auto;

  margin-top: 96px;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column; /*템플릿 내 아이템 배치*/

`

function Template ({ children }) {
  return <TemplateBox>{ children }</TemplateBox>
}


export default Template
