const firstDiv = document.getElementById('firstDiv');
const secondDiv = document.getElementById('secondDiv');
const firstBtn = document.getElementById('firstBtn');
const secondBtn = document.getElementById('secondBtn');

firstBtn.addEventListener('click', () => {
    if ( firstDiv.classList.contains("square")){
        // firstDiv.classList.remove('square');
        // firstDiv.classList.add('round');
        firstDiv.classList.replace('square', 'round')
    } else if ( firstDiv.classList.contains('round')){
        // firstDiv.classList.remove('round');
        // firstDiv.classList.add('square');
        firstDiv.classList.replace('round','square')
    }
});

secondBtn.addEventListener('click', () => {
    
});