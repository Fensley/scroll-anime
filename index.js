const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll" , evenfunc)

evenfunc();

function evenfunc(){
  const heightW =  window.innerHeight / 5 * 4

  boxes.forEach(box => {
    const boxtop = box.getBoundingClientRect().top;
    if (boxtop < heightW){
        box.classList.add('show')
    } else{
        box.classList.remove('show')
    }
  })
  
}