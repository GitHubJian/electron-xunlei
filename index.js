const { app, BrowserWindow, ipcMain } = require('electron')
let mainWindow, loginWindow

function createWindow() {
  mainWindow = new BrowserWindow({
    title: 'Xunlei',
    width: 800,
    height: 600
    // titleBarStyle: 'hidden'
  })

  mainWindow.loadFile('./.skit/dist/choiceness.html')

  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function() {
    mainWindow = null
  })

  ipcMain.on('synchronous-message', (event, arg) => {
    console.log(arg)
    if (arg === 'login') {
      // createLoginWindow(mainWindow)
      event.returnValue = 'pong'
    }
  })
}

function createLoginWindow(parentWindow) {
  let {
    x: parentX,
    y: parentY,
    width: parentWidth,
    height: parentHeight
  } = parentWindow.getBounds()

  let x = (parentWidth - 400) / 2 + parentX,
    y = (parentHeight - 200) / 2 + parentY

  loginWindow = new BrowserWindow({
    title: 'Login',
    width: 400,
    height: 200,
    x,
    y,
    // center: true,
    fullscreen: false,
    fullscreenable: false,
    resizable: false,
    movable: false,
    parent: parentWindow,
    // closable: true,
    modal: false
  })

  loginWindow.loadFile('./.skit/dist/login.html')

  loginWindow.on('closed', function() {
    loginWindow = null
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
