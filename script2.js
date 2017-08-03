var words = ["kartacz","korpuskularny", "robaki", "pomarancze", "kuraczek", "zborze"];
var app = new Vue({
  el: '#app',
  data: {
    hangmanWord: words[Math.round(Math.random()*(words.length-1))],

  },

});

var app2 = new Vue({
  el: '#app-2',
  data: {
    contaningArray: app.hangmanWord.split(""),//TODO jak stworzyc tablece
    userLetter: "",
    gallowNumber: 1
  },
  methods: {
    splitArray: function() {
      var letterGuessed = false;
      for(var i = 0; i< this.contaningArray.length; i++) {
        if (this.userLetter == app.hangmanWord[i]) {
          letterGuessed = true;
          this.contaningArray.splice(i, 1, this.userLetter);
        }
      }
      this.userLetter = "";
      if (!letterGuessed) {
        //  document.querySelector('.col-sm-4:nth-child(' + this.gallow.column + ') .gallows:nth-child(' + this.gallow.row + ')').style.backgroundColor = 'orange';
        //$("#" + this.gallowNumber).css("background-color", "orange");
        //document.querySelector("#" + this.gallowNumber).style.backgroundColor = "red";
        if (this.gallowNumber < 7)
          document.getElementById(this.gallowNumber).style.backgroundColor = "red";
        this.gallowNumber++;
        if (this.gallowNumber >= 8) {
          alert("Game Over");
          location.reload();
        }
      }

    }
  }

});

//app2.contaningArray.forEach((elem, index, array)=>{app2.contaningArray[index] = 'X';});
$(document).ready(function(){
  for(var i=0; i<app2.contaningArray.length; i++) {
    app2.contaningArray.splice(i, 1, 'X');
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
