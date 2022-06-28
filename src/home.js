const loadHome = () => {
    let content = document.getElementById("content");
    let homeImg = document.createElement("img");
    let homeHead = document.createElement("h1");
    let homeText = document.createElement("p");
    homeHead.innerText = "Restaurant Page"
    homeText.innerText = "I'm a simple restaurant tab menu, I'm made with Webpack, that makes me special! \n Let's see what I can do"
    content.append(homeHead, homeText);
};
export default loadHome;