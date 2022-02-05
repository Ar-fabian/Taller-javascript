const sizePizza = prompt('¿Que pizza desea ordenar? \n -Personal \n -Mediana \n -Familiar').toLowerCase();

const personalPizza = ()=>{
    const ingredient = prompt('¿Pollo y Champiñones, Hawaina o Carnes?').toLowerCase();
    if(ingredient =='pollo y champiñones'){
        const cheese = prompt('Por favor seleccione un numero \n 1: Con queso \n 2: Sin queso').toLowerCase();
        if(cheese == 'no'){
            alert('Su pedido es una pizza personal de pollo y champiñones');
        }else if(cheese == '1'){
            alert('Su pedido es una pizza personal de pollo y champiñones con queso');
        }else if(cheese == '2'){
            const addition = prompt('Por favor seleccione un numero \n 1: Con salsa \n 2: con borde de bocadillo').toLowerCase();
            if(addition == 'no'){
                alert('Su pedido es una pizza personal de pollo y champiñones');
            }else if(addition == '1'){
                alert('Su pedido es una pizza personal de pollo y champiñones con salsa');
            }else if(addition == '2'){
                alert('Su pedido es una pizza personal de pollo y champiñones con borde de bocadillo');
            }else{
                alert('Por favor ingrese una opcion valida');
            }
        }else{
            alert('Por favor ingrese una opcion valida');
        }
    }else if(ingredient == 'hawaina'){

    }else if(ingredient == 'carnes'){

    }else{
        alert('Por favor escoja un sabor');
    }
}
const medianPizza = ()=>{
    const ingredient = prompt('¿Mexicana o Criolla?').toLowerCase();
    if(ingredient =='mexicana'){
        
    }else if(ingredient == 'criolla'){

    }else{
        alert('Por favor escoja un sabor');
    }
}
const familyPizza = ()=>{
    const ingredient = prompt('¿Carne y Pollo o Vegetariana?').toLowerCase();
    if(ingredient =='Carne y Pollo'){
        
    }else if(ingredient == 'vegetariana'){

    }else{
        alert('Por favor escoja un sabor');
    }
}



switch (sizePizza) {
    case 'personal': personalPizza();
        
        break;
    case 'mediana': medianPizza();
        
        break;
    case 'familiar': familyPizza();
        
        break;

    default: alert('La opcion digitada no es valida, por favor selecciona el tamaño de pizza que deseas')
        break;
}