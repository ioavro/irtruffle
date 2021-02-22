var bigImg = document.querySelector('.bigImg');
var imgs = document.querySelectorAll('.img');

imgs.forEach((img) => {
    img.addEventListener('click' , () => {
        showpic(img.src);
    });
});

function showpic(value) {
    bigImg.src = value;
}