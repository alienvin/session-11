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
    if (question7 === "Regardez...moi") {
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

var messages = ["Vous êtes un parfait connaisseur de l'univers de J.K Rowling!", "Pas mal, vous y êtes presque", "Va falloir revisionner toute la série Harry Potter dispo sur Netflix!"];

var range; 

  if (correct < 1) {
      range = 2;

  }

  if (correct > 0 && correct < 3) {
      range = 1;

  }

  if (correct > 2) {
      range = 0; 
  }

document.getElementById("after_submit").style.visibility = "visible";


document.getElementById("message").innerHTML = message[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct."; 

}