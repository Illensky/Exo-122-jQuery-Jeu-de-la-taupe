const holes = $('.hole')
const scoreBoard = $(".score")
const moles = $('.mole')


let count = 0;
let time = 0;

function getTime() {
    let time = Math.round(Math.random() * 1000)
    if (time < 200) {
        return getTime();
    }
    return time
}


$('#startGame').click(function test () {
    scoreBoard.text(count.toString())
    timeout = setTimeout( function () {

        const randomHole = Math.trunc(Math.random() * holes.length)
        holes.eq(randomHole).addClass("up")


        holes.eq(randomHole).click(function () {
            holes.eq(randomHole).removeClass("up")
            count++
            scoreBoard.text(count.toString())
            holes.eq(randomHole).off("click")
        })

        setTimeout(() => {
            holes.eq(randomHole).removeClass("up")
            holes.eq(randomHole).off("click")
        }, getTime())

        time += 0.5

        if (time < 10) {
            test();
        }
        else {
            time = 0;
            count = 0;
        }
    }, 500)

})