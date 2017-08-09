const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

let win

function draw() {
    win = new BrowserWindow({ width: 465, height: 515, resizable: false })
    win.setTitle('Tidy-up')
    win.setMenu(null)
    win.isMaximizable(false)
    win.isResizable(false)
    win.setAlwaysOnTop(true, "floating")
    win.loadURL('file://'+__dirname+'/index.html')
    win.show()
}
app.on('ready', draw)
