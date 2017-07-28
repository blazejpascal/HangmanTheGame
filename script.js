var words = ["kartacz","korpuskularny", "robaki", "pomarancze", "kuraczek", "zborze"];
var app = new Vue({
  el: '#app',
  data: {
    hangmanWord: words[Math.round(Math.random()*(words.length-1))]
  }
})
$(document).ready(function(){
var getWord = function getWord (){
  var newWord = document.getElementById("userInput").value; // TODO co z ".value"?
  //console.log(newWord);
  var newArray = newWord.split("");
  for (i=0 ; i< newArray.length; i++) {
    $('body').append('<div class="letter">kurczak</div>');
    //console.log(newArray.length);
  }
};

$(".startGame").on("click", getWord);
});
