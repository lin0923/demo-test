<?php
/*
** filename: irmc_common_functions.php
** description: 公司常用PHP函式檔
** author: Brian Tao | brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/



/////////////////////////////////////////////////////////////////////
// log messages
/////////////////////////////////////////////////////////////////////
// function irmclog($msg, $file_full_path): append log to file
function irmclog($msg, $file_full_path)
{
  return error_log((empty($msg) ? "" : date("[Y-m-d H:i:s] ")) . $msg . PHP_EOL, 3, $file_full_path);
}

// function irmcwrite($msg, $file_full_path): write text to file
function irmcwrite($msg, $file_full_path)
{
  return file_put_contents($file_full_path, $msg . PHP_EOL, FILE_APPEND);
}


/////////////////////////////////////////////////////////////////////
// JSON Responses
/////////////////////////////////////////////////////////////////////
function irmc_compose_response($mi, $rv, $rc, $rs){
  return json_encode(array("_messageIndex" => $mi
                         , "_responseValues" => $rv
                         , "_responseCode" => $rc
                         , "_responseString" => $rs
                         ));
}

function irmc_success_response($rv){
  return irmc_compose_response("0", $rv, "0", "OK");
}

?>