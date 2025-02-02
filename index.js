const menuHome = () => {
  document.getElementById("contentFrame").setAttribute("src", "home.html");
  document.getElementById("menuHome").style =
    "color: black; background-color: white;";
  document.getElementById("menuJukebox").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuGuestbook").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuPhoto").style =
    "color: white; background-color: #298eb5;";
};

const menuJukebox = () => {
  document.getElementById("contentFrame").setAttribute("src", "jukebox.html");
  document.getElementById("menuJukebox").style =
    "color: black; background-color: white;";
  document.getElementById("menuHome").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuGuestbook").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuPhoto").style =
    "color: white; background-color: #298eb5;";
};

const menuGuestbook = () => {
  document.getElementById("contentFrame").setAttribute("src", "practice.html");
  document.getElementById("menuGuestbook").style =
    "color: black; background-color: white;";
  document.getElementById("menuHome").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuJukebox").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuPhoto").style =
    "color: white; background-color: #298eb5;";
};

const menuPhoto = () => {
  document.getElementById("contentFrame").setAttribute("src", "photos.html");
  document.getElementById("menuPhoto").style =
    "color: black; background-color: white;";
  document.getElementById("menuHome").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuJukebox").style =
    "color: white; background-color: #298eb5;";
  document.getElementById("menuGuestbook").style =
    "color: white; background-color: #298eb5;";
};
