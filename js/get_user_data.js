document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "yyyy-mm-dd"
    });
});

// Получаем данные залогиненного пользователя

let userEmail = getCookie('email');
console.log(userEmail);
ajax('core/get_user_data.php', 'post', getUserData, { 'email': userEmail });

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// Получаем данные залогиненного пользователя

function getUserData(result) {
    result = JSON.parse(result);
    console.log(result);
    document.querySelector('#signup-name').value = result.name;
    document.querySelector('#signup-pass').value = result.password;
    document.querySelector('#signup-birthday').value = result.birthday;
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].value == result.sex) {
            sex[i].checked = true;
        }
    }
    M.updateTextFields(); 
}

document.querySelector('#signup-submit').onclick = function (event) {
    event.preventDefault();
    let sex = document.querySelectorAll('.sex');
    for (let i = 0; i < sex.length; i++) {
        if (sex[i].checked) {
            sex = sex[i].value;
            break;
        }
    }
    let updateData = {
        'email': userEmail,
        "name": document.querySelector('#signup-name').value,
        "pass": document.querySelector('#signup-pass').value,
        "birthday": document.querySelector('#signup-birthday').value,
        "sex": sex
    }

    ajax('core/update_user_data.php', 'post', updateUserData, updateData);
}

function updateUserData(result) {
    console.log(result);
    if (result == 1) {
        // M.toast({ html: 'Change is succeful!' })
        chips('Change is succeful!', 3000, 'rgba(0, 145, 44, 0.8)');
    }
    else {
        // M.toast({ html: 'Update error! Please, try again later' })
        chips('Update error! Please, try again later', 3000, 'rgba(145, 0, 0, 0.8)');
    }
}
