const loadMenu = () => {
    let content = document.getElementById("content");
    let homeImg = document.createElement("img");
    let homeHead = document.createElement("h1");
    let homeText = document.createElement("p");
    homeHead.innerText = "Menu!"
    homeText.innerText = "Woohoo, I'm the menu tab, look at me!"
    content.append(homeHead, homeText);
};
export default loadMenu;