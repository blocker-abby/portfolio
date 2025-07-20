document.getElementById('submit').addEventListener('click', (e) => {
    alert('Your request has been sent successfully.');
    document.getElementById('issue').value = '';
    document.getElementById('priority').value = '';
    document.getElementById('description').value = '';
})