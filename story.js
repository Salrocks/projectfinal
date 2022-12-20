let questions = 4;

let questionsLeft = ' [' + questions + ' questions left]';
let adjective = prompt('what is your name' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let verb = prompt(' What is your favoirte color ' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let noun = prompt('Do you think the male gaze exist?' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);

let zodiac = prompt('How would you attack/fix the problem of the male gaze? (please start with I would' + questionsLeft);
questions -= 1;
questionsLeft = ' [' + questions + ' questions left]';
console.log(questionsLeft);



alert('All done. Ready for the message?');



let sentence = "<h2>There once was a human being that wanted to change the Media industry. Their name was " + adjective;
sentence += ' and thier favorite color is  ' + verb ;
sentence += ' . However, whenever they are question about the existance of the male gaze they always say ' + noun;


sentence += ' . Their soultion on how to fix this problem is   ' + zodiac +  '.</h2>';
document.write(sentence);