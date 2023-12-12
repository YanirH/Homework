function login () {
    const username = document.querySelector('.usernameInput').value
    const password = document.querySelector('.passwordInput').value
    var changeDivClass = document.getElementById('wrongInputs')

    if (username === "idanmagl@gmail.com" && password === "im1234$$") {
        changeDivClass.classList.remove('bg-danger')
        changeDivClass.classList.add('bg-transparent')
        document.querySelector('.wrongInputs').textContent = ""
        window.open('successLogin.html', '_blank')

    } else {
        changeDivClass.classList.remove('bg-transparent')
        changeDivClass.classList.add('bg-danger')
        document.querySelector('.wrongInputs').textContent = "Username or Password Is Incorrect"
    }
}











// Recovery Password functions \\

function help(){
    window.open('help.html', '_blank')
}

function recoverPassword(){
    const username = document.querySelector('.usernameInput').value
    
    if (username === "idanmagl@gmail.com") {

        document.querySelector('.usernameInput').value = "im1234$$"
        setTimeout(function() {
            document.querySelector('.usernameInput').value = ''
          }, 4000);

         

    }

}