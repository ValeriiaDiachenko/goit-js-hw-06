const input = document.querySelector('#validation-input');
const inputValueLength = input.getAttribute('data-length');

input.addEventListener('blur', onInputBlur);
function onInputBlur(event) {
    const isInputValid = event.currentTarget.value.length === Number(inputValueLength);

    if (isInputValid) {
        event.currentTarget.classList.add('valid');
        event.currentTarget.classList.remove('invalid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}
