let colorArray = []
const mode = document.getElementById("theme")
let seed = document.getElementById("col").value
let colorValue = seed.replace("#", "");
let colorPicker = document.getElementById("col");

colorPicker.addEventListener("input", function(){
    colorValue = document.getElementById("col").value.replace("#", "");
})

document.getElementById("btn-gen").addEventListener("click", function(e){
    
    e.preventDefault()

fetch(`https://www.thecolorapi.com/scheme?hex=${colorValue}&mode=${mode.value}&count=5`)
    .then(res => res.json())
    .then(data => {
        console.log(data)
        console.log(data.colors[1].hex.value)
        // loop's not workin'
        for(let i=0; i > 5; i++){ 
            colorArray.push(data.colors[i].hex.value)
        }
        document.getElementById("red").style.backgroundColor = data.colors[0].hex.value
        document.getElementById("black").style.backgroundColor = data.colors[1].hex.value
        document.getElementById("beige").style.backgroundColor = data.colors[2].hex.value
        document.getElementById("green").style.backgroundColor = data.colors[3].hex.value
        document.getElementById("purple").style.backgroundColor = data.colors[4].hex.value

        document.getElementById("val-red").textContent = data.colors[0].hex.value
        document.getElementById("val-black").textContent = data.colors[1].hex.value
        document.getElementById("val-beige").textContent = data.colors[2].hex.value
        document.getElementById("val-green").textContent = data.colors[3].hex.value
        document.getElementById("val-purple").textContent = data.colors[4].hex.value

        console.log(colorArray);
    })

})


let copyTextareaBtn = document.querySelector('.js-textareacopybtn');

copyTextareaBtn.addEventListener('click', function(event) {
  let copyTextarea = document.querySelector('.js-copytextarea');
  copyTextarea.focus();
  copyTextarea.select();

  try {
    let successful = document.execCommand('copy');
    let msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
});