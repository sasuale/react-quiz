const data = [
  {
    question:
      "Em que área o react se destaca?",
    answers: ["Backend", "Frontend", "Fullstack", "Nenhuma Alternativa"],
    correct: "Frontend",
    questionId: "099099"
  },
  {
    question:
      '­React é um(a) ...',
    answers: ["Framework", "Biblioteca", "Linguagem", "Componente"],
    correct: "Biblioteca",
    questionId: "183452"
  },
  {
    question:
      "Qual a maneira correta de escrever um useEffect?",
    answers: ["const useEffect = function(){},[]", "useEffect(funcion() {})", "useEffect(() => {}, [])"],
    correct: "useEffect(() => {}, [])",
    questionId: "267908"
  },
  {
    question: "O que não existe em React?",
    answers: [
      "State",
      "Function",
      "Ball",
      "Props"
    ],
    correct: "Ball",
    questionId: "333247"
  },
  {
    question: "Que empresa não usa React?",
    answers: ["Flipboard", "Soundcloud", "Malanta", "Google"],
    correct: "Google",
    questionId: "496293"
  },
  {
    question:
      "Um dos pré-requisitos para aprender React é ...",
    answers: [
      "ter conhecimento básico de Python",
      "ter conhecimento básico de JavaScript",
      "ser bastante inteligente",
      "estudar ciência da computação"
    ],
    correct: "ter conhecimento básico de JavaScript",
    questionId: "588909"
  },
  {
    question:
      'Em React podemos encontrar ...',
    answers: ["Props", "State", "Components", "Todas Alternativas"],
    correct: "Todas Alternativas",
    questionId: "648452"
  }
];

export default (n = 5) =>
  Promise.resolve(data.sort(() => 0.5 - Math.random()).slice(0, n));
