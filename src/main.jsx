import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import { PokemonApp } from './PokemonApp';
import { store } from './store/store';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
      <TodoApp />
    </Provider>
);
