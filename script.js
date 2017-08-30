var words = ["kartacz","korpuskularny", "robaki", "pomarancze", "kuraczek", "zborze"];

var app = new Vue({
  el: '#app',
  data: {
    hangmanWord: words[Math.round(Math.random()*(words.length-1))],
    userWord: ""
  },

  methods: {
    addFrom: function() {
      location.reload();
    },
    addWord: function() {
      this.hangmanWord = this.userWord ;
      console.log("im working why im not printing");
    }
  }
});

var app2 = new Vue({
  el: '#app-2',
  data: {
    contaningArray: app.hangmanWord.split(""),//TODO jak stworzyc tablece
    userLetter: "",
    gallowNumber: 0,
    emptyBox: '<div class="emptyBoxes">  </div>',
  },

  methods: {
    splitArray: function() {
      var letterGuessed = false;
      var isOver = false;
      var usedLetter=[];
      for(var i = 0; i< this.contaningArray.length; i++) {
        if (this.userLetter == app.hangmanWord[i]) {
          letterGuessed = true;
          this.contaningArray.splice(i, 1, this.userLetter);
        }
      }
      this.userLetter = "";
      if (!letterGuessed) {
        //usedLetter.push(this.userLetter);
        console.log(this.userLetter);

        if (this.gallowNumber <= 5) {
          this.gallowNumber++;
          document.getElementById("element" + this.gallowNumber).style.opacity = "1";
          console.log(this.gallowNumber);
        }

        if ( this.gallowNumber == 6) {
          document.getElementById("element" +this.gallowNumber).style.opacity = "1";
          isOver = true;
          console.log(isOver);
        }
        if (isOver == true) {
          setTimeout(function(){ alert("game over"); }, 500);
          }
      }
    }
          }

});

//app2.contaningArray.forEach((elem, index, array)=>{app2.contaningArray[index] = 'X';});
$(document).ready(function(){
  for(var i=0; i<app2.contaningArray.length; i++) {
    app2.contaningArray.splice(i, 1, "X");
  }
});
