const content = document.querySelector(".p");
const url = "https://catfact.ninja/fact";
const rand=document.querySelector("button")
function change(){
  
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    content.innerHTML = data.fact; // Assuming the API response has a property named "fact"
  })
  .catch(function (err) {
    console.log("Error:", err);
  });

  
}
rand.addEventListener('click',()=>{
  change();
})
change();
