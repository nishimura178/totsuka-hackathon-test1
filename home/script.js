// visualize/hide password
$('#pw-toggle').on('click',function(){

  let state = $('#password').prop('checked');

  if(!state){
    $('#password').prop('checked',true);
    $('#password').prop('type','text');
  }
  else{
    $('#password').prop('checked',false);
    $('#password').prop('type','password');
  }

})

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

function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.1239654, 136.9417741)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);
}