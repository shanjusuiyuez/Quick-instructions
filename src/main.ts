//自动更新模块
require('update-electron-app')({
    repo: 'https://github.com/shanjusuiyuez/Quick-instructions/repo',
    updateInterval: '1 day',
    logger: require('electron-log.txt')
  })
//声明win_compilations.ts的变量
var software_name:string;
var shut_time:string;
var website:string;

console.clear();