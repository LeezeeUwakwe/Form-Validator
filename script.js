let userName = document.querySelector('.username')
let userEmail = document.querySelector('.email')
let passWord = document.querySelector('.password')
let confirmPassword = document.querySelector('.val-password')
let button = document.querySelector('button')
button.addEventListener('click', e =>{
    e.preventDefault()
    valUserName()
    valEmail( )
    valPassWord()
    matchPassWord()

})

function valUserName() {
    let errorMsg = document.querySelector('.error-msg1')
    if (userName.value.length < 3) {
        errorMsg.classList.add('block')
        if (userName.classList.contains('success-border')) {
            userName.classList.remove('success-border')
            userName.classList.add('error-border')
        } else {
            userName.classList.add('error-border')
        }
    } else {
        if (errorMsg.classList.contains('block')) {
            errorMsg.classList.remove('block')          
        }
        if (userName.classList.contains('error-border')) {
            userName.classList.remove('error-border')
            userName.classList.add('success-border')
        } else {
            userName.classList.add('success-border')
        }
    }
}

    function valEmail() {
        let errorMsg = document.querySelector('.error-msg2')
        let input = userEmail.value;
        const reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let regResponse = reg.test(input);
        if(regResponse) {
            if (errorMsg.classList.contains('block')) {
                errorMsg.classList.remove('block')          
            }
            if (userEmail.classList.contains('error-border')) {
                userEmail.classList.remove('error-border')
                userEmail.classList.add('success-border')
            } else {
                userEmail.classList.add('success-border')
            }
        } else {
            errorMsg.classList.add('block')
            if (userEmail.classList.contains('success-border')) {
                userEmail.classList.remove('success-border')
                userEmail.classList.add('error-border')
            } else {
                userEmail.classList.add('error-border')
            }
        }
      } 

      function valPassWord (){
          let errorMsg = document.querySelector('.error-msg3')
          if (passWord.value.length < 6) {
             errorMsg.classList.add('block')
             if (passWord.classList.contains('success-border')) {
                 passWord.classList.remove('success-border')
                 passWord.classList.add('error-border')
             } else {
                 passWord.classList.add('error-border')
              }
          }else {
              passWord.classList.add('success-border')
            if (errorMsg.classList.contains('block')) {
                errorMsg.classList.remove('block')          
            }
            if (passWord.classList.contains('error-border')) {
                passWord.classList.remove('error-border')
                passWord.classList.add('success-border')
            } else {
                passWord.classList.add('success-border')
            }
          } 
      }

      function matchPassWord() {
          let errorMsg = document.querySelector('.error-msg4')
          if (confirmPassword.value === passWord.value) {
            if (errorMsg.classList.contains('block')) {
                errorMsg.classList.remove('block')          
            }
            if (confirmPassword.classList.contains('error-border')) {
                confirmPassword.classList.remove('error-border')
                confirmPassword.classList.add('success-border')
            } else {
                confirmPassword.classList.add('success-border')
            }
          } else {
            errorMsg.classList.add('block')
            if (confirmPassword.classList.contains('success-border')) {
                confirmPassword.classList.remove('success-border')
                confirmPassword.classList.add('error-border')
            } else {
                confirmPassword.classList.add('error-border')
            }
        }
      } 














