// Select color input
var colorPicker = document.getElementById('colorPicker');
// Select size input
var sizePicker = document.getElementById('sizePicker');
var heightField = document.getElementById('inputHeight');
var widthField = document.getElementById('inputWidth');
// When size is submitted by the user, call makeGrid()
sizePicker.addEventListener('submit', (e) =>{
    e.preventDefault();
    const inputHeight = heightField.value;
    const inputWidth = widthField.value;
    makeGrid(inputHeight,inputWidth)
})
function makeGrid(x, y) {
    // override existing grid anytime a new grid value has been inputed. 
    document.querySelectorAll('tr').forEach(element => element.remove())
    // select the table element.
const pixelCanvas = document.getElementById('pixelCanvas');

    for(let i = 1; i <= x; i++){
        let tr = document.createElement('tr');
        tr.id = 'table';
        for(let j = 1; j <= y; j++){
            let td = document.createElement('td');
            tr.appendChild(td);
        }
        pixelCanvas.appendChild(tr);
        
    }
    // Enable the adding and removing of color on each grid space.
    pixelCanvas.addEventListener('click', e =>{
        if(e.target.tagName == 'TD'){
            var tableList = event.target;
            if(tableList.style.backgroundColor){
                tableList.style.backgroundColor = '';
            }else{
                tableList.style.backgroundColor = colorPicker.value;
            }
        }
    })   
}
// Cause the h1 tag to change color every 5ms.
window.setInterval(() =>{
// select the h1 tag and assign it to a variable;
const h1 = document.querySelector('h1');
// variable declarations to produce random numbers;
const dieRoll = Math.floor(Math.random() * 100) + 1;
const dieRoll2 = Math.floor(Math.random() * 100) + 1;
const dieRoll3 = Math.floor(Math.random() * 100) + 1;
// Assign those random numbers to a rgba value and set the color property of the h1 element to those values
 h1.style.color = " rgba("+ dieRoll+","+ dieRoll2+","+ dieRoll3+")";
}, 500);