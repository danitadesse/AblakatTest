// Password Protection
function checkPassword() {
    const password = document.getElementById("password-input").value;
    if (password === "2128") {
        document.querySelector(".password-overlay").style.display = "none";
        document.querySelector(".countdown-page").style.display = "block";
        startCountdowns();
        createConfetti();
        initializeSlider(); // Initialize slider here
    } else {
        alert("Incorrect password. Try again!");
    }
}

// Countdown Logic
function startCountdowns() {
    const birthdayDate = new Date("2024-03-15").getTime();
    const anniversaryDate = new Date("2024-12-28").getTime();

    const birthdayButton = document.getElementById("birthday-button");
    const anniversaryButton = document.getElementById("anniversary-button");

    const interval = setInterval(() => {
        const now = new Date().getTime();

        const birthdayDistance = birthdayDate - now;
        const birthdayDays = Math.floor(birthdayDistance / (1000 * 60 * 60 * 24));
        const birthdayHours = Math.floor((birthdayDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const birthdayMinutes = Math.floor((birthdayDistance % (1000 * 60 * 60)) / (1000 * 60));
        const birthdaySeconds = Math.floor((birthdayDistance % (1000 * 60)) / 1000);

        document.getElementById("birthday-countdown").innerHTML = `
            ${birthdayDays}d ${birthdayHours}h ${birthdayMinutes}m ${birthdaySeconds}s
        `;

        if (birthdayDistance <= 0) {
            clearInterval(interval);
            document.getElementById("birthday-countdown").innerHTML = "It’s Your Birthday! 🎉";
            birthdayButton.classList.add("active");
        }

        const anniversaryDistance = anniversaryDate - now;
        const anniversaryDays = Math.floor(anniversaryDistance / (1000 * 60 * 60 * 24));
        const anniversaryHours = Math.floor((anniversaryDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const anniversaryMinutes = Math.floor((anniversaryDistance % (1000 * 60 * 60)) / (1000 * 60));
        const anniversarySeconds = Math.floor((anniversaryDistance % (1000 * 60)) / 1000);

        document.getElementById("anniversary-countdown").innerHTML = `
            ${anniversaryDays}d ${anniversaryHours}h ${anniversaryMinutes}m ${anniversarySeconds}s
        `;

        if (anniversaryDistance <= 0) {
            clearInterval(interval);
            document.getElementById("anniversary-countdown").innerHTML = "It’s Our Anniversary! 💖";
            anniversaryButton.classList.add("active");
        }
    }, 1000);
}

// Go to Next Page
function goToNextPage(type) {
    document.querySelector(".countdown-page").style.display = "none";
    if (type === "birthday") {
        document.getElementById("birthday-page").style.display = "block";
        document.querySelector("#birthday-page .buttons").classList.add("side-by-side");
    } else if (type === "anniversary") {
        document.getElementById("anniversary-page").style.display = "block";
    }
}

// Back Button
function goBack() {
    document.querySelectorAll(".next-page").forEach((page) => {
        page.style.display = "none";
    });
    document.querySelector(".countdown-page").style.display = "block";
    history.pushState(null, null, document.URL);
}

// Show Wish Message Page
function showWishMessage() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("wish-message-page").style.display = "block";
    document.getElementById("wish-text").style.display = "none";
}

// Show Our First Kiss Page
function showFirstKiss() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("first-kiss-page").style.display = "block";
}

// Show Our Favorite Songs Page
function showFavoriteSongs() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("favorite-songs-page").style.display = "block";
}

// Show Photo Gallery Page
function showPhotoGallery() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("photo-gallery-page").style.display = "block";
}

// Show Quiz Page
function showQuiz() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("quiz-page").style.display = "block";
}

// Show Date Ideas Page
function showDateIdeas() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("date-ideas-page").style.display = "block";
    filterDateIdeas('all');
}

// Show Our Story Page
function showOurStory() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("our-story-page").style.display = "block";
}

// Show Guestbook Page
function showGuestbook() {
    document.getElementById("birthday-page").style.display = "none";
    document.getElementById("guestbook-page").style.display = "block";
}

