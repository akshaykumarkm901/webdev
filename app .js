  const max=prompt("enter the max number");
 const random= Math.floor(Math.random()*max) +1;
 let guess=prompt("guess the number");
 while(true){
  if(guess=="quite")  {
  console.log ("user quite the game");
  break;
}
  if (guess==random) {
  console.log("congrats you guess the ",random);
  break;
 }
 else if (guess < random) {
  guess=prompt("your guess small number");
 } else {
  guess=prompt("you guess the  large number");
 }
 }
