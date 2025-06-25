let correct = false;
while(correct == false){
let answer = prompt("enter a guess");
let answer_hash = md5(answer);
if(answer_hash == '49f68a5c8493ec2c0bf489821c21fc3b'){
    console.log("you got it!");
    correct = true;
}
else{
    console.log("answer_hash");
}
}