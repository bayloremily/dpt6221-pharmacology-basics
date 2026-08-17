const medicationData = [
  {
    id: "acetaminophen",
    title: "Acetaminophen",
    summary: "A simple pain-relief option often used when patients want symptom relief without an anti-inflammatory medicine.",
    what: "A common pain reliever and fever reducer. It is not an NSAID.",
    why: "Patients may take it for mild to moderate pain such as soreness, headache, or general discomfort.",
    relevance: "Pain may be lower during therapy, which can help movement and participation.",
    caution: "It does not reduce inflammation, and patients should avoid taking too much from combination products.",
    example: "A patient with knee soreness takes acetaminophen before outpatient exercise so moving feels more tolerable.",
    painUse: [
      "Acute mild pain: Often used when pain is present but symptoms are not severe.",
      "Mild to moderate pain: A common option for general aches, soreness, or headache."
    ]
  },
  {
    id: "nsaids",
    title: "NSAIDs",
    summary: "Often used when pain and inflammation are both part of the problem.",
    what: "Nonsteroidal anti-inflammatory drugs that help with pain and swelling.",
    why: "Patients may take them for arthritis, strains, sprains, or other musculoskeletal pain.",
    relevance: "Less pain and swelling may make exercise, gait training, and daily movement easier.",
    caution: "Watch for stomach irritation, kidney concerns, or easy bruising in some patients.",
    example: "A patient with an ankle sprain may use an NSAID to reduce soreness and swelling before rehab.",
    painUse: [
      "Acute mild pain: Common when short-term pain relief is needed early after an injury.",
      "Inflammatory pain: Often chosen when swelling and inflammation are part of the problem."
    ]
  },
  {
    id: "opioids",
    title: "Opioids",
    summary: "Used for stronger pain control, but side effects often matter a lot in rehab.",
    what: "Pain medications that act on the central nervous system.",
    why: "Patients may take them after surgery, fracture, or other more severe pain conditions.",
    relevance: "Lower pain can help activity, but drowsiness and slowed reactions can affect safe mobility.",
    caution: "Be alert for sedation, constipation, dizziness, and fall risk.",
    example: "A patient after joint replacement may have less pain for walking practice but seem sleepy during transfers.",
    painUse: [
      "Acute severe pain: May be used when pain is too strong for simpler medications alone.",
      "Severe visceral pain: Sometimes used when deep internal pain is especially intense."
    ]
  },
  {
    id: "muscle-relaxants",
    title: "Skeletal Muscle Relaxants",
    summary: "Usually short-term medicines for muscle spasm or acute muscle discomfort.",
    what: "Medications used to reduce muscle spasm or muscle-related pain.",
    why: "Patients may take them after an acute back strain or another spasm-related problem.",
    relevance: "Some patients move more comfortably, but alertness may be reduced during treatment.",
    caution: "Watch for fatigue, dizziness, and decreased attention during balance or gait work.",
    example: "A patient with acute low back spasm may report looser movement but also feel groggy in clinic.",
    painUse: [
      "Pain with muscle spasm: May help when pain is linked to tightness or spasm rather than inflammation alone."
    ]
  },
  {
    id: "statins",
    title: "Statins",
    summary: "These are common cardiovascular medications, and PTs mainly watch for unusual muscle symptoms.",
    what: "Cholesterol-lowering medications used to reduce cardiovascular risk.",
    why: "Patients may take them for high cholesterol or prevention of heart disease.",
    relevance: "Most patients exercise normally, but muscle complaints can overlap with expected soreness.",
    caution: "If weakness or muscle pain seems unusual, encourage follow-up with the medical team.",
    example: "A patient in a walking program reports leg aching that feels different from normal exercise soreness."
  },
  {
    id: "beta-blockers",
    title: "Beta Blockers",
    summary: "Important in rehab because heart rate may not reflect exercise effort in the usual way.",
    what: "Medications that slow heart rate and reduce workload on the heart.",
    why: "Patients may take them for hypertension, arrhythmias, or other heart-related conditions.",
    relevance: "PTs may rely more on symptoms and rate of perceived exertion instead of heart rate alone.",
    caution: "Watch for fatigue, dizziness, and lower exercise tolerance.",
    example: "A patient working hard on the treadmill has only a small rise in pulse because of a beta blocker."
  },
  {
    id: "ace-inhibitors",
    title: "ACE Inhibitors",
    summary: "These blood pressure medicines are common, and PTs often notice dizziness with position changes.",
    what: "Medications that relax blood vessels and lower blood pressure.",
    why: "Patients may take them for hypertension, heart failure, or kidney protection.",
    relevance: "Patients may participate well in therapy, but blood pressure changes can affect transfers and standing.",
    caution: "Watch for dizziness and ask whether a dry cough affects activity tolerance.",
    example: "A patient becomes lightheaded when standing after floor exercises and reports starting a new BP medicine."
  },
  {
    id: "anticoagulants",
    title: "Anticoagulants / Antiplatelets",
    summary: "These medicines matter in PT mostly because of bruising, bleeding risk, and fall safety.",
    what: "Medications that lower the chance of forming harmful blood clots.",
    why: "Patients may take them after clots, stroke risk, atrial fibrillation, or cardiac events.",
    relevance: "Therapy remains important, but injury prevention matters because even minor trauma can be a bigger issue.",
    caution: "Watch for unusual bruising, bleeding, or concerns after a fall or bump.",
    example: "A patient on a blood thinner reports a large bruise after lightly hitting the leg on a wheelchair footrest."
  },
  {
    id: "asthma-meds",
    title: "Asthma Medications",
    summary: "These affect breathing comfort and exercise tolerance, especially when patients use rescue inhalers.",
    what: "A group of medications that help open airways or control airway inflammation.",
    why: "Patients may take them to manage asthma symptoms and prevent breathing flare-ups.",
    relevance: "Medication timing may affect how well a patient tolerates walking, stairs, or aerobic work.",
    caution: "Watch for shortness of breath, wheezing, or shakiness after some rescue medications.",
    example: "A patient uses an inhaler before a six-minute walk test and breathes more comfortably during activity."
  },
  {
    id: "carbidopa-levodopa",
    title: "Carbidopa-Levodopa",
    summary: "Timing matters because movement quality can change depending on when the medicine was taken.",
    what: "A medication combination commonly used to help manage Parkinson disease symptoms.",
    why: "Patients may take it to improve slowness, stiffness, and movement initiation.",
    relevance: "Sessions may go better during an “on” period when movement is easier and more efficient.",
    caution: "Watch for timing-related changes, dizziness, and movement becoming harder as medication wears off.",
    example: "A patient moves much better early in the session because therapy is scheduled close to medication time."
  },
  {
    id: "bisphosphonates",
    title: "Bisphosphonates",
    summary: "These are tied more to bone health than day-to-day symptom relief.",
    what: "Medications that help slow bone breakdown.",
    why: "Patients may take them for osteoporosis or low bone density.",
    relevance: "PT often focuses on loading tolerance, balance, and fracture prevention for these patients.",
    caution: "Use general bone-health precautions and note fracture history or unexplained pain.",
    example: "A patient with osteoporosis takes a bisphosphonate while working on strength and fall prevention."
  },
  {
    id: "other-medication-approaches",
    title: "Other Medication Approaches",
    summary: "This page introduces broad terms students may hear when discussing nontraditional or combined care approaches.",
    what: "A quick reference for common terms related to complementary, alternative, and integrative approaches.",
    why: "Patients may mention these approaches when discussing symptom management, wellness, or personal health preferences.",
    relevance: "PTs should recognize the terms, listen without judgment, and encourage safe communication with the healthcare team.",
    caution: "Natural does not always mean low risk. Supplements and other products can still interact with medical care.",
    example: "A patient says they use yoga, breathing exercises, and herbal supplements along with their regular medical treatment."
  }
];

