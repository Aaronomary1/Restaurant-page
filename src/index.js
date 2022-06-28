import loadHome from './home';
import loadMenu from './menu';
import loadContact from './contact';
import './style.css'

loadHome();
let logic = (function(){
    let content = document.getElementById("content");
    let home = document.getElementById("home");
    let menu = document.getElementById("menu");
    let contact = document.getElementById("contact");
    let clear = function(){
        content.innerHTML = "";
    }
    let listen = function(){
        menu.addEventListener("click", function(){
            clear();
            loadMenu();
        })
        home.addEventListener("click", function(){
            clear();
            loadHome();
        })
        contact.addEventListener("click", function(){
            clear();
            loadContact();
        })
    }
    return{
        listen:listen
    };
})();
logic.listen();