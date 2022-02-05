const $employee = document.getElementById('employee'),
      $salary = document.getElementById('salary');

let employee = prompt('Ingrese el nombre del empleado');
let salary = prompt('Ingrese el salario del empleado');


const setData = () =>{
    $employee.innerHTML=employee;
    $salary.innerHTML=salary;
}
(employee === null || employee == 0 || salary === null || salary == 0)
    ? alert('Por favor ingrese los datos solicitados')
    : setData();