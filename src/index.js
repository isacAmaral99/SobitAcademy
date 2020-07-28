import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Switch,Route } from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import Home from './pages/Home/App';
import CadastroCategoria from './pages/cadastro/categoria'

ReactDOM.render( 
    <BrowserRouter >
    <Switch>

        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/video" component={CadastroVideo}/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>

    </Switch>
    </BrowserRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA