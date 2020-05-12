// Регистрация пользователя

document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let name = document.querySelector('#signup-name').value;
    let pass = document.querySelector('#signup-pass').value;
    let email = document.querySelector('#signup-email').value;
    let birthday = document.querySelector('#signup-birthday').value;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let data = {
        "name": name,
        "pass": pass,
        "email": email,
        "birthday": birthday,
        "sex": sex
    }
    ajax('core/signup.php', 'post', signup, data)

    function signup(result) {
        console.log(result);
        if (result == 2) {
            chips('Fill in all the fields', 3000, 'rgba(145, 0, 0, 0.8)');
        }
        else if (result == 1) {
            chips('Succeful! You can enter now', 3000, 'rgba(0, 145, 44, 0.8)');
            closeModal();
        }
        else {
            chips('Error! Re-register later', 3000, 'rgba(145, 0, 0, 0.8)');
        }
    }
}

// Логин пользователя

document.querySelector('#login-submit').onclick = function (event) {
    event.preventDefault();
    let pass = document.querySelector('#login-pass').value;
    let email = document.querySelector('#login-email').value;
    let data = {
        "pass": pass,
        "email": email
    }
    ajax('core/login.php', 'post', login, data)

    function login(result) {
        console.log(result);
        if (result == 2) {
            chips('Fill in all the fields', 3000, 'rgba(145, 0, 0, 0.8)');
        }
        else if (result == 0) {
            chips('No such user found', 3000, 'rgba(145, 0, 0, 0.8)');
        }
        else {
            console.log(result);
            result = JSON.parse(result);
            let d = new Date();
            d.setTime(d.getTime() + (10 * 60 * 1000));
            let expires = d.toUTCString();
            document.cookie = `email=${result.email}; expires=${expires}; path=/`;
            location.href = "cabinet.php";
        }
    }
}
