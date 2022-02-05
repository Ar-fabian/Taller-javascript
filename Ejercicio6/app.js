const $box = document.querySelectorAll('#box');
const $btn = document.getElementById('btn');


document.addEventListener('mouseover', (e)=>{
    if(e.target.id == 'box'){
        e.target.style.background = 'transparent';
    }
});

$btn.addEventListener('click', ()=>{
    $box.forEach(b =>{
        b.style.background = 'lightseagreen';
    });
});