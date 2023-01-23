const colors = ['#f7f7f7', '#5090e5', 'gray', 
                'black', 'rgb(38, 29, 10)', 'rgb(156, 71, 222)']

const btn = document.getElementById('btn')
const color = document.querySelector('.colorChange')

function getColorRandom () {
    return Math.floor(Math.random() * colors.length)
}

btn.addEventListener('click', () => {
    const randomNumber = getColorRandom()
    
    document.body.style.backgroundColor = colors[randomNumber]
    color.textContent = colors[randomNumber]
})