const input = document.querySelector("input");
const button = document.getElementById("search");
const toggle_mode = document.getElementById("toggle_mode");

toggle_mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (toggle_mode.textContent === "dark") {
    toggle_mode.textContent = "light";
  } else {
    toggle_mode.textContent = "dark";
  }
});

// button.addEventListener("click", () => {
//   let searchTerm = input.value;

  
    // fetch(`https://api.github.com/users/${searchTerm}`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     const content_container = document.createElement("div");
    //     const content = document.getElementById("content");

    //     content_container.innerHTML = `
    //     <div>
    //     <img src=${data.avatar_url} alt=${data.login} style="width:50px; border-radius: 50%; height: 50px" />
    //     <h1>${data.name}</h1>
    //     <h4>${data.bio}</h4>
    //     <p>${data.location}</p>
    //     </div>
    //     `})