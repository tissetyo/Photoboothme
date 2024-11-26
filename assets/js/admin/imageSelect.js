// eslint-disable-next-line no-unused-vars
function adminImageSelect(element, path) {
    const parent = element.closest('.adminImageSelection');
    const origin = element.dataset.origin;
    const src = element.src;
    const previewElement = parent.querySelector('.adminImageSelection-preview');
    const textElement = parent.querySelector('.adminImageSelection-text');
    const inputElement = parent.querySelector('input[name="' + path + '"]');

    previewElement.src = src;
    textElement.textContent = origin;
    inputElement.value = origin;

    const event = new Event('change');
    inputElement.dispatchEvent(event);
    parent.classList.remove('isOpen');
}

// eslint-disable-next-line no-unused-vars
function openAdminImageSelect(element) {
    element.closest('.adminImageSelection').classList.add('isOpen');
}

// eslint-disable-next-line no-unused-vars
function closeAdminImageSelect() {
    const selections = document.querySelectorAll('.adminImageSelection');
    selections.forEach((selection) => {
        selection.classList.remove('isOpen');
    });
}
