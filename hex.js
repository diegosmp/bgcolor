const colorsHex = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'
]

const btn = document.getElementById('btn')
const spanColor = document.querySelector('.colorChange')

btn.addEventListener('click', () => {
    let hast = '#'
    for(let i = 0; i < 6; i++) {
        const randomNumber = getColorsRandom()
        document.body.style.backgroundColor = hast
        spanColor.textContent = hast += colorsHex[randomNumber]
    }
})


function getColorsRandom () {
    return Math.floor(Math.random() * colorsHex.length)
  }