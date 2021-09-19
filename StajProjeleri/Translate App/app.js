// Prototype ,Ajax Callback

eventListeners();

function eventListeners(){
  document.getElementById("translate-form").addEventListener("submit",translateSentence);

  document.getElementById("language").onchange = function(){ // change language

    ui.changeUI();

  }
}

const translate = new Translate(document.getElementById("word").value , document.getElementById("language").value);
const ui = new UI;

function translateSentence(e){
  translate.changeParameters(document.getElementById("word").value , document.getElementById("language").value);

  translate.translateSentence(function(err,response){
    if(err){ //there is an error
      console.log(err);
    }
    else {
        ui.displayTranslate(response);
    }
  });
  e.preventDefault();
}
