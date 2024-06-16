document.querySelectorAll('.btn').forEach(btn => {
    btn.addEventListener('click', function() {
        this.parentNode.parentNode.style.backgroundColor = '#f0f0f0';
    });
});