document.addEventListener('DOMContentLoaded', function() {
    const toggleSwitch = document.getElementById('dark-mode');
    const body = document.body;

    toggleSwitch.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
   });
});

