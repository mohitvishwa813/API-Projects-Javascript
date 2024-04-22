const jokeContainer = document.querySelector("#joke");
const btn = document.querySelector("#btn");
const url =
  "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist";

  let getJoke = () => {
    fetch(url)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data); // Log the entire data object to inspect its structure
       
if(data.type=="single"){
    jokeContainer.textContent = data.joke;
}
else{
    getJoke();
}
      })
      .catch(function(error) {
        console.error('Error fetching joke:', error);
      });
  };
  btn.addEventListener("click",getJoke);
  getJoke();