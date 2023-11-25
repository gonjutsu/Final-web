const introContainer = document.getElementById("intro-container");
const quizContainer = document.getElementById("quiz-container");

function showQuiz() {
  introContainer.style.display = "none";
  quizContainer.style.display = "block";
  displayQuestion();
}


const questions = [
    {
      question: "1. What was the capital of Kazakhstan before independence?",
      options: ["Astana", "Almaty", "Nur-Sultan", "Karaganda"],
      correctAnswer: "Almaty"
    },
    {
      question: "2. When did Kazakhstan declare independence from the Soviet Union?",
      options: ["1991", "1989", "1990", "1992"],
      correctAnswer: "1991"
    },
    {
      question: "3. Which sea is located to the west of Kazakhstan?",
      options: ["Aral Sea", "Caspian Sea", "Black Sea", "Mediterranean Sea"],
      correctAnswer: "Caspian Sea"
    },
    {
      question: "4. What is the national currency of Kazakhstan?",
      options: ["Tenge", "Ruble", "Som", "Dinar"],
      correctAnswer: "Tenge"
    },
    {
      question: "5. Which mountain range runs along the southeastern border of Kazakhstan?",
      options: ["Himalayas", "Alps", "Ural Mountains", "Tian Shan"],
      correctAnswer: "Tian Shan"
    },
    {
      question: "6. What is the largest lake in Kazakhstan?",
      options: ["Baikal", "Balkhash", "Issyk-Kul", "Zaysan"],
      correctAnswer: "Balkhash"
    },
    {
      question: "7. Which famous Silk Road city is located in present-day Kazakhstan?",
      options: ["Samarkand", "Bukhara", "Turkestan", "Khiva"],
      correctAnswer: "Turkestan"
    },
    {
      question: "8. What is the traditional nomadic dwelling used by the Kazakh people?",
      options: ["Yurt", "Igloo", "Teepee", "Hut"],
      correctAnswer: "Yurt"
    },
    {
      question: "9. Which ethnic group constitutes the majority of the population in Kazakhstan?",
      options: ["Russian", "Uzbek", "Kazakh", "Kyrgyz"],
      correctAnswer: "Kazakh"
    },
    {
      question: "10. In which year did the Kazakh Soviet Socialist Republic become a member of the United Nations?",
      options: ["1955", "1965", "1975", "1985"],
      correctAnswer: "1955"
    }
  ];

  let currentQuestion = 0;
  let userAnswers = [];

  function displayQuestion() {
    const questionContainer = document.getElementById("question-container");
    const optionsContainer = document.getElementById("options-container");
    const currentQues = questions[currentQuestion];

    questionContainer.innerHTML = `<p>${currentQues.question}</p>`;

    optionsContainer.innerHTML = currentQues.options
      .map(
        (option, index) =>
          `<label><input type="radio" name="option" value="${option}" onclick="saveAnswer(${index})">${option}</label>`
      )
      .join("");
  }

  function saveAnswer(index) {
    userAnswers[currentQuestion] = questions[currentQuestion].options[index];
    updateProgressBar();
  }

  function nextQuestion() {
    if (userAnswers.length < questions.length) {
      currentQuestion++;
      updateProgressBar();
      displayQuestion();
    } else {
      showResult();
      document.getElementById("restart-btn").style.display = "inline-block";
      document.getElementById("next-btn").style.display = "none";
    }
  }

  function showResult() {
    const resultContainer = document.getElementById("result");
    let correctCount = 0;

    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].correctAnswer) {
        correctCount++;
      }
    }

    resultContainer.innerHTML = `<p>Your Score: ${correctCount} out of ${questions.length}</p>`;
  }

  function updateProgressBar() {
    const progressBar1 = document.getElementById("progress-bar-1");
    const progressBar2 = document.getElementById("progress-bar-2");
    const progressPercentage = ((currentQuestion + 1) / questions.length) * 100;

    progressBar1.style.width = `${progressPercentage}%`;
    progressBar1.setAttribute("aria-valuenow", progressPercentage);
    progressBar2.style.width = `${progressPercentage}%`;
    progressBar2.setAttribute("aria-valuenow", progressPercentage);
  }

  function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    document.getElementById("result").innerHTML = "";
    document.getElementById("restart-btn").style.display = "none";
    document.getElementById("next-btn").style.display = "inline-block";
    updateProgressBar();
    displayQuestion();
  }

  window.onload = displayQuestion;