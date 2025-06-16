// Modal open/close logic
const modal = document.getElementById('requestModal');
const btn = document.querySelector('.add-request-btn');
const span = document.getElementById('closeModal');

btn.onclick = function() {
    modal.style.display = 'block';
}

span.onclick = function() {
    modal.style.display = 'none';
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}