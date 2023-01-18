import React from 'react'
import {createRoot} from 'react-dom/client'

//import {Provider} from 'react-redux'

import {App} from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(<App/>)
