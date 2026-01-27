let max = prompt("Enter the max number ");

let random = Math.floor(Math.random() * max )+ 1;

let guess = prompt("Guess the number ");

while(true) {
    if(guess == "quit"){
        console.log("User quit");
        break;
    }
    else if ( guess == random){
        console.log("you are right! congrats!! random number is ",random);
        break;
    }
    else if( guess < random){
        guess = prompt("hints: your guess are too small, please try again");
    }
    else{
        guess = prompt("hints: your guess are too larg, please try again");
    }

}