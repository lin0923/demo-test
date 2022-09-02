<?php
/*
** filename: db.php
** description: PHP資料庫連線設定檔
** author: Brian Tao | brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/

try { 
  $db = new PDO('mysql:host=' . $config['dbhost'] . ';dbname=' . $config['dbschema']
                , $config['dbuser']
                , $config['dbpass']
                , array(PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION)
                ); 
}catch (PDOException $e){ 
  echo irmc_compose_response("0", array(), "server-error", "資料庫連線錯誤，請通知系統管理者");
  irmclog("[" . $e->getCode() . "] " . $e->getMessage(), $logFile);
  exit();
}
$db->query("SET NAMES 'utf8'"); 

/* sql sample
$sql = "SELECT * FROM $cfg_db.test_member";
$stmt = $db->query($sql);
while ($res = $stmt->fetch(PDO::FETCH_ASSOC)){
  echo "<br>";
  var_dump($res);
}
*/

?>