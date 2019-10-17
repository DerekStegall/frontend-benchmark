const button = document.querySelector('#like-button');


button.addEventListener('click', () => {
    url = `/entries/<int:id>/like`;

    fetch(url)
        .then(response => response.json())
        .then()
})