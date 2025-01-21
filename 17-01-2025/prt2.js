//Quiz Practice

var quizQues = [
    {
        question : "If you have 5 apples and you buy 3 more, how many apples do you have in total?",
        options : ["7","8","9","10"],
        answer : "8",
        marks : 1,
    },
    {
        question : "A toy car costs ₹50. If you buy 4 toy cars, how much do you have to pay in total?",
        options : ["150","200","250","300"],
        answer : "200",
        marks : 2,
    },
    {
        question : "A shop sells pencils in packs of 6. If a student buys 4 packs, and then gives 5 pencils to his friend, how many pencils does he have left?",
        options : ["19","20","16","24"],
        answer : "19",
        marks : 3,
    },
    {
        question : "A water tank contains 120 liters of water. A pipe fills the tank at a rate of 15 liters per minute, while another pipe drains water at 10 liters per minute. If both pipes are open at the same time, how much water will be in the tank after 6 minutes?",
        options : ["90","30","160","150"],
        answer : "150",
        marks : 4,
    },
]

var userAnswer;
var total = 0;
var maxMarks = 0;

for(var i=0; i<quizQues.length; i++)
{
   var  userAnswer = prompt(quizQues[i].question + "\nThe Choices are : " + quizQues[i].options);
   if(userAnswer == quizQues[i].answer) {
        total += parseInt(quizQues[i].marks);
   }
   maxMarks += parseInt(quizQues[i].marks);
}

console.log("Your have Scored : "+ total + "/" + maxMarks);
alert("Your have Scored : "+ total + "/" + maxMarks);
