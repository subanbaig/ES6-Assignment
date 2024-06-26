const APIURL = "https://api.github.com/users/"
const main = document.getElementById('card');
const show = document.querySelector(".show");

const getUser = async (username) =>{
    const respone = await fetch(APIURL + username);
    // console.log(respone);
    const data = await respone.json();
    // console.log(data);
    const card = `
    <div class="card">
        <div>
            <img class="avatar border border-rounded-pill" src="${data.avatar_url}" alt="">
            
        </div>

        <div class="user-info">    
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
                <ul class="info">
                    <li><strong>Followers:</strong> ${data.followers}</li>
                    <li><strong>Following:</strong> ${data.following}</li>
                    <li><strong>Repos:</strong> ${data.public_repos}</li>
                </ul>
        </div>
    </div>
    `
    show.innerHTML = card;
};
getUser("GitHub")

const formSubmit = () => {
    const searchInput = document.querySelector("#search");
    if (searchInput.value != "") {
      getUser(searchInput.value);
      searchInput.value = "";
    }
  
    return false;
  };