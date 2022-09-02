/*
** filename: login.js
** description: PHP範例網路應用程式登入頁js檔
** author: Brian Tao / brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/
$(document).ready(function($) {
  // bind form submit
  $("#formLogin").submit(function(e){
    // 避免網頁預設送出
    e.preventDefault();
    // 改用AJAX呼叫
    $.ajax({
      type: "POST",
      url: "process-login.php",
      data: $(this).serializeArray(),
      dataType: "json"
    })
    // 伺服器端正確執行完成
    .done(function(data, msg, obj) {
      // 將回傳資料寫入console (F12)
      console.log(data);
      // 如果 _responseCode 不是 0，代表有錯誤
      if (data._responseCode !== "0"){
        // 顯示 _responseString （內容即為該錯誤）
        alert(data._responseString);
      }else{
        // 登入正確，將相關資料寫入 sessionStorage
        sessionStorage.memId = $("#memId").val().trim();
        sessionStorage.memName = data._responseValues.memName;
        sessionStorage.title = data._responseValues.title;
        // 將網頁導向 member.php
        location.replace("../member/member.php");
      }
    })
    // 伺服器端正確執行完成發生問題
    .fail(function(obj, msg, err) {
      alert("伺服器程式錯誤");
    })
    // 不管伺服器是否發生問題都要執行
    .always(function() {
      // do nothing
    });
  });
});
