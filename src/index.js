import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers/info';

// reducer를 인수로 하여 store 생성
const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension());

// Provider: react-redux에 내장된 컴포넌트로, 리액트 애플리케이션에 손쉽게 스토어를 연동할 수 있도록 도와줌
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));

serviceWorker.unregister();
