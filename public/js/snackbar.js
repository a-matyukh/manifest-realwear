snackbar.show = (text, status) => {
    snackbar.innerText = text
    
    let color;
    if (status) {
        color = 'var(--voice)'
    } else {
        color = 'var(--red)'
    }
    snackbar.style.backgroundColor = color

    snackbar.className = "show"
    setTimeout(function(){ snackbar.classList.toggle("show") }, 3000)
}