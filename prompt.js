let myQuestion = [
                {
                    question: "How many continents are there in the world?",
                    answer: 7
                },
                {
                    question: "The major raw material of pottery is?",
                    answer: "clay"
                },
                {
                    question: "How many numbers between 1 and 60 begins or ends with 5?",
                    answer: 15
                },
                {
                    question: "The currency Nigeria used before changing to Naira is?",
                    answer: "pound"
                },
                {
                    question: "which continent is the largest on earth?",
                    answer: "asia"
                },
                {
                    question: "What is the capital of Nigeria?",
                    answer: "abuja"
                },
                {
                    question: "How many weeks makes a leap year?",
                    answer: 52
                },
                {
                    question: "The longest river in Nigeria is?",
                    answer: "niger"
                },
                {
                    question: "The general lockdown due to corona virus was in which year?",
                    answer: 2020
                },
                {
                    question: "Corona virus outbreak originated from which country?",
                    answer: "china"
                },
];
let scoreDisplay = document.getElementById("result");
let score = 0;
    for (let i = 0; i < myQuestion.length; i++) {
        let quiz = prompt(myQuestion[i].question).toLowerCase();
        let  input = myQuestion[i].answer;
        if (quiz == input) {  
            score++;     
        };
        scoreDisplay.innerHTML = ` <span style= "color:red;"> You got ${score / myQuestion.length * 100}% out of 100%`;
    };
