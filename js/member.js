/*
** filename: member.js
** description: PHP範例網路應用程式會員資料頁js檔
** author: Brian Tao / brian.tao@informc.com
** modification history:
**** 2017.07.20: created
*/
$(document).ready(function($) {
  /////////////////////////////////////////////////////
  // 將所儲存的 sessionStorage 資料放入頁面中
  /////////////////////////////////////////////////////
  $("#header").html("目前登入者：" + sessionStorage.title + " " + sessionStorage.memName);
  
  
  /////////////////////////////////////////////////////
  // 跟server要個人資料
  /////////////////////////////////////////////////////
  $.ajax({
      type: "POST",
      url: "process-member.php",
      data: {action: "getData", memId: sessionStorage.memId},
      dataType: "json"
  })
  .done(function(data, msg, obj) {
    console.log(data);
    // 如果 _responseCode 不是 0，代表有錯誤
    if (data._responseCode !== "0"){
      // 顯示 _responseString （內容即為該錯誤）
      $("#header").html(data._responseString);
    }else{
      // 資料傳回，填入相關欄位
      $("#memId").val(data._responseValues.memId);
      $("#memName").val(data._responseValues.memName);
      $("#memPwd").val("");
      $("#title").val(data._responseValues.title);
      $("#lastModified").val(data._responseValues.lastModified);
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
  
  
  /////////////////////////////////////////////////////
  // bind form submit 儲存資料
  /////////////////////////////////////////////////////
  $("#formMember").submit(function(e){
    // 避免網頁預設送出
    e.preventDefault();
    // 改用AJAX呼叫
    $.ajax({
      type: "POST",
      url: "process-member.php",
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
        // 儲存完成
        alert(data._responseString);
        // 重新載入網頁
        // location.reload();
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
  
  
  /////////////////////////////////////////////////////
  // bind loadSalary button 檢視歷史調薪紀錄
  /////////////////////////////////////////////////////
  $("#loadSalary").click(function(e){
    $.ajax({
      type: "POST",
      url: "process-member.php",
      data: {action: "loadSalary", memId: sessionStorage.memId},
      dataType: "html"
    })
    // 伺服器端正確執行完成
    .done(function(data, msg, obj) {
      // 將回傳資料直接放入網頁區塊
      $("#salaryTable").show();
      $("#recordSalaryTable").hide();
      $("#salaryTable").html(data);
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

  function load()
  {
      $.ajax({
        type: "POST",
        url: "process-member.php",
        data: {action: "loadSalary", memId: sessionStorage.memId},
        dataType: "html"
      })
          // 伺服器端正確執行完成
          .done(function(data, msg, obj) {
            // 將回傳資料直接放入網頁區塊
            $("#salaryTable").show();
            $("#recordSalaryTable").hide();
            $("#salaryTable").html(data);
          })
          // 伺服器端正確執行完成發生問題
          .fail(function(obj, msg, err) {
            alert("伺服器程式錯誤");
          })
          // 不管伺服器是否發生問題都要執行
          .always(function() {
            // do nothing
          });
  }

  /////////////////////////////////////////////////////
  // bind newSalary button 新增調薪紀錄
  /////////////////////////////////////////////////////
  $("#newSalary").click(function(e){
    $.ajax({
      type: "POST",
      url: "process-member.php",
      data: {action: "loadSalary", memId: sessionStorage.memId},
      dataType: "html"
    })
        // 伺服器端正確執行完成
        .done(function(data, msg, obj) {
          console.log(data);
          // 將回傳資料直接放入網頁區塊
          $("#salaryTable").hide();
          $("#recordSalaryTable").show();
          $("#recordSalaryTable").load("../include_html/recordSalaryTable.html #container");
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

  $('#recordSalaryTable').on('click','#sss',function() {
    let adjustSalary=$('#adjustSalary').val();
    let adjustReason=$('#adjustReason').val();
    $.ajax({
      type: "POST",
      url: "process-member.php",
      data: {action: "insertData", memId: sessionStorage.memId, memSalary: adjustSalary, memReason: adjustReason},
      dataType: "json"
    })
        // 伺服器端正確執行完成
        .done(function(data, msg, obj) {
          // 將回傳資料寫入console (F12)
          console.log(data);
          $("#recordSalaryTable").hide();
          // 如果 _responseCode 不是 0，代表有錯誤
          if (data._responseCode !== "0"){
            // 顯示 _responseString （內容即為該錯誤）
            alert(data._responseString);
          }else{
            // 儲存完成
            alert(data._responseString);
            load();
            // 重新載入網頁
            // location.reload();
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

  
  /////////////////////////////////////////////////////
  // bind logout button 登出
  /////////////////////////////////////////////////////
  $("#logout").click(function(e){
    sessionStorage.clear();
    location.replace("../login/login.php");
  });

});