// Confetti Effect
function createConfetti() {
    const confettiContainer = document.getElementById("confetti-container");
    for (let i = 0; i < 100; i++) {
        const confetti = document.createElement("div");
        confetti.className = "confetti-piece";
        confetti.style.left = Math.random() * 100 + "vw";
        confetti.style.animationDelay = Math.random() * 2 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);
    }
}

// Envelope Animation
function openEnvelope() {
    const envelopeContainer = document.querySelector(".envelope-container");
    const letter = document.getElementById("letter-content");
    envelopeContainer.classList.toggle("open");

    if (envelopeContainer.classList.contains("open")) {
        document.getElementById("wish-text").style.display = "block";
        letter.classList.add("letter-open");
        createInnerConfetti();
    } else {
        document.getElementById("wish-text").style.display = "none";
        letter.classList.remove("letter-open");
        document.getElementById("inner-confetti-container").innerHTML = '';
    }
}

function createInnerConfetti() {
    const confettiContainer = document.getElementById("inner-confetti-container");
    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.className = "inner-confetti-piece";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.animationDelay = Math.random() * 1.5 + "s";
        confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 70%)`;
        confettiContainer.appendChild(confetti);
    }
}

// Quiz Logic
function checkAnswer(questionNumber) {
  const answer = document
    .getElementById(`answer${questionNumber}`)
    .value.toLowerCase();
  let correctAnswer = "";

  if (questionNumber === 1) {
    correctAnswer = "your answer";
  } else if (questionNumber === 2) {
    correctAnswer = "your answer";
  } else if (questionNumber === 3) {
    correctAnswer = "your answer";
  } else if (questionNumber === 4) {
    correctAnswer = "your answer";
  } else if (questionNumber === 5) {
    correctAnswer = "your answer";
  }

  if (answer === correctAnswer) {
    document.getElementById(`result${questionNumber}`).textContent =
      "Correct! 🎉";
    document.getElementById(`result${questionNumber}`).style.color = "green";
  } else {
    document.getElementById(`result${questionNumber}`).textContent =
      "Incorrect.😢";
    document.getElementById(`result${questionNumber}`).style.color = "red";
  }
}

// Slider Logic
let currentSlide = 0;
let slider;
let sliderContainer;
let dotsContainer;

function initializeSlider() {
  slider = document.querySelector("#photo-gallery-page .slider");
  sliderContainer = document.querySelector(
    "#photo-gallery-page .slider-container"
  );
  dotsContainer = document.querySelector("#photo-gallery-page .slider-dots");

  dotsContainer.innerHTML = "";

  for (let i = 0; i < slider.children.length; i++) {
    const dot = document.createElement("div");
    dot.className = "dot";
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }
  updateDots();
}

function nextSlide() {
  const maxSlide = slider.children.length - 1;
  if (currentSlide < maxSlide) {
    currentSlide++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

function goToSlide(slideIndex) {
  currentSlide = slideIndex;
  updateSlider();
}

function updateSlider() {
  const slideWidth = sliderContainer.offsetWidth;
  slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  updateDots();
}

function updateDots() {
  const dots = document.querySelectorAll("#photo-gallery-page .dot");
  dots.forEach((dot, index) => {
    if (index === currentSlide) {
      dot.classList.add("active");
    } else {
      dot.classList.remove("active");
    }
  });
}

// Message Wall Logic
function addMessage() {
  const message = document.getElementById("guestbook-message").value;
  if (message.trim() !== "") {
    const messagesDiv = document.getElementById("messages");
    const messageDiv = document.createElement("div");
    messageDiv.className = "message";
    messageDiv.textContent = message;
    messagesDiv.appendChild(messageDiv);
    document.getElementById("guestbook-message").value = "";
  }
}

// History API Handling for Mobile Back Button
window.addEventListener("popstate", function (event) {
  if (document.querySelector(".next-page[style*='display: block;']")) {
    goBack();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  history.pushState(null, null, document.URL);
});

// Load Date Ideas
function filterDateIdeas(category) {
  const dateIdeas = document.querySelectorAll("#date-ideas-list .date-idea");
  dateIdeas.forEach((idea) => {
    if (category === "all" || idea.dataset.categories.includes(category)) {
      idea.style.display = "block";
    } else {
      idea.style.display = "none";
    }
  });

  const filterButtons = document.querySelectorAll(".filter-button");
  filterButtons.forEach((button) => {
    if (button.dataset.filter === category) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}