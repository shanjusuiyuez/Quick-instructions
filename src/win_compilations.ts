//_bool的实现请看run
//start执行已添加系统变量的程序
//shutdown定时关机的实现
//cls清理控制窗口的信息,所以_bool设置为y
//ping还要我提醒？
var massage :string;
function shutdown(shut_time,_bool){
    massage = "at"+shut_time+"Shutdown -s";
    run(massage,_bool);
}
function start(software_name,_bool){
    massage = software_name;
    _bool = "y";
    run(massage,_bool);
}
function cls(_bool){
    massage = "cls";
    run(massage,_bool);
}
function ping(website,_bool){
    massage = "ping"+website;
    run(massage,_bool);
}