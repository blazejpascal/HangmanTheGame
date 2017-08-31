var words = ["kartacz","korpuskularny", "robaki", "pomarancze", "kuraczek", "zborze"];
//var words = ["kajak"];

var app = new Vue({
  el: '#app',
  data: {
    hangmanWord: words[Math.round(Math.random()*(words.length-1))],//TODO dlaczego przenoszac do app2 przestaje dzialac?
    userWord: "",
  },

  methods: {

  }
});

var app2 = new Vue({
  el: '#app2',
  data: {
    contaningArray: app.hangmanWord.split(""),//TODO jak stworzyc tablece
    userLetter: "",
    gallowNumber: 0,
    couter: 0,
    usedLetter: [],
  },

  methods: {
    splitArray: function() {
      var letterGuessed = false;
      var isOver = false;
      for(var i = 0; i< this.contaningArray.length; i++) {
        if (this.userLetter == app.hangmanWord[i]) {
          letterGuessed = true;
          this.contaningArray.splice(i, 1, this.userLetter);
        }
      }
      this.usedLetter.push(this.userLetter);
      this.userLetter = "";
      if (!letterGuessed) {
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
          setTimeout(function(){ location.reload();; }, 1500);

        }
      }
    },
    findX: function() {
      var xCouter = app2.contaningArray.includes("X");
      if(!xCouter) {
        alert("You Win");
        location.reload()
      }
    }
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    letterArray: app2.usedLetter,
  },
  methods: {

  }




});


//app2.contaningArray.forEach((elem, index, array)=>{app2.contaningArray[index] = 'X';});
$(document).ready(function(){
  for(var i=0; i<app2.contaningArray.length; i++) {
    app2.contaningArray.splice(i, 1, "X");
  }
$(".logoTrial").lettering();

});