const quizQuestions = [
  {
    id: "q1",
    topic: "Opioids",
    question: "Which medication category most likely makes a PT extra careful about drowsiness and fall risk during gait training?",
    options: ["Statins", "Opioids", "Bisphosphonates", "ACE inhibitors"],
    answer: 1,
    explanation: "Opioids can reduce pain, but they can also cause sedation and slower reactions."
  },
  {
    id: "q2",
    topic: "Beta Blockers",
    question: "A patient seems to be working hard, but heart rate does not rise much during exercise. Which category best explains that pattern?",
    options: ["Acetaminophen", "Beta blockers", "Asthma medications", "NSAIDs"],
    answer: 1,
    explanation: "Beta blockers can blunt heart rate response, so PTs often rely more on symptoms and perceived exertion."
  },
  {
    id: "q3",
    topic: "Anticoagulants / Antiplatelets",
    question: "Which medication group makes bruising and bleeding after even minor trauma a bigger PT concern?",
    options: ["Skeletal muscle relaxants", "Statins", "Anticoagulants / antiplatelets", "Carbidopa-Levodopa"],
    answer: 2,
    explanation: "These medications reduce clotting, so PTs watch more closely after falls, bumps, or unexplained bruising."
  },
  {
    id: "q4",
    topic: "Carbidopa-Levodopa",
    question: "Which medication is most connected to planning therapy around times when movement is easier or harder?",
    options: ["Carbidopa-Levodopa", "Bisphosphonates", "Acetaminophen", "ACE inhibitors"],
    answer: 0,
    explanation: "Carbidopa-Levodopa is often tied to “on” and “off” periods in Parkinson disease."
  },
  {
    id: "q5",
    topic: "NSAIDs",
    question: "Which medication category is a better fit when a patient wants help with both musculoskeletal pain and inflammation?",
    options: ["Acetaminophen", "NSAIDs", "Beta blockers", "Statins"],
    answer: 1,
    explanation: "NSAIDs are commonly used when both pain and inflammation are part of the problem."
  }
];

