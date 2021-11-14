const { app, BrowserWindow } = require('electron')
const isDev = require('electron-is-dev')
const path = require('path')

let mainWindow;

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

app.on('window-all-closed', () => {
  if (process.platform != 'darwin') app.quit()
})

app.on('activate', () => {
  if (mainWindow == null) createWindow()
})
