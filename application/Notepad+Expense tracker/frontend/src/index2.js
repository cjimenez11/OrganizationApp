import React from 'react';
import ReactDOM from 'react-dom/client';
import ExpT from './pages/ExpensePage';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';


function ExpenseTrack() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
    <React.StrictMode>
    <GlobalStyle />
    <GlobalProvider>
      <ExpT />
    </GlobalProvider>
  </React.StrictMode>
);
}

export default ExpenseTrack;