window.onload = function() {
    // 計算ボタンを押した際の動作を設定
    document.getElementById('calc_button').onclick = function() {
      post();
    };
    var xhr = new XMLHttpRequest();
    // サーバからのデータ受信を行った際の動作
    xhr.onload = function (e) {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          var answer = document.getElementById('answer');
          answer.value = xhr.responseText;
        }
      }
    };
  };
  
  // 計算ボタンを押した際の動作
  function post() {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://localhost:8000/hack_u_hakodate-a05/hakodate-a05/calc.php');
    xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
    // フォームに入力した値をリクエストとして設定
    var request = "arg1=" + arg1.value + "&arg2=" + arg2.value;
    xhr.send('request');
  };