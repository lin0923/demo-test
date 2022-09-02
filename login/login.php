<?php
/*
** filename: login.php
** description: 範例PHP網路應用程式登入頁
** author: Brian Tao | brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/

include_once("../library/config.php");
?>
<html>
<head>
  <title><?php echo $config['sys_title']; ?></title>
  <link rel="stylesheet" href="../css/global.css" />    
</head>
<body>
<p>測試可用 0001/0001, 0002/0002, 0003/0003, 0004/0004 或 0005/0005</p>
<form name="formLogin" id="formLogin" method="POST">
  帳號 <input type="text" name="memId" id="memId">
  <br>
  密碼 <input type="password" name="memPwd" id="memPwd">
  <br>
  <input type="submit" value="登入">
</form>
<!-- js最適放置為 body tag 結束前 -->
<script src="../js/jquery-3.2.1.min.js"></script>
<script src="../js/login.js"></script>
</body>
</html>