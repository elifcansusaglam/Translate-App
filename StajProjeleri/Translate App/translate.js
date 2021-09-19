function Translate(word,language){

  this.apikey = "trnsl.1.1.20210908T054753Z.3ce5ab0c1bf79c65.cdfe4dae6b0ed5dec171d606e227dfe1d091644a" ;

  this.word = word;
  this.language = language;
  this.xhr = new XMLHttpRequest();

}
Translate.prototype.translateSentence = function(callback){
  const endpoint = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=${this.apikey}&text=${this.word}&lang=${this.language}`;
  this.xhr.open("GET",endpoint,true); // asenkron get request
  this.xhr.onload = () => {
    if(this.xhr.status === 200){
      const json = JSON.parse(this.xhr.responseText); // JSON Object
      const text = json.text[0];
      callback(null,text);

    }
    else{
      console.log("There is an error",null);
    }
  }
  this.xhr.send();
}

Translate.prototype.changeParameters = function (newWord , newLanguage) {
  this.word = newWord;
  this.language = newLanguage;
}
