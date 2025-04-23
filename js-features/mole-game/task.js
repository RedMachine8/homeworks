function getHole(index) {
    return document.getElementById(`hole${index}`);
}

const hitsElement = document.getElementById('dead');
const missesElement = document.getElementById('lost');
let hits = parseInt(hitsElement.textContent);
let misses = parseInt(missesElement.textContent);

for(let i = 1; i<=9; i++) {
    const hole = getHole(i);
    
    hole.onclick =  () => {
        if(hole.classList.contains('hole_has-mole')) {
            hits++;
            hitsElement.textContent = hits;
        } else {
            misses++;
            missesElement.textContent = misses;
        }

        if(hits === 10) {
            alert('Победа!');
            hits = 0;
            hitsElement.textContent = hits;
            misses = 0;
            missesElement.textContent = misses;
        }

        if(misses === 5) {
            alert('Поражение!');
            hits = 0;
            hitsElement.textContent = hits;
            misses = 0;
            missesElement.textContent = misses;
        }
    };
}