document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formMessage = document.querySelector('.form-message');

    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            form.reset();
            formMessage.textContent = 'Сообщение успешно отправлено!';
            formMessage.classList.add('success');
        } else {
            formMessage.textContent = 'Произошла ошибка. Попробуйте позже.';
             formMessage.classList.add('error');
        }
    })
     .catch(error => {
        console.error('Error:', error);
        formMessage.textContent = 'Произошла ошибка. Попробуйте позже.';
        formMessage.classList.add('error');
    });
});