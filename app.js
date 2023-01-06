
  const anchor = document.getElementById('anchorImg')
  const rekt = anchor.getBoundingClientRect()
  // this is the position of the anchor relative to the viewport
  // getBoundingClientRect is used to get the position of an element relative to the viewport

  const anchorX  = rekt.left + rekt.width /2;
  const anchorY  = rekt.top + rekt.height /2;
document.addEventListener('mousemove' , (e) =>{
    console.log(e.clientX, e.clientY)

    const mouseX = e.clientX
    const mouseY  = e.clientY;

    const degAngle  = angle(anchorX, anchorY, mouseX, mouseY)
    console.log(degAngle)

    const eyes = document.querySelectorAll('.eye')
   
    eyes.forEach(eye =>{
        eye.style.transform = `rotate(${degAngle}deg)`
        
    })
  

})

function angle(anchorX, anchorY, mouseX, mouseY){
    const dy = mouseY - anchorY;
    const dx = mouseX - anchorX;
    const rad = Math.atan2(dy, dx);
    const degAngle = rad *180 /Math.PI
    return degAngle
}
eyes.addEventListener('click',(e)=>{
 
    // redirect to an external link
    window.open('https://rb.gy/enaq3a', '_blank')
})