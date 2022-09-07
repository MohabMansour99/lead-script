let eye = document.getElementById('eyeposiyion')
 let password=document.getElementById('password');

eye.addEventListener('click' , 
function()
{
    if(password.type == 'password'){
        password.type='text';
        eye.src='img/eyeshow.svg'
    }else{
        password.type='password';
        eye.src='img/clarity_eye-hide-line.svg'
    }
}
)

