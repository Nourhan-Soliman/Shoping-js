
document.addEventListener("DOMContentLoaded", () => {
  let userInfo = document.getElementById("userInfo");
  let userDom = document.getElementById("user");
  let links = document.getElementById("links");
  let username = window.localStorage.getItem("username");
  let logOutBtn = document.getElementById("logOut");

  // Check if username exists in localStorage
  if (username) {
    // Remove the login/register links
    if (links) {
      links.remove();
    }

    // Show the user info section
    if (userInfo) {
      userInfo.style.display = "flex";
    }

    // Display the username
    if (userDom) {
      userDom.innerHTML = username;
    }
  }

  // Log out functionality
  if (logOutBtn) {
    logOutBtn.addEventListener("click", logout);
  }

  function logout() {
    window.localStorage.clear();
    setTimeout(() => {
      window.location = "../register.html";
    }, 1500);
  }
});
