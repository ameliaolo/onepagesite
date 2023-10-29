var img = getElementById("pac");
width = img.get(0).width,
screenWidth = $(window).width(),
duration = 3500;

function moveleft()
{
    document.getElementById("pac").animate(
        {
            "left":screenWidth
        }
    )
    /*document.getElementById('pac');
    width = img.get(0).width,
    screenWidth = $(window).width(),
    duration = 5000;

    img.css("left", -width).animate({
        "left": screenWidth
    }, ); */

}


/*const observer = new IntersectionObserver((entries) = {

    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
        
    })

});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));*/

/*
const text = document.querySelector(".different");
const strText = text.textContent;
const splitText = strText.split("");
text.textContent = "";
for(let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick()
{
    const span = text.querySelectorAll('span')[char];
    span.classList.add('fade');
    char++
    if(char === splitText.length) {
        complete();
        return;
    }
}

function complete() {
    clearInterval(timer);
    timer = null;
}
*/

/*var audio = new Audio ('./assets/powerUp.mp3');

function PlaySound() {
    onclick = document.getElementById('onepagesite/assets/powerUp.mp3').play();
}*/