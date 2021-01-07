 setInterval(setClock,1000)

 const minutesHand = document.getElementById("minutes-hand")
  const hoursHand = document.getElementById("hour-hand")
   const secondsHand = document.getElementById("seconds-hand")

 function setClock(){
     const currentDate = new Date();
     const secondsRatio = currentDate.getSeconds( )/ 60;
      const minutesRatio =(secondsRatio+currentDate.getMinutes()) / 60;
       const hoursRatio = (minutesRatio+currentDate.getHours()) / 12;
       setRotation(minutesHand,minutesRatio)
         setRotation(hoursHand,hoursRatio)
           setRotation(secondsHand,secondsRatio)

 }
 function setRotation(element,rotationRatio){
     element.style.setProperty("--rotation",rotationRatio*360)

 }
 setClock()

