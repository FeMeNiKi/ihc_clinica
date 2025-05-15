document.getElementById('selectIdioma').addEventListener('change', function() {
    const selectedOption = this.options[this.selectedIndex];
    const imgSrc = selectedOption.getAttribute('data-img');
    document.getElementById('bandeiraIdioma').src = imgSrc;
});