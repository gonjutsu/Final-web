i = 0;
$(document).ready(function(){
  $("b").keypress(function(){
    $("span1").text(i += 1);
  });
  $("button").click(function(){
    $("b").keypress();
  });
});