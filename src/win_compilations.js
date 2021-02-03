"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ping = exports.cls = exports.start = exports.shutdown = void 0;
//_bool的实现请看run
//start执行已添加系统变量的程序
//shutdown定时关机的实现
//cls清理控制窗口的信息,所以_bool设置为y
//ping还要我提醒？
var runcmd_1 = require("./runcmd");
var massage;
function shutdown(shut_time, inbool) {
    massage = "at" + shut_time + "Shutdown -s";
    runcmd_1.runcmd(massage, inbool);
}
exports.shutdown = shutdown;
function start(software_name, inbool) {
    massage = software_name;
    runcmd_1.runcmd(massage, inbool);
}
exports.start = start;
function cls(inbool) {
    massage = "cls";
    inbool = "y";
    runcmd_1.runcmd(massage, inbool);
}
exports.cls = cls;
function ping(website, inbool) {
    massage = "ping " + website;
    runcmd_1.runcmd(massage, inbool);
}
exports.ping = ping;
