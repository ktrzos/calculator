const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win = null;

function createWindow() {
    win = new BrowserWindow({width: 1000, height: 600});

    // win.loadURL('http://10.223.0.3:3000');
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

    win.webContents.openDevTools();

    win.on('closed', function () {
        win = null;
    });
}


app.on('ready', function () {
    createWindow();
});

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
});

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});