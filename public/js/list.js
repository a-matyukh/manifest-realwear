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