// Show or hide password
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

// Foolproof on user registration page
$('#register').on('click',function(){

  let ans = confirm('この内容で登録します。よろしいですか？');

  if (ans) {
    location.href = 'login.html';  
  }
  else {
    location.href = '#';
  }

})

// Change and save password after login
$('#change').on('click',function(){

  let state = $('.form-control').prop('disabled');

  if(state){
    $('.form-control').prop('disabled',false);
    $('#pw-toggle').prop('disabled',false);
    $('#change').attr('value','保存');
  }
  else{
    $('#password').prop('type','password');
    $('.form-control').prop('disabled',true);
    $('#pw-toggle').prop('checked',false);
    $('#pw-toggle').prop('disabled',true);
    $('#change').attr('value','変更');
  }

  
  
})
// Generate google map
function initMap() {
  var opts = {
    zoom: 15,
    center: new google.maps.LatLng(35.378647, 139.529183)
  };
  var map = new google.maps.Map(document.getElementById("map"), opts);
}