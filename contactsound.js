document.getElementById('submitForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    var clickSound = document.getElementById('clickSound');
    if (clickSound.paused) {
        clickSound.play();
    }

    var responseMessage = document.getElementById('response-message');
    responseMessage.classList.remove('hidden');
    responseMessage.classList.add('show-message');
    submitForm();
});

function submitForm() {
    console.log('Form submitted!');
}
