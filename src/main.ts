//自动更新模块
require('update-electron-app')({
    repo: 'https://github.com/shanjusuiyuez/Quick-instructions/repo',
    updateInterval: '1 day',
    logger: require('electron-log.txt')
  });

console.clear();