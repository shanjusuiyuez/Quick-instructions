var _bool :string;
function run(_cmd_instructions,_bool){
    var cmd = new ActiveXObject("powershell");
    //如果_bool是以下情况则隐藏系统窗口返回执行信息
    if (_bool == "yes" || _bool == "y" || _bool == "Yes"){
        var cmdstr = "cmd /c " + _cmd_instructions + "> return.txt";
    }
    //如果_bool是以下情况则隐藏系统窗口并执行命令
    else if (_bool == "no" || _bool == "n" || _bool == "No"){
        var cmdstr = "cmd /c " + _cmd_instructions ;
    }
    cmd.run(cmdstr)
}