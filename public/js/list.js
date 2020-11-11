const tabs = document.querySelectorAll('header a')
for (const tab of tabs) {
    tab.addEventListener('click', event => {
        if (event.target.nodeName == "A") {
            tabs.forEach(tab => {
                if (tab.classList.contains('current')) {
    
                    tab.classList.remove('current')
                    event.target.classList.add('current')
    
                    const main = document.getElementById(`${tab.innerText.trim().toLowerCase()}`)
                    main.style.display = 'none'
    
                    const newMain = document.getElementById(`${event.target.innerText.trim().toLowerCase()}`)
                    if (newMain.id == 'last') {
                        newMain.style.display = 'grid'
                    } else {
                        newMain.style.display = 'block'
                    }
    
                }
            })
        }
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