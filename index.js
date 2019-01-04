const { app, BrowserWindow } = require('electron')
let mainWindow

function createWindow() {
  createDockMenu()

  mainWindow = new BrowserWindow({
    title: 'Sogou Test',
    width: 800,
    height: 600
  })

  mainWindow.loadFile('index.html')

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })
}
app.on('ready', createWindow)

app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function() {
  if (mainWindow === null) {
    createWindow()
  }
})

process.on('uncaughtException', e => {
  console.error(e)
})
