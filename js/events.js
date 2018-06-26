function getIt() {
  $('p').on('click', function(){
    alert('Hey!');
  });
  return;
}

function frameIt() {
  $("img").addClass("tasty")
  return;
}

function pressIt(){
  $('form').on('keydown', function(key){
    if(key.which == 71){
    alert('You have pressed the "g" key!');
    }
  });
  return;
}

$(document).ready(function(){
  getIt()
  frameIt()
  pressIt()
});
