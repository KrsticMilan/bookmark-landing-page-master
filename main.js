function openTab(evt, tabName) {
  const x = document.getElementsByClassName("city");
  for (let i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  const tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < x.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" w3-border-red", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.firstElementChild.className += " w3-border-red";
}
document.getElementById("defaultOpen").click();

const coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function openNav() {
  document.querySelector(".navList").style.display = "flex";
}

function closeNav() {
  document.querySelector(".navList").style.display = "none";
}

function ValidateEmail() {
  const inputText = document.getElementById("email").value;
  var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (inputText.match(mailformat)) {
    alert("Valid email address!");
    inputText.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    inputText.focus();
    return false;
  }
}
