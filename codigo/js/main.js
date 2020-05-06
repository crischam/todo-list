const icon = `X`;

// arreglo para guardar las tareas (diccionarios)
let todoItems = 
[ ];

function updateUI(){
    // obtenemos o agregamos valor a la vista (html)
  const container = document.querySelector('.list-group');

// va a limpiar el atributo de html ul
  container.innerHTML = '';

// recorremos el arreglo en busca de tareas 
  todoItems.forEach( (task, i) => {
      
    //pintamos la tarea encontrada 
    paintTask(task, i);

  })
}
function paintTask(task, i){
 const container = document.querySelector('.list-group'); // ul 
    
 // if comprimido para saber si la tarea esta checkeada
  const checked = task.isSelected ? 'checked' : '';


  container.insertAdjacentHTML (
      'beforeend',`
      <li class="list-item list-group-item ${checked}"> 
       <input type="checkbox" ${checked} onchange="changeTask(event,${i})"/>
        <span>${task.name}</span>
        <div class="left">
           <button class="btn btn-sm" onclick="deleteTask(${i})">${icon}</button>
        </div>
      </li>
   `);
}
function changeTask(event, i){
  todoItems[i].isSelected = event.target.checked; 
  updateUI();
}
function deleteTask(index){
		todoItems.splice(index, 1);
    updateUI();
}

// funcion principal 
function addTask(){

    // con esto traemos informacion de la interfaz(html)
	const input = document.querySelector('#input-task');
  if(input.value == ''){
  	return;
  }
  // diccionario donde se agrega el valor del imput y el estado del check 
  const task = {
     name : input.value,
     isSelected: false 
  };

  // le pasamos el diccionario a un objeto (lista de tareas )
  todoItems.push(task);

  // limpiamos el imput 
  input.value ='';

    //actualizamos la interfaz (es una funcion)
    updateUI();
}
