const mainContainer = document.getElementById("main-container");
const thankContainer = document.getElementById("thank-container");
const submitBtn = document.getElementById("submit-button");
const span = document.getElementById("rated");

const rateButtons = document.querySelectorAll(".rate-button");

const nextPage = function(){
  mainContainer.style.display = "none";
  thankContainer.style.display = "flex";
}

submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  nextPage()
})

rateButtons.forEach(function(rate){
  rate.addEventListener("click", function(e){
    e.preventDefault();
    span.innerHTML = rate.innerHTML;
  })
})