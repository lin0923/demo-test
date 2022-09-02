<?php
/*
** filename: config.php
** description: PHP設定檔
** author: Brian Tao | brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/
header("Content-Type: text/html; charset=utf-8");
date_default_timezone_set('Asia/Taipei');
error_reporting(E_ALL);

///////////////////////////////////////////////////////////////////////////////
// 公用變數定義
///////////////////////////////////////////////////////////////////////////////
// log檔定義
$logPath = dirname(__FILE__) . "/../logs/";
$logFile = $logPath . date("Ymd") . ".log";

$config = array();

// 資料庫連線相關
$config['dbhost'] = "localhost";  // host name of IP address (including port number) of database system
$config['dbuser'] = "root";  // db username
$config['dbpass'] = "KEVJPSB9mh7B";   // db password
$cfg_db = $config['dbschema'] = "example"; // database name

// 其它定義
$config['sys_title'] = "資峰科技網路應用程式範例";

// 加入PHP函式庫
include_once("functions.php");
?>