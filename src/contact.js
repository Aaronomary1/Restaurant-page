const loadContact = () => {
    let content = document.getElementById("content");
    let homeImg = document.createElement("img");
    let homeHead = document.createElement("h1");
    let homeText = document.createElement("p");
    homeHead.innerText = "Contact!"
    homeText.innerText = "Oy, I'm the contact tab!!"
    content.append(homeHead, homeText);
};
export default loadContact;