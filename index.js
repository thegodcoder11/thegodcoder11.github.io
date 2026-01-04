let secret = document.getElementsByClassName("secretlink")[0];
secret.addEventListener('mouseenter', function () {
    secret.style.left = Math.random() * 85 + '%';
    secret.style.top = Math.random() * 97 + '%';
    secret.style.position = 'absolute';
});
let nanoman = document.getElementById("nanoman")
console.log(nanoman);
nanoman.addEventListener('click', function () {
    console.log('click');
    nanoman.innerHTML += '.'
    nanoman.style.backgroundColor = "#0b7777"

})

let nanomanresetbutton = document.getElementById('nanomanresetbutton')
console.log(nanomanresetbutton);
nanomanresetbutton.addEventListener('click', function () {
    console.log('click me')
    nanoman.innerHTML = 'click me'
    nanomanresetbutton.style.backgroundColor = makeRandomColor()
    nanomanresetbutton.style.color = makeRandomColor2()
})

function makeRandomColor() {

    let r = Math.floor(Math.random() * 1)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 255)
    let color = `rgb(${r}, ${g}, ${b})`
    return color

}
function makeRandomColor2() {

    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 2)
    let color = `rgb(${r}, ${g}, ${b})`
    return color

}