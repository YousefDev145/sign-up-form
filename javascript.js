const password = document.querySelector('#password');
const passwordConfirm = document.querySelector('#confirm-password');
password.addEventListener('input', passwordMatch);
passwordConfirm.addEventListener('input', passwordMatch);

function passwordMatch()
{
    if (password.value === passwordConfirm.value)
    {
        passwordConfirm.classList.remove('not-matching');
    }
    else
    {
        passwordConfirm.classList.add('not-matching');
    }
}