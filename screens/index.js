import React from 'react'
import ReactDOM from 'react-dom'

const electron = window.require('electron')
const { remote: { app } } = electron

ReactDOM.render(
  <button
    onClick={() => {
      app.quit()
    }}
  >ABCDEFG</button>,
  document.getElementById('root')
)