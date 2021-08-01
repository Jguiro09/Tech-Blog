const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(username);
    console.log(password);

}

document.querySelector('.login-form').addEventListener('submit', loginFormHandler);