// ------------------------- Инициация / Формирование коллекции -------------------------

// function init() {

    // console.log('инициация!')

let vuices = {}
vuices.set = []
vuices.update = () => {
    vuices.set = []
    let buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        let vuice = {
            node: button,
            phrase: button.innerText.trim().toLowerCase(),
            handler: button.click
        }
        vuices.set.push(vuice)
    })
    console.log(vuices)
    checkRecChecker()
}
//Update on DOMchange
const observer = new MutationObserver(() => vuices.update());
observer.observe(document.body, { childList: true, subtree: true });

vuices.check = (phrase, confidence) => {
    let found = false;
    vuices.set.forEach(vuice => {
        if (phrase == vuice.phrase) {
            snackbar.show(`${phrase}, ${confidence.toFixed(3)}`, true)
            if (vuice.node) vuice.node.click()
            found = true
        }
    })
    if (!found) snackbar.show(`${phrase}, ${confidence.toFixed(3)}`, false)
}

// ------------------------- Recognition init -------------------------

var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
let recognition = new SpeechRecognition()

recognition.lang = 'en-US'
recognition.interimResults = false
recognition.maxAlternatives = 1

// recognition.continuous = false
function checkRecChecker() {
    if (document.getElementById('recognitionState')) {
        if (localStorage.getItem('continuousRecognition') == 'true') {
            // console.log('есть чекер и есть прослушка')
            document.getElementById('recognitionState').checked = true
        }
    }
}
function changeRecognitionState() {
    if (recognitionState.checked) {
        // recognition.continuous = true
        localStorage.setItem('continuousRecognition', 'true')
        recognition.start()
    } else {
        // recognition.continuous = false
        localStorage.setItem('continuousRecognition', 'false')
        recognition.stop()
    }
}

// recognition.onend = () => {if (recognition.continuous) recognition.start()}
recognition.onend = () => {
    if (localStorage.getItem('continuousRecognition') == 'true') recognition.start()
}
recognition.onresult = event => {
    let lastResult = event.results[event.results.length - 1][0]
    let phrase = lastResult.transcript.trim().toLowerCase()
    let confidence = lastResult.confidence
    vuices.check(phrase, confidence)
}

// }


// ------------------------- Проверка возможности -------------------------
if (webkitSpeechRecognition) {
    // init()
    if (localStorage.getItem('continuousRecognition') == 'true') {
        // if (document.getElementById('recognitionState')) document.getElementById('recognitionState').checked = true
        recognition.start()
    }
} else {
    recognitionState.nextElementSibling.innerHTML = `SpeechRecognition don't exists in your browser`
    recognitionState.disabled = true
}