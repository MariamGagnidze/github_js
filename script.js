const input = document.querySelector("input");
const button = document.getElementById("submit");
const toggle_mode = document.getElementById("toggle_mode");

toggle_mode.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  if (toggle_mode.textContent === "dark") {
    toggle_mode.textContent = "light";
  } else {
    toggle_mode.textContent = "dark";
  }
});

button.addEventListener("click", github_users);
addEventListener("keydown", (event) => {
  github_users()
});

  
    function github_users(){
      fetch(`https://api.github.com/users/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const content = document.createElement("div")
content.classList.add("main_container")
        content.innerHTML = `
        <div class="upper_container">
        <div class="avatar">
          <img src="${data.avatar_url}" alt="avatar" width="117px" />
        </div>
        <div class="nickname">
          <h1>${data.name}</h1>
          <span>${data.login}</span>
          <p>${data.bio}</p>
        </div>
        <div class="joined">
          <p>${data.created_at}</p>
        </div>
      </div>

      <div class="footer_container">
        <div class="table">
          <div class="repos">
            <h5>Repos</h5>
            <b>${data.public_repos}</b>
          </div>

          <div class="followers">
            <h5>Followers</h5>
            <b>${data.followers}</b>
          </div>

          <div class="following">
            <h5>Following</h5>
            <b>${data.following}</b>
          </div>
        </div>

        <div class="footer_foot">
          <a href="#"
            ><img src="./images/003-pin.svg" alt="icon" />${data.location}</a
          >
          <a href="#"
            ><img src="./images/002-url.svg" alt="icon" />${data.html_url}</a
          >
          <a href="#"
            ><img src="./images/004-twitter.svg" alt="icon" /> Not Available</a
          >
          <a href="#"><img src="./images/001-office-building.svg" alt="icon" /> ${data.login}</a>
        </div>
      </div>
        `
        const existingMainContainer = document.querySelector(".main_container");
        if (existingMainContainer) {
          existingMainContainer.remove();
        }
        document.body.appendChild(content);

      })
    }



        