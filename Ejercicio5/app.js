const d = document;
let i=0;
const colors = ['lightblue','lightcoral','limegreen', 'lightslategrey', 'lightyellow'];
const $layout = d.getElementById('layout'); 


const newDiv = () =>{
    $div = d.createElement('div');
    $div.classList.add('box');
    $div.setAttribute('id','box');
    $div.style.backgroundColor='lightblue';
    $layout.appendChild($div);
}
const colorChange = e => {
    let currentColor = colors.findIndex(color => color ==e.target.style.backgroundColor);
    (currentColor <= 3)
       ? currentColor ++
       : currentColor=0;
    e.target.style.setProperty('background-color', colors[currentColor]);
}

d.addEventListener('click', (e)=>{
    if(e.target.id == 'btn'){ newDiv(); }
    if(e.target.id == 'box'){ colorChange(e); }
});