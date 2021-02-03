"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runcmd = void 0;
function runcmd(_cmd_instructions, _bool) {
    var cmdstr;
    //如果_bool是以下情况则隐藏系统窗口返回执行信息
    if (_bool == "yes" || _bool == "y" || _bool == "Yes") {
        cmdstr = "cmd /c " + _cmd_instructions + "> return.txt";
        var cmd = new ActiveXObject("WScript.Shell").Run(cmdstr);
        cmd();
    }
    //如果_bool是以下情况则隐藏系统窗口并执行命令
    else if (_bool == "no" || _bool == "n" || _bool == "No") {
        cmdstr = "cmd /c " + _cmd_instructions;
        var cmd = new ActiveXObject("WScript.Shell").Run(cmdstr);
        cmd();
    }
}
exports.runcmd = runcmd;
