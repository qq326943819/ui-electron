import { app, BrowserWindow } from "electron";
import { join } from "path";

app.whenReady().then(() => {
  const win = new BrowserWindow();

  if (app.isPackaged) {
    win.loadFile(join(__dirname, "../renderer/index.html"));
  } else {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  }
});
