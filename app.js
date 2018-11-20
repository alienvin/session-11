function check(){

 var question1 = document.quiz.question1.value;
 var question2 = document.quiz.question2.value;
 var question3 = document.quiz.question3.value;
 var question4 = document.quiz.question4.value;
 var question5 = document.quiz.question5.value;
 var question6 = document.quiz.question6.value;
 var question7 = document.quiz.question7.value;
 var question8 = document.quiz.question8.value;
 var question9 = document.quiz.question9.value;
 var question10 = document.quiz.question10.value;
 var correct = 0;

    if (question1 === "Rowena Serdaigle, Godric Gryffondor, Helga Poufsouffle, Salazar Serpentard") {
        correct++; 
  }
    if (question2 === "1981") {
        correct++;
  }
    if (question3 === "La métamorphose") {
        correct++;
  }
    if (question4 === "Hawaïen + Latin") {
        correct++;
  }
    if (question5 === "Chocogrenouille") {
        correct++;
  }
    if (question6 === "Un terrier") {
        correct++;
  }
    if (question7 === "'Regardez...moi'") {
        correct++;
  }
    if (question8 === "L'épée de Godric Gryffondor") {
        correct++;
  }
    if (question9 === "En bois de houx et plume de phénix") {
        correct++;
  }
    if (question10 === "Draco dormiens nunquam titillandus") {
        correct++; 
  }

var messages = ["Bravo ! Tu es un parfait connaisseur de l'univers de J.K Rowling!", "Pas mal, tu y es presque...", "Va falloir revisionner toute la série Harry Potter dispo sur Netflix! Remonte la page pour découvrir les réponses."];
var pictures = ["img/success_gif.gif", "img/giphy_bof_success.gif", "img/fail_gif.gif"];


var range; 

  if (correct <= 4) {
      range = 2;

  }

  if (correct > 5 && correct < 7) {
      range = 1;

  }

  if (correct > 8) {
      range = 0; 
  }

document.getElementById("after_submit").style.visibility = "visible";
[].forEach.call(document.getElementsByClassName("answer"), function (el) {
  el.style.visibility = "visible";
});


document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "Tu as  " + correct + " /10.";
document.getElementById("picture").src = pictures[range]; 
}



