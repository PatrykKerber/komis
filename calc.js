let result = 1;

let end =  '[V] wolt'

let r_val = 0;
let i_val = 0;
let u_val =0;
const result_box = document.querySelector('.result_box')
box = null;
let current  = null;
function reset(){
  
  r_val =0;
  i_val =0;
  u_val =0; 
}
 
reset()
console.log(r_val);
document.querySelectorAll('.calculator-type').forEach(item=>{
  item.addEventListener('click',function(e){
    if(box){
      box.classList.remove('show')
    }
    reset();
     current = e.target.dataset.target
    box = document.querySelector('#'+current)
   box.classList.add('show')
  })
})

function getValue(current){
  const i = document.querySelectorAll(`[data-type="${current}"]`)
  i.forEach(it=>{
   switch(it.dataset.v){
     case 'u':
       u_val = parseFloat(it.value);
       break;
       case 'i':
        i_val = parseFloat(it.value);
        break;
        case 'r':
          r_val = parseFloat(it.value);
          break;
   }
  })

  console.log(u_val,i_val,r_val)
}

document.querySelector('#result').addEventListener('click',function(){
    
  getValue(current)
  switch(current){
    case 'u':
      
      result = i_val*r_val;
      end = '[V] wolt';
      break;
    
    case 'r':
      result = u_val/i_val;
      end = '[Ω] om';
      break;
    
    case 'i':
      result = u_val/r_val;
      end='[A] amper';
      break;
    
  
   

  }
  console.log(result);
  result_box.innerHTML = result + end
})