const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
  });

  win.loadFile("index.html");
};

app.whenReady().then(() => {
  createWindow();
  /**
   * @name 如果没有窗口打开则打开一个窗口 (macOS)
   * @author 周周
   * @time 2023年02月11日 17:37:22 星期六
   */
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
});
/**
 * @name 关闭所有窗口时退出应用 (Windows & Linux)
 * @author 周周
 * @time 2023年02月11日 17:36:55 星期六
 */
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
