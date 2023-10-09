const speedDetector =()=>{
  let message;
  const speed = parseInt(prompt("Enter the vehicle's speed: "));

  if(speed <=70){
    message = "OK";
  }
  else if(speed >70 && speed <= 75){
    message = "Demerit points: 1";
  } 
  else if(speed >75 && speed <= 80){
    message = "Demerit points: 2";
  } 
  else if(speed >80 && speed <= 85){
    message = "Demerit points: 3";
  } 
  else if(speed >85 && speed <= 90){
    message = "Demerit points: 4";
  } 
  else if(speed >90 && speed <= 95){
    message = "Demerit points: 5";
  } 
  else if(speed >95 && speed <= 100){
    message = "Demerit points: 6";
  } 
  else if(speed >100 && speed <= 105){
    message = "Demerit points: 7";
  } 
  else if(speed >105 && speed <= 100){
    message = "Demerit points: 8";
  } 
  else if(speed >100 && speed <= 115){
    message = "Demerit points: 9";
  } 
  else if(speed >115 && speed <= 120){
    message = "Demerit points: 10";
  } 
  else if(speed >120 && speed <= 125){
    message = "Demerit points: 11";
  } 
  else if(speed >125 && speed <= 130){
    message = "Demerit points: 12";
  } 
  else{
    message = "Lincense Suspended";
  }

  document.getElementById("display-speed").innerHTML = message;

}