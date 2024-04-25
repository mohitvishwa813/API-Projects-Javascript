const input = document.querySelector("#input");
const btn = document.querySelector("#btn");

const btn1 = document.querySelector("#btn1");
const image_container = document.querySelector("#image_container");
btn.addEventListener("click", () => {
  const inputValue = input.value;
  const url = `https://tenor.googleapis.com/v2/search?q=${inputValue}&key=AIzaSyDc8-T_noqiDAhBwTXMPQxe5SS2VxMyJos&client_key=my_test_app&limit=6`;
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      image_container.innerHTML = null;
      for (let i = 0; i < data.results.length; i++) {
        const image = document.createElement("img");
        image.classList.add("image");
        image.src = data.results[i].media_formats.gif.url;
        image_container.appendChild(image);
      }
    });
});

btn1.addEventListener("click", () => {
    image_container.innerHTML = null;
  });
  