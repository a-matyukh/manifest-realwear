//////////////////////////////////////////////// Header
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

//////////////////////////////////////////////// List
///////////////////////////////// Last
fetch("./js/last.json")
.then(res => res.json())
.then(data => {
    let html = ``;
    let key = 1;
    for (const chat of data) {
        let avatar = `<img src="./img/group-chat.png" class="avatar">`
        if (chat.single) {
            avatar = `<div class="avatar"><span>RW</span></div>`
        } else {
            avatar = `<img src="./img/group-chat.png" class="avatar"></img>`
        }
        let section = `
            <section>
                <button>${key}</button>
                ${avatar}
                <a href='./chat.html' class="chat-name">${chat.name}</a>
            </section>
        `
        key++
        html += section
    }
    last.innerHTML = html
})


const links = document.querySelectorAll('main a')
for (const link of links) {
    link.onclick = () => {
        window.location = './chat.html'
    }
}

const linksCall = document.querySelectorAll('#call a')
for (const link of linksCall) {
    link.onclick = () => {
        window.location = './call.html'
    }
}