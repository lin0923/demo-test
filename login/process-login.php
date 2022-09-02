<?php
/*
** filename: process-login.php
** description: 範例PHP網路應用程式登入資料處理頁
** author: Brian Tao | brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/

include_once("../library/config.php");
include_once("../library/db.php");

// 將POST資料解析至變數內
foreach ($_POST as $key => $val) $$key = trim($val);

// 預設值
$loginOK = false;
$responseValues = array();



// 抓資料庫
try{
  $sql = "SELECT * FROM $cfg_db.test_member WHERE memId=? AND isResigned=?";
  $stmt = $db->prepare($sql);
  $stmt->bindValue(1, $memId);
  $stmt->bindValue(2, 'N');
  $stmt->execute();
}catch(PDOException $e){
  // 資料查詢錯誤
  irmclog("(SQL ERROR) [" . $e->getCode() . "] " . $e->getMessage(), $logFile);
  irmcwrite($sql . ";", $logFile);
  echo irmc_compose_response("0", $responseValues, "sql-error", "資料庫查詢錯誤，請通知系統管理者");
  exit();
}


// 比對密碼
if ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
  if (trim($row["memPwd"]) == $memPwd){
    $loginOK = true;
    $responseValues = array("memName" => trim($row["memName"]),
                            "title" => trim($row["title"])
    );
  }
}


if ($loginOK){
  // 密碼正確，登入成功
  irmclog("$memId 登入成功", $logFile);
  echo irmc_success_response($responseValues);
}else{
  // 登入失敗
  irmclog("$memId 登入失敗", $logFile);
  echo irmc_compose_response("0", $responseValues, "login-failed", "帳號或密碼錯誤");
}
?>
