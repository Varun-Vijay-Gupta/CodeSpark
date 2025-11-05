function showAlert(message, type) {
    const alertBox = document.getElementById('alertBox');

    alertBox.textContent = message;

    // Reset class to base
    alertBox.className = 'alert-box';

    if (type === 'success') {
        alertBox.classList.add('alert-success');
    } else if (type === 'error') {
        alertBox.classList.add('alert-error');
    }

    alertBox.style.display = 'block';

    setTimeout(() => {
        alertBox.style.display = 'none';
    }, 3000);
}
