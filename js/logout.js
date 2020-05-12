// Разлогинивание пользователя

document.querySelector('#logout').onclick = function () {
    let c = document.cookie;
    let d = new Date();
    d.setTime(d.getTime() - (10 * 60 * 1000));
    let expires = d.toUTCString();
    document.cookie = `${c}; expires=${expires}; path=/`;
    location.reload();
}