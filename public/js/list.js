//////////////////////////////////////////////// Header
const tabs = document.querySelectorAll('#tabs button')
for (const tab of tabs) {
    tab.addEventListener('click', event => {
        if (event.target.nodeName == "BUTTON") {
            tabs.forEach(tab => {
                if (tab.classList.contains('current')) {
    
                    tab.classList.remove('current')
                    event.target.classList.add('current')
    
                    const main = document.getElementById(`${tab.innerText.trim().toLowerCase().replace(/\s/g, '')}`)
                    main.style.display = 'none'
    
                    const newMain = document.getElementById(`${event.target.innerText.trim().toLowerCase().replace(/\s/g, '')}`)
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

//////////////////////////////////////////////// List
///////////////////////////////// Last
function makeDoubleLettersAva(name) {
    let words = name.split(' ')
    let letters = ``
    for (const word of words) {
        let letter = word.charAt(0).toUpperCase()
        letters += letter
    }
    return letters
}
fetch("./js/last.json")
.then(res => res.json())
.then(data => {
    let html = ``
    let key = 1
    for (const chat of data) {
        let avatar = `<img src="./img/group-chat.png" class="avatar">`
        if (chat.single) {
            let sign = makeDoubleLettersAva(chat.name);
            avatar = `<div class="avatar"><span>${sign}</span></div>`
        } else {
            avatar = `<img src="./img/group-chat.png" class="avatar"></img>`
        }
        let section = `
            <section>
                <button>${key}</button>
                ${avatar}
                <button class="chat-name">${chat.name}</button>
            </section>
        `
        key++
        html += section
    }
    last.innerHTML = html
})

// Scroll to top
let header = document.getElementsByTagName('header')[0]
document.addEventListener('scroll' , e => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.classList.add('active')
    } else {
        scrollToTop.classList.remove('active')
    }
})
scrollToTop.onclick = () => window.scrollTo(0,0)


const links = document.querySelectorAll('main a')
for (const link of links) {
    link.onclick = () => {
        window.location = './chat.html'
    }
}
setTimeout(() => {
    const buttons = document.querySelectorAll('#last button')
    for (const button of buttons) {
        button.onclick = () => {
            window.location = './chat.html'
        }
    }
}, 100)


// Call
const linksCall = document.querySelectorAll('#call a')
for (const link of linksCall) {
    link.onclick = () => {
        window.location = './call.html'
    }
}

function hideModal() {
    let evt = new MouseEvent("click", {
        view: window,
        bubbles: true,
        cancelable: true,
        clientX: 220,
        clientY: 40
    })
    ele = document.getElementById("backAnchor");
    ele.dispatchEvent(evt);
}