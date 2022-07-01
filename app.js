let btnClose = document.querySelectorAll(".close");
let user = document.querySelectorAll(".request");
let numberConnections = document.getElementById("number-connections");
let accept = document.querySelectorAll(".accept");
let yourCon = document.getElementById("your-connections");
let userName = document.getElementById("user-name");
let editProfile = document.getElementById("edit-profile");

//Connection request
for( let i = 0; i < 2; i++){
    btnClose[i].addEventListener("click", () => {
        user[i].remove();
        let numero = Number(numberConnections.textContent);
        numero--
        numberConnections.innerText = `${numero}`
    });
};
//Your connections
for( let i = 0; i < 2; i++){
    accept[i].addEventListener("click", () => {
        user[i].remove();
        let numero = Number(numberConnections.textContent);
        numero--
        numberConnections.innerText = `${numero}`
        let numero2 = Number(yourCon.textContent);
        numero2++
        yourCon.innerText = `${numero2}`
    });
};

editProfile.addEventListener("click", () => {
    console.log(userName.textContent)
    if(userName.textContent == "Jane Doe"){
        userName.innerText = "Kevin Collao";
    } else {
        userName.innerText = "Jane Doe";
    }
    
});