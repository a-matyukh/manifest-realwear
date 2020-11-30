// Tabs switcher
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
                    if (newMain.id == 'scanqr' && app.scanSuccess) {
                        app.scanSuccess = false
                        app.templateList = true
                    }
                }
            })
        }
    })
}

// Scroll to top
document.addEventListener('scroll' , () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTop.classList.add('active')
    } else {
        scrollToTop.classList.remove('active')
    }
})
scrollToTop.onclick = () => window.scrollTo(0,0)

// Click on tabs
let evt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
    clientX: 220,
    clientY: 40
})

function hideModal() {
    document.getElementById("backAnchor").dispatchEvent(evt)
}
function clickOnContacts() {
    document.getElementById("tabsContacts").dispatchEvent(evt)
}