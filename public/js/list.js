const buttons = document.querySelectorAll('header button')
for (const button of buttons) {
    button.addEventListener('click', event => {
        buttons.forEach(button => {
            if (button.classList.contains('current')) {
                button.classList.remove('current')
                const main = document.getElementById(`${button.innerText.trim().toLowerCase()}`)
                main.style.display = 'none'
            }

        })
        event.target.classList.add('current')
        const newMain = document.getElementById(`${event.target.innerText.trim().toLowerCase()}`)
        newMain.style.display = 'block'
    })
}

const links = document.querySelectorAll('main a')
for (const link of links) {
    link.onclick = () => {
        window.location = './chat.html'
    }
}
const linksCall = document.querySelectorAll('#call a')
console.log(linksCall)
for (const link of linksCall) {
    link.onclick = () => {
        window.location = './call.html'
    }
}
