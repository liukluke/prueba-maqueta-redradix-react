import { configure, addDecorator, setAddon } from '@storybook/react'
import React from 'react'
import styles from '../src/styles/styles.css'
import { withKnobs } from '@storybook/addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'
// NOTE
// Decorate with Redux so we can display connected components
// import { Provider } from 'react-redux'
// const store = configureStore()
// Redux decorator

// addDecorator(story => {
// 	return (
// 		<Provider store={ store }>
// 			<MemoryRouter>
// 				{ story() }
// 			</MemoryRouter>
// 		</Provider>
// 	)
// })

const req = require.context('../src/', true, /.stories.js$/)

addDecorator(withSmartKnobs)
addDecorator(withKnobs)

// App-wide div decorator
// Every story will be wrapped inside
addDecorator(story => <div id="app">{story()}</div>)

function loadStories() {
  const files = req.keys()
  files.sort().forEach(filename => req(filename))
}

configure(loadStories, module)