const otherMedicationApproaches = [
  {
    term: "Complementary",
    definition: "Used together with standard medical care."
  },
  {
    term: "Alternative",
    definition: "Used in place of standard medical care."
  },
  {
    term: "Integrative Health",
    definition: "Combines conventional care with selected supportive approaches in a coordinated plan."
  },
  {
    term: "Natural Products",
    definition: "Items such as herbs, vitamins, minerals, or supplements."
  },
  {
    term: "Mind & Body Practices",
    definition: "Approaches such as meditation, yoga, breathing, or tai chi that support overall well-being."
  }
];

const topicList = document.getElementById("topic-list");
const topicTitle = document.getElementById("topic-title");
const topicSummary = document.getElementById("topic-summary");
const topicContent = document.getElementById("topic-content");
const quizForm = document.getElementById("quiz-form");
const progressDisplay = document.getElementById("progress-display");
const scoreDisplay = document.getElementById("score-display");
const summaryMessage = document.getElementById("summary-message");
const missedTopicsList = document.getElementById("missed-topics");
const retryMissedBtn = document.getElementById("retry-missed-btn");
const resetQuizBtn = document.getElementById("reset-quiz-btn");

const quizState = {
  activeQuestions: [...quizQuestions],
  currentIndex: 0,
  score: 0,
  answered: [],
  missedQuestionIds: [],
  retryMode: false,
  sessionComplete: false,
  finalizedQuestionIds: new Set()
};

function renderTopicNavigation() {
  topicList.innerHTML = medicationData
    .map((topic) => `
      <button class="topic-nav" type="button" data-topic-id="${topic.id}">
        ${topic.title}
      </button>
    `)
    .join("");

  topicList.querySelectorAll(".topic-nav").forEach((button) => {
    button.addEventListener("click", () => {
      setActiveTopic(button.dataset.topicId);
    });
  });
}

function setActiveTopic(topicId) {
  const topic = medicationData.find((item) => item.id === topicId);

  if (!topic) {
    return;
  }

  topicList.querySelectorAll(".topic-nav").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.topicId === topicId);
  });

  topicTitle.textContent = topic.title;
  topicSummary.textContent = topic.summary;
  topicContent.innerHTML = `
    <div class="topic-grid">
      <section class="detail-card">
        <h3>What it is</h3>
        <p>${topic.what}</p>
      </section>
      <section class="detail-card">
        <h3>Why patients may take it</h3>
        <p>${topic.why}</p>
      </section>
      <section class="detail-card">
        <h3>PT relevance</h3>
        <p>${topic.relevance}</p>
      </section>
      <section class="detail-card">
        <h3>Watch for / caution</h3>
        <p>${topic.caution}</p>
      </section>
    </div>
    ${topic.example ? `
      <section class="topic-example">
        <h3>Example</h3>
        <p>${topic.example}</p>
      </section>
    ` : ""}
    ${topic.painUse ? `
      <section class="topic-example">
        <h3>Pain Management Use</h3>
        <div class="mini-reference-list">
          ${topic.painUse.map((item) => `
            <div class="mini-reference-list__item">
              <p>${item}</p>
            </div>
          `).join("")}
        </div>
      </section>
    ` : ""}
    ${topic.id === "other-medication-approaches" ? `
      <section class="detail-card">
        <h3>Other Medication Approaches</h3>
        <dl class="definition-list">
          ${otherMedicationApproaches.map((item) => `
            <div class="definition-list__row">
              <dt>${item.term}</dt>
              <dd>${item.definition}</dd>
            </div>
          `).join("")}
        </dl>
      </section>
    ` : ""}
  `;
}

