export function initApp(){
    let exist = false

    if (localStorage.getItem('cookie') !== null) {
        exist = true
    }
    return exist
}

export function buttonPress(){
    localStorage.setItem('cookie', true)
    document.querySelector('.cookie-consent').classList.add("hide")
}
