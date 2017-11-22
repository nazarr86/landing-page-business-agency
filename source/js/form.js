(function() {
    var me = {};
    var form = document.querySelector('.form-container');
    var closeButton = null;

    function onClose(e) {
        e.preventDefault();

        me.close();
        closeButton.removeEventListener('click', onClose);
    }

    me.open = function () {
        form.classList.remove('is-hidden');

        closeButton = document.querySelector('.form__close-button');
        closeButton.addEventListener('click', onClose);
    };

    me.close = function () {
        form.classList.add('is-hidden');
    };
    var requiredFields = document.querySelectorAll('[data-valid="required"]');
    var emailValue = document.querySelector('[data-email]').value;
    var numberValue = document.querySelector('[data-number]').value;
    me.isValid = function () {
        if(!me.isAllCompleted(requiredFields)) {
            console.log('Заполните все необходимые поля');
            return false;
        } else if (!MYVAR.validation.isEmail(emailValue)) {
            console.log('Не верный email');
            return false;
        } else if (!MYVAR.validation.isNumber(numberValue)) {
            console.log('Неверный номер');
            return false;
        }
    };

    me.isAllCompleted = function (data) {
        var result = true;

        for (var i = 0; i < data.length; i++) {
            if (!MYVAR.validation.isNotEmpty(data[i].value)) {
                result = false;
                break;
            } else {
                return true;
            }
        }
        return result;
    };

    MYVAR.form = me;
}());