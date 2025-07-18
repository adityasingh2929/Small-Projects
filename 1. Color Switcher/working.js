const btns = document.querySelectorAll('.button');
const body = document.querySelector('body');
const font = document.querySelector('#text-main');


//  JS FOR BUTTONS:
btns.forEach( (btn) => {
    btn.addEventListener('click', (e) => {
        if(e.target.id == "grey"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "black"){
            body.style.backgroundColor = e.target.id;
        }
        if(e.target.id == "white"){
            body.style.backgroundColor = e.target.id;
        }
    })
})


// Input for the fonts:
document.getElementById("fg_submit").addEventListener('click',(e) => {
    const fg_colors = document.getElementById("font_changer").value;
    font.style.color = fg_colors;
});

// Input for the Bg color:
document.getElementById('bg_submit').addEventListener('click',(e) => {
    const bg_colors = document.getElementById("background_changer").value;
    body.style.backgroundColor = bg_colors;
});