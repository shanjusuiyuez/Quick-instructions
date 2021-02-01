function run(_cmd_instructions){
    var cmd = new ActiveXObject("cmd");
    var cmdstr = "cmd /c " + _cmd_instructions;
    cmd.run(cmdstr)
}