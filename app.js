document.querySelector('a[href="#first"]').addEventListener('click', function (e) {
    e.preventDefault();

    const targetElement = document.getElementById('first');

    if (targetElement) {
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    }
});
