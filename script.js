function isTouching(a, b) {
  const aRect = a.getBoundingClientRect();
  const bRect = b.getBoundingClientRect();

  return !(
    aRect.top + aRect.height < bRect.top ||
    aRect.top > bRect.top + bRect.height ||
    aRect.left + aRect.width < bRect.left ||
    aRect.left > bRect.left + bRect.width
  );
}
let player = document.querySelector('#player')
window.addEventListener('keydown',function(evt){
  if (evt.key === 'ArrowDown') {
   moveVertical(player,50)
  } else if(evt.key==='ArrowUp'){ 
    moveVertical(player,-50)
   
  } else if(evt.key === 'ArrowRight'){
    moveHorizontal(player,50)
    player.style.transform = "scale(1,1)";

  } else if(evt.key === 'ArrowLeft'){
    moveHorizontal(player,-50)
    player.style.transform = 'scale(-1,1)'
  }
   
   
  
})
const moveVertical = (side,number)=>{
  let top = position(side.style.top);
  side.style.top = `${top + number}px`;
  
}
const moveHorizontal = (side, number) => {
  let left = position(side.style.left);
  side.style.left = `${left + number}px`;

};
const position  = (digit)=>{
  if(!digit) return 100
    return parseInt(digit.slice(0,-2))
}