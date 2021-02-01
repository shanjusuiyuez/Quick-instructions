function userun(run_instructions){
    run(run_instructions);
}
function shutdown(shut_time){
    var shutdown_cmd = "at"+shut_time+"Shutdown -s";
    run(shutdown_cmd);
}
function start(software_name){
    var start_cmd = software_name;
    run(start_cmd);
}