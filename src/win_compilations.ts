//_bool的实现请看run
//start执行已添加系统变量的程序
//shutdown定时关机的实现
//cls清理控制窗口的信息,所以_bool设置为y
//ping还要我提醒？
import { runcmd } from "./runcmd";

var massage: string;
function shutdown( shut_time: string, inbool: string) {
    massage = "at" + shut_time + "Shutdown -s";
    runcmd( massage,inbool);
}
function start(software_name: string, inbool: string) {
    massage = software_name;
    runcmd(massage,inbool);
}
function cls(inbool: string) {
    massage = "cls";
    inbool = "y";
    runcmd(massage,inbool);
}
function ping(website:string, inbool:string) {
    massage = "ping " + website;
    runcmd(massage ,inbool);
}
export{ shutdown , start, cls, ping};