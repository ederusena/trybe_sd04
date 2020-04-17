validation.init("#exercise62");

document.addEventListener('DOMContentLoaded', function() {
  let elems = document.querySelectorAll('select');
  let options = document.querySelectorAll('option');
  let instances = M.FormSelect.init(elems, options);
});

function states(){
  let estadosBr = ["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"]
  let estados = document.querySelector('#festado');
  for (let i = 0; i < estadosBr.length; i += 1){  
    let optionTag = document.createElement('option');
    let item = document.createTextNode(estadosBr[i]);
    optionTag.value = estadosBr[i];
    optionTag.appendChild(item);
    estados.appendChild(optionTag);
    //console.log('arô');
  }
}
function validaForm(){
  if (fname.value == null || fname.value == ""){
    alert('Preencha o campo Nome');
    fname.focus();
    return false;
  } 

}

function showResults(){  
  let content = document.createElement('div');
  let allInputs = document.querySelectorAll('.forjs');   

  for(let i = 0; i < allInputs.length; i += 1){
    let field = document.createElement('h6');
    let result = document.createElement('span');
    result.classList = "blue-text";

    // if(allInputs[i].checked){
    //   field.innerHTML = allInputs[i].name;
    //   result.innerHTML = allInputs[i].value;
    //   content.appendChild(field);
    //   content.appendChild(result);     
    // }else{
    //   field.innerHTML = allInputs[i].name;
    //   result.innerHTML = allInputs[i].value;
    //   content.appendChild(field);
    //   content.appendChild(result); 
    // }
      

    field.innerHTML = allInputs[i].name;
    result.innerHTML = allInputs[i].value;
    content.appendChild(field);
    content.appendChild(result);   
  }
 
  document.body.appendChild(content);
}

// validar data
let picker = new Pikaday({ field: document.getElementById('datepicker') });

states();

const btn = document.querySelector('#btn-form');
btn.addEventListener('click', function(e){
  e.preventDefault();
  //validaForm(); 
  showResults();
});