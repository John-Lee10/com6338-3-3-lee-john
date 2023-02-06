var questionsArr = 
[
    {
        question:"The Year is 2023?",
        answer: true
    },    
    {
        question:"There are 50 states in the USA?",
        answer: true
    },
    { 
        question:"Earth is the 3rd closest planet to the sun?",
        answer: true
    },
    {
        question:"There are 12 months in a year?",
        answer: true
    },
    {
        question:"There are 365 days in a year?",
        answer: true
    },
    {
        question:"There are 24 hours in a day",
        answer: true
    }
]
function runQuiz (){
    var correctanswers = 0
    for (var i= 0; i <questionsArr.length; i++){
        var question = questionsArr[i].question
        var answer = confirm(question)
        if (answer) {
            correctanswers++
        }
    }
    if(correctanswers <= 6) {
        alert (Math.round(100 * correctanswers/6) + "%")
    }
}