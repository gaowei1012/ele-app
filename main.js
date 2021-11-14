const { app, BrowserWindow, Menu } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow;

// 自定义 dockMenu
const dockMenu = Menu.buildFromTemplate([
  {
    label: 'New Window',
    click() {
      console.log('new window')
    }
  }
])

// 创建窗体
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    useContentSize: true,
    frame: true,
  });

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3066/"
      : `file://${path.join(__dirname, "./public/index.html")}`
  );

  mainWindow.on("closed", () => {
    mainWindow = null
  });
}

app.on('ready', createWindow)

app.whenReady().then(() => {
  if (process.platform === 'darwin') {
    app.dock.setMenu(dockMenu)
  }
})

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow == null) createWindow()
})