function renderCurrentQuestion() {
  const totalActive = quizState.activeQuestions.length;
  const currentQuestion = quizState.activeQuestions[quizState.currentIndex];

  if (!currentQuestion) {
    renderQuizSummary();
    return;
  }

  progressDisplay.textContent = `${quizState.currentIndex + 1} / ${totalActive}`;
  scoreDisplay.textContent = String(quizState.score);

  quizForm.innerHTML = `
    <article class="question-card">
      <fieldset>
        <legend>${currentQuestion.question}</legend>
        <p class="question-meta">${quizState.retryMode ? "Retry round" : "First pass"}</p>
        <div class="question-options">
          ${currentQuestion.options.map((option, index) => `
            <label class="option-label">
              <input type="radio" name="${currentQuestion.id}" value="${index}">
              <span>${option}</span>
            </label>
          `).join("")}
        </div>
        <div id="feedback" class="feedback" hidden></div>
        <div class="question-controls">
          <button id="check-answer-btn" class="button button--primary" type="button">Check Answer</button>
          <button id="next-question-btn" class="button button--ghost" type="button" hidden>Next Question</button>
        </div>
      </fieldset>
    </article>
  `;

  const checkAnswerBtn = document.getElementById("check-answer-btn");
  const nextQuestionBtn = document.getElementById("next-question-btn");

  checkAnswerBtn.addEventListener("click", submitCurrentAnswer);
  nextQuestionBtn.addEventListener("click", goToNextQuestion);

  summaryMessage.textContent = quizState.retryMode
    ? "You are retrying only the questions you missed."
    : "Answer the questions one at a time for immediate feedback.";
}

function submitCurrentAnswer() {
  const currentQuestion = quizState.activeQuestions[quizState.currentIndex];
  const selected = quizForm.querySelector(`input[name="${currentQuestion.id}"]:checked`);
  const feedback = document.getElementById("feedback");
  const checkAnswerBtn = document.getElementById("check-answer-btn");
  const nextQuestionBtn = document.getElementById("next-question-btn");

  if (!selected) {
    feedback.hidden = false;
    feedback.dataset.state = "incorrect";
    feedback.textContent = "Select an answer before checking your response.";
    return;
  }

  const selectedIndex = Number(selected.value);
  const isCorrect = selectedIndex === currentQuestion.answer;
  const wasFinalized = quizState.finalizedQuestionIds.has(currentQuestion.id);

  if (!wasFinalized) {
    quizState.finalizedQuestionIds.add(currentQuestion.id);
    quizState.answered.push({
      id: currentQuestion.id,
      topic: currentQuestion.topic,
      correct: isCorrect
    });
  } else {
    const priorAnswer = quizState.answered.find((item) => item.id === currentQuestion.id);
    if (priorAnswer) {
      priorAnswer.correct = isCorrect;
    }
  }

  if (isCorrect) {
    if (!quizState.missedQuestionIds.includes(currentQuestion.id)) {
      quizState.score += 1;
    } else {
      quizState.score += 1;
      quizState.missedQuestionIds = quizState.missedQuestionIds.filter((id) => id !== currentQuestion.id);
    }
  } else if (!quizState.missedQuestionIds.includes(currentQuestion.id)) {
    quizState.missedQuestionIds.push(currentQuestion.id);
  }

  feedback.hidden = false;
  feedback.dataset.state = isCorrect ? "correct" : "incorrect";
  feedback.textContent = isCorrect
    ? `Correct. ${currentQuestion.explanation}`
    : `Not quite. ${currentQuestion.explanation}`;

  quizForm.querySelectorAll(`input[name="${currentQuestion.id}"]`).forEach((input) => {
    input.disabled = true;
  });

  checkAnswerBtn.hidden = true;
  nextQuestionBtn.hidden = false;
  updateSummaryArea();
}

