function makeMarquee() {

    const title = 'FIFTY Music Festival — November 10–12, Desert Valley'

    const marqueeText = new Array(50).fill(title).join(' ––– ')

    const marquee = document.querySelector('.marquee span')
    marquee.innerHTML = marqueeText
}

makeMarquee()

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

const circles = document.querySelectorAll('.circle')


circles.forEach(function (circle, index) {

    circle.animate([{
            transform: 'scale(1)'
        },
        {
            transform: 'scale(1.1)'
        },
        {
            transform: 'scale(1)'
        }
    ], {
        delay: 300 * index,
        duration: 3000,
        iterations: Infinity
    });
})

const squiggles = document.querySelectorAll('.squiggle')


squiggles.forEach(function (squiggle, index) {

    const randomNumber = random(0, 45)

    squiggle.animate([{
            transform: 'rotate(0deg)'
        },
        {
            transform: `rotate(${randomNumber}deg)`
        },
        {
            transform: 'rotate(0deg)'
        }
    ], {
        delay: 300 * index,
        duration: 5000,
        iterations: Infinity
    });
})


// 1. This works fine
inView('.section')
    .on('enter', section => {
        section.classList.add('in-viewport')
    })
    .on('exit', section => {
        section.classList.remove('in-viewport')
    });

inView.treshold(0.2)


const sections = document.querySelectorAll('.section')

// 2. But this console log only shows up if I cancel out the above function
console.log(sections)

sections.forEach((section, index) => {

    const artists = section.querySelectorAll('.line-up li')
    const shapes = section.querySelectorAll('.shape')

    artists.forEach((artist, index) => {
        const delay = index * 100
        artist.style.transitionDelay = delay + 'ms'
    })

})