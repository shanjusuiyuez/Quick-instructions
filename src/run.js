"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runcmd = void 0;
function runcmd(_a) {
    var _cmd_instructions = _a._cmd_instructions, _bool = _a._bool;
    var cmdstr;
    var cmd = new ActiveXObject("powershell");
    //如果_bool是以下情况则隐藏系统窗口返回执行信息
    if (_bool == "yes" || _bool == "y" || _bool == "Yes") {
        cmdstr = "cmd /c " + _cmd_instructions + "> return.txt";
        cmd.run(cmdstr);
    }
    //如果_bool是以下情况则隐藏系统窗口并执行命令
    else if (_bool == "no" || _bool == "n" || _bool == "No") {
        cmdstr = "cmd /c " + _cmd_instructions;
        cmd.run(cmdstr);
    }
}
exports.runcmd = runcmd;
