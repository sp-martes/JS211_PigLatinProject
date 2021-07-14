'use strict';


const pigLatin = (word) => {
  
  let w = word.trim().toLowerCase();
  
  if ((w[w.length-1] === ".") || (w[w.length-1] === "!") ||
      (w[w.length-1] === "?")){
    w = w.slice(0,-1);
  }
    
  let vowel1 = w.match(/[aeiou]/);
   
  let i= w.indexOf(vowel1);

    if(i === 0) {
      return w += 'yay ' 
    }
    else if(i === -1){
      return w += 'ay '
    }
    else{
      return w.slice(i) + w.slice(0,i) + 'ay '
    }
}  

const pigArray = (words) => {
  let inputArray = words.split(" ");
  let sentence = "";
  for(const arrayWords of inputArray){
    sentence += pigLatin(arrayWords);
  }
  let capital = sentence[0].toUpperCase() + sentence.slice(1)
  return capital;
}

const pigGUI = () =>{
  
  let tBox = document.querySelector('#translateBox')
  let after = pigArray(tBox.value); 
 
  let p = document.createElement("p")
  let div = document.getElementById("result")
  div.appendChild(p);
  p.innerText = after;
  tBox.value = "";
}









