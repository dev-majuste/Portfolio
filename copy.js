const textSelect = document.querySelectorAll('.copyTxt')

textSelect.forEach((txt) => {
    txt.addEventListener('click', function() {
        navigator.clipboard.writeText(txt.innerHTML)
    })
}); 