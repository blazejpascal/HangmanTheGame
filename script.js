var words = ["kartacz","korpuskularny", "robaki", "pomarancze", "kuraczek", "zborze"];
var app = new Vue({
  el: '#app',
  data: {
    hangmanWord: words[Math.round(Math.random()*(words.length-1))],

  }
});

var app2 = new Vue({
el: '#app-2',
data: {
  contaningArray: app.hangmanWord.split(""),

},
methods: {
/*  splitArray: function() {
    for (var i=0; i< contaningArray.length; i++) {
      console.log(contaningArray[i]);
    }
  }*/
}

});








/*})
$(document).ready(function(){
var getWord = function getWord (){
  var newWord = document.getElementById("userInput").value;
  //console.log(newWord);
  var newArray = newWord.split("");
  for (i=0 ; i< newArray.length; i++) {
    $('body').append('<div class="letter">kurczak</div>');

  }
};

$(".startGame").on("click", getWord);
});
*/