function goToNextQuestion() {
  quizState.currentIndex += 1;

  if (quizState.currentIndex >= quizState.activeQuestions.length) {
    quizState.sessionComplete = true;
    renderQuizSummary();
    return;
  }

  renderCurrentQuestion();
}

function renderQuizSummary() {
  quizForm.innerHTML = `
    <section class="completion-card">
      <p class="question-meta">${quizState.retryMode ? "Retry round complete" : "Quiz complete"}</p>
      <h3>Score: ${quizState.score} / ${quizQuestions.length}</h3>
      <p>${quizState.missedQuestionIds.length === 0
        ? "You cleared every question."
        : "Review the missed topics below, then retry only those questions if you want another pass."}</p>
    </section>
  `;

  progressDisplay.textContent = `${quizState.activeQuestions.length} / ${quizState.activeQuestions.length}`;
  scoreDisplay.textContent = String(quizState.score);
  updateSummaryArea();
  retryMissedBtn.disabled = quizState.missedQuestionIds.length === 0;

  if (window.scormHelper) {
    window.scormHelper.setLessonStatus("completed");
    window.scormHelper.setScore(quizState.score, quizQuestions.length);
    window.scormHelper.commit();
  }
}

function updateSummaryArea() {
  const missedTopics = quizQuestions
    .filter((question) => quizState.missedQuestionIds.includes(question.id))
    .map((question) => question.topic);

  missedTopicsList.innerHTML = missedTopics
    .map((topic) => `<li>${topic}</li>`)
    .join("");

  if (!quizState.sessionComplete) {
    summaryMessage.textContent = quizState.retryMode
      ? "You are retrying only the questions you missed."
      : "Immediate feedback appears after each answer.";
  } else if (missedTopics.length === 0) {
    summaryMessage.textContent = "Nice work. You finished the quiz with all questions correct.";
  } else {
    summaryMessage.textContent = `You finished with a score of ${quizState.score} out of ${quizQuestions.length}. Missed topics are listed below.`;
  }

  retryMissedBtn.disabled = missedTopics.length === 0;

  if (window.scormHelper) {
    window.scormHelper.setScore(quizState.score, quizQuestions.length);
    window.scormHelper.commit();
  }
}

function retryMissedQuestions() {
  const missedQuestions = quizQuestions.filter((question) => quizState.missedQuestionIds.includes(question.id));

  if (missedQuestions.length === 0) {
    return;
  }

  quizState.activeQuestions = missedQuestions;
  quizState.currentIndex = 0;
  quizState.retryMode = true;
  quizState.sessionComplete = false;

  renderCurrentQuestion();
}

function resetQuiz() {
  quizState.activeQuestions = [...quizQuestions];
  quizState.currentIndex = 0;
  quizState.score = 0;
  quizState.answered = [];
  quizState.missedQuestionIds = [];
  quizState.retryMode = false;
  quizState.sessionComplete = false;
  quizState.finalizedQuestionIds = new Set();

  missedTopicsList.innerHTML = "";
  renderCurrentQuestion();
  updateSummaryArea();

  if (window.scormHelper) {
    window.scormHelper.setLessonStatus("incomplete");
    window.scormHelper.setScore(0, quizQuestions.length);
    window.scormHelper.commit();
  }
}

retryMissedBtn.addEventListener("click", retryMissedQuestions);
resetQuizBtn.addEventListener("click", resetQuiz);

document.addEventListener("DOMContentLoaded", () => {
  renderTopicNavigation();
  setActiveTopic(medicationData[0].id);
  resetQuiz();

  if (window.scormHelper) {
    window.scormHelper.initialize();
    window.scormHelper.setLessonStatus("incomplete");
    window.scormHelper.setScore(0, quizQuestions.length);
    window.scormHelper.commit();
  }
});
