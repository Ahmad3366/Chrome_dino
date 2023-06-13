const dino = document.querySelector('.dino')
const cac = document.querySelector('.cactus')
let timer = 0


window.addEventListener('keypress', () => {
    if (dino.classList != 'animate') {
        dino.classList.add('animate')
        setTimeout(() => {
            dino.classList.remove('animate')
        }, 300)
    }
})

let isDead = setInterval(() => {
    let dinoTop = parseInt(window.getComputedStyle(dino).top)
    let blockLeft = parseInt(window.getComputedStyle(cac).left)
    if (dinoTop >= 180 && blockLeft < 70 && blockLeft > 10) {
        cac.style.animation = 'none'
        alert('Game over !  your score is: ' + Math.floor(timer))
        timer = 0
        cac.style.animation = ' block 1s infinite linear'
    } else {
        timer = timer + 0.005
        document.querySelector('.score').innerHTML = Math.floor(timer)
    }
})