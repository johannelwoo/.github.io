const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById('currentdate').textContent = new Date().toLocaleDateString('en-US', options);


function toggleMenu() {
  document.getElementById("mainNav").classList.toggle("hide");
}

function updateseverity(rating) {
  document.getElementById("ratingvalue").innerHTML = rating;
}