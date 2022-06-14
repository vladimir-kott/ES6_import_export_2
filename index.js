import './index.css';
import * as App from './app'

function main(){
    //localStorage.removeItem("cookie");
    const cookiePanel = document.querySelector('.cookie-consent')
    const cookieButton = document.querySelector('.cookie-consent__button')
    cookieButton.addEventListener("click", App.buttonPress)
    App.initApp() ? cookiePanel.classList.add('hide') : ''  
}

main()
