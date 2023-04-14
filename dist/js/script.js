// Navbar
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;

  if (window.pageYOffset > fixNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

//function perulangan data
function getHobbies() {
  var hobbiesCount = parseInt(document.getElementById("hobbies").value);
  if (isNaN(hobbiesCount) || hobbiesCount < 1) {
    alert("Jumlah Pilihan Hobi harus lebih dari 0");
    return;
  }
  var hobbiesInputs = "";
  for (var i = 0; i < hobbiesCount; i++) {
    hobbiesInputs +=
      '<div class="group mt-6"><label for="hobby-' +
      i +
      '">Pilihan Hobi ' +
      (i + 1) +
      ':</label><input type="text" class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary" id="hobby-' +
      i +
      '" required></div>';
  }
  document.getElementById("hobbies-inputs").innerHTML = hobbiesInputs;
  document.getElementById("hobbies-list").style.display = "block";
}

function showHobbies() {
  var hobbies = [];
  var hobbyInputs = document
    .getElementById("hobbies-inputs")
    .getElementsByTagName("input");
  for (var i = 0; i < hobbyInputs.length; i++) {
    hobbies.push(hobbyInputs[i].value);
  }
  var hobbyOptions = "";
  for (var i = 0; i < hobbies.length; i++) {
    hobbyOptions +=
      '<div class="form-check"><input class="w-full bg-slate-200 text-dark p-3 rounded-md focus:outline-none focus:ring-primary focus:ring-1 focus:border-primary"' +
      i +
      '" value="' +
      hobbies[i] +
      '"><label class="form-check-label"' +
      i +
      '">' +
      hobbies[i] +
      "</label></div>";
  }
  document.getElementById("hobby-options").innerHTML = hobbyOptions;
  document.getElementById("hobbies-select").style.display = "block";
}

function displayInfo() {
  var firstName = document.getElementById("first-name").value;
  var lastName = document.getElementById("last-name").value;
  var email = document.getElementById("email").value;
  var selectedHobbies = [];
  var hobbyOptions = document
    .getElementById("hobby-options")
    .getElementsByTagName("input");
  for (var i = 0; i < hobbyOptions.length; i++) {
    if (hobbyOptions[i].checked) {
      selectedHobbies.push(hobbyOptions[i].value);
    }
  }
  if (selectedHobbies.length === 0) {
    alert("Pilih setidaknya satu hobi");
    return;
  }
  var message =
    "Hallo, nama saya " +
    firstName +
    " " +
    lastName +
    ", dengan email " +
    email +
    ", saya mempunyai sejumlah " +
    selectedHobbies.length +
    " pilihan hobi yaitu " +
    selectedHobbies.join(", ") +
    ", dan saya menyukai " +
    selectedHobbies.join(", ");
  alert(message);
}
