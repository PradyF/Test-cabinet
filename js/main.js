document.addEventListener('DOMContentLoaded', function () {
    let elems = document.querySelectorAll('.datepicker');
    let instances = M.Datepicker.init(elems, {
        "format": "yyyy-mm-dd"
    });
});

document.querySelectorAll('.modal-show').forEach(function (element) {
    element.onclick = showModal;
});

document.querySelectorAll('.modal-project-close').forEach(function (element) {
    // Закрываем окно на кнопку закрыть
    element.onclick = closeModal;
});

document.querySelectorAll('.modal-wrap').forEach(function (element) {
    // Закрываем окно на клике в области
    element.onclick = closeModal;
});

function showModal() {
    let modalId = this.dataset.modal; //Обращаемся к связанным по айди элементам
    document.querySelector(modalId).classList.remove('hide');

    document.onkeydown = function (event) {
        // Закрываем окно на кнопку ескейп
        if (event.keyCode == 27) {
            closeModal();
        }
    }
}

function closeModal() {
    document.querySelectorAll('.modal-wrap').forEach(function (element) {
        element.classList.add('hide');
    });
    document.onkeydown = null; // Отключаем событие, когда окно закрыто
    clearAll();
}

document.querySelector('#log-in .modal-project').onclick = function (event) {
    event.stopPropagation(); // Запрет закрытия при клике по серой области
}

document.querySelector('#sign-up .modal-project').onclick = function (event) {
    event.stopPropagation(); // Запрет закрытия при клике по серой области
}

document.querySelector('.read-rules').onclick = function () {
    document.querySelector('.form-slider').style.marginLeft = '-345px';
}

document.querySelectorAll('.read-rules-back').forEach(function (element) {
    element.onclick = () => {
        document.querySelector('.form-slider').style.marginLeft = '0px';
    };
});

document.querySelector('#agree-rules').onchange = function () {
    if (this.checked) {
        document.querySelector('#signup-submit').classList.remove('disabled');
    }
    else {
        document.querySelector('#signup-submit').classList.add('disabled');
    }
}

function clearAll() {
    if (document.querySelector('#agree-rules').checked == true) {
        document.querySelector('#agree-rules').checked = false;
        document.querySelector('#signup-submit').classList.add('disabled');
    }
    document.querySelectorAll('form').forEach((element) => {
        element.reset();
    });
    M.updateTextFields();
    document.querySelector('.form-slider').style.marginLeft = '0px';
}
