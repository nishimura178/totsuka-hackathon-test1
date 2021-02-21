$(document).ready(function(){

  // user/login/regidter.html
  $('#register').on('click',function(){

    let ans = confirm('この内容で登録します。よろしいですか？');

    if (ans) {
      location.href = 'login.html';  
    }
    
    else {
      location.href = '#';
    };

  });

  // user/home/info.html
  $('#change').on('click',function(){

    if($('input').prop('disabled')){

      $('input').prop('disabled',false);
    
    }else{

      let ans = confirm('この内容に変更します。よろしいですか？');

      if(ans){

        $('input').prop('disabled',true);

      }else{

        location.href = '#';

      };

    };

  });

});