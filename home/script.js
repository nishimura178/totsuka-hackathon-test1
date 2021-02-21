// user/login/regidter.html
$('#register').on('click',function(){

  let ans = confirm('この内容で登録します。よろしいですか？');

  if (ans) {
    location.href = 'login.html';  
  }
  else {
    location.href = '#';
  }

})

// user/home/info.html
$('#change').on('click',function(){

  let state = $('.form-control').prop('disabled');

  if(state){
    $('.form-control').prop('disabled',false);
    $('#change').attr('value','保存');
  }
  else{
    $('.form-control').prop('disabled',true);
    $('#change').attr('value','変更');
  }
  
})