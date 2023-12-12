document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
        const spanElement = button.previousElementSibling;
        const inputValue = spanElement.previousElementSibling.value;
        if (spanElement) {
            spanElement.textContent = inputValue;
        }
    });
});