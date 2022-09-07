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
    let top = position(player.style.top);
    player.style.top = `${top + 50}px`;
  } else if(evt.key==='ArrowUp'){ 
    let top = position(player.style.top);
    player.style.top = `${top -50}px`;
  }
   
   
  
})
const moveVertical = (side,number)=>{
  
}
const moveHorizontal = (side, number) => {

};
const position  = (digit)=>{
  if(!digit) return 100
    return parseInt(digit.slice(0,-2))
}