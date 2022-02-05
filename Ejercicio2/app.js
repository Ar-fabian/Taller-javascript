const d = document;
let $input = d.getElementById("input"),
    $btn = d.getElementById('btn'),
    $text = d.getElementById('text'); 

const setData = word => $text.innerHTML = word;



const getData = () =>{
    switch ($input.value) {
        case "casa": setData('home');
            break;
        case "mesa": setData('Table');
            break;
        case "perro": setData('Dog');
            break;
        case "gato": setData('Cat');
            break;
    
        default: setData('No es una palabra valida');
            break;
    }
}

$btn.addEventListener('click', ()=>{
    getData();
});