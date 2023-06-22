function alertButton(){
 alert("Hello World!") 
}
function Weather2(){ fetch('https://api.openweathermap.org/data/2.5/weather?zip=34684&appid=2cb44e273a38eb19888d8aeec151da02&units=imperial&mode=html', 
                          {headers: {'Accept' : "application/json'}})
                   
                   .then(response => response.text())
                   .then(text => console.log(text))
                  }
function Weather(){ window.open('https://api.openweathermap.org/data/2.5/weather?zip=34684&appid=2cb44e273a38eb19888d8aeec151da02&units=imperial&mode=html')}
                                
<!-- this is a comment line -->
