const result = document.querySelector(".result");
const input = document.querySelector("#input");
const btn = document.querySelector(".search");
const sample = document.querySelector("#sample");
const pos = document.querySelector("#pos");
const mean = document.querySelector("#mean");
const example = document.querySelector("#example");

btn.addEventListener('click', function() {
    let inputValue = input.value;
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`;

    fetch(url)
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(function(data) {
            console.log(data);
            sample.innerText = inputValue;
            pos.innerText = data[0].meanings[0].partOfSpeech;
            mean.innerText = data[0].meanings[0].definitions[0].definition;
            example.innerText = ""; // Clear previous example content
            if (data[0].meanings[0].definitions[0].example) {
                example.innerText = data[0].meanings[0].definitions[0].example;
            }
        })
        .catch(function(error) {
            console.error('Error:', error);
            sample.innerText = "Error occurred";
            pos.innerText = "";
            mean.innerText = "";
            example.innerText = "";
        });
});
