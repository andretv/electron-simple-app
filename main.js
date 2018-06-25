const electron = require('electron')
const path = require('path')
const url = require('url')

const { BrowserWindow, app, Menu, } = electron

let mainWindow

const dev = process.env.NODE_ENV

const createWindow = () => {
  mainWindow = new BrowserWindow({
    show: false,
    frame: true,
    minWidth: 800,
    minHeight: 600,
  })

  // const indexPath = dev
  //   ? url.format({protocol: 'http:', host: 'localhost:'})
  //   : ''

  mainWindow.loadURL(
    url.format({
      pathname: path.join(__dirname, 'index.html'),
      protocol: 'file:',
      slashes: true,
    })
  )

  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.on('closed', () => { mainWindow = null })

}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow === null) createWindow()
})