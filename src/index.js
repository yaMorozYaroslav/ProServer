import React from 'react';
//import {render} from 'react-dom'
import {createRoot} from 'react-dom/client'
import {App} from './App/App';
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import {welcRed} from './Redux/welcRed'

let store = createStore(welcRed)

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)
root.render(<Provider store={store}><App/></Provider>)
//render(<App/>, document.getElementById('root'));
