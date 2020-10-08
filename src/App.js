import React from 'react';
import { createGlobalStyle } from 'styled-components'
import Template from './components/Template';
import Head from './components/Head'
import List from './components/List'
import Create from './components/Create';
import { TodoProvider } from './components/Context'

//전역 스타일
const GlobalStyle = createGlobalStyle` 
  body {
    background: #f6f6f4;
  }
`

function App() {
  return (
    <TodoProvider>
      <GlobalStyle />
      <Template>
        <Head />
        <List />
        <Create />
      </Template>
    </TodoProvider>
  );
}

export default App;
