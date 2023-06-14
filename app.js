function alertButton(){
 alert("Hello World!") 
}
function Weather(){ fetch('https://api.openweathermap.org/data/2.5/weather?zip=34684&appid=2cb44e273a38eb19888d8aeec151da02&units=imperial&mode=html')
                   .then(response => response.text())
                   .then(text => console.log(text))
                  }
<!--comment function Weather() {window.open ("https://api.openweathermap.org/data/2.5/weather?zip=34684&appid=2cb44e273a38eb19888d8aeec151da02&units=imperial&mode=html);
   -->                               }
