const {app, BrowserWindow} = require('electron');
const url = require('url');
const path = require('path');

let win = null;

function createWindow() {
    win = new BrowserWindow({width: 400, height: 210});

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'build/index.html'),
        protocol: 'file:',
        slashes: true
    }));

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