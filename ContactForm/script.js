
/* =========================================================
   1. SELECT DOM ELEMENTS
========================================================= */

const form = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");

const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");

const charCount = document.getElementById("charCount");


/* =========================================================
   2. EMAIL REGEX
========================================================= */

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



/* =========================================================
   3. CHARACTER COUNTER
========================================================= */

messageInput.addEventListener("input", function () {

    charCount.textContent = messageInput.value.length;

});


/* =========================================================
   4. HELPER FUNCTIONS
========================================================= */

function showError(input, errorElement, message) {

    input.classList.remove("valid");
    input.classList.add("invalid");

    errorElement.textContent = message;

}

function showSuccess(input, errorElement) {

    input.classList.remove("invalid");
    input.classList.add("valid");

    errorElement.textContent = "";

}


/* =========================================================
   5. NAME VALIDATION
========================================================= */

function validateName() {

    const value = nameInput.value.trim();

    if (value === "") {

        showError(
            nameInput,
            nameError,
            "Full name is required."
        );

        return false;

    }

    if (value.length < 3) {

        showError(
            nameInput,
            nameError,
            "Name must contain at least 3 characters."
        );

        return false;

    }

    const namePattern = /^[A-Za-z ]+$/;

    if (!namePattern.test(value)) {

        showError(
            nameInput,
            nameError,
            "Only alphabets and spaces are allowed."
        );

        return false;

    }

    showSuccess(
        nameInput,
        nameError
    );

    return true;

}


/* =========================================================
   6. EMAIL VALIDATION
========================================================= */

function validateEmail() {

    const value = emailInput.value.trim();

    if (value === "") {

        showError(
            emailInput,
            emailError,
            "Email address is required."
        );

        return false;

    }

    if (!emailPattern.test(value)) {

        showError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        return false;

    }

    showSuccess(
        emailInput,
        emailError
    );

    return true;

}



/* =========================================================
   8. MESSAGE VALIDATION
========================================================= */

function validateMessage() {

    const value = messageInput.value.trim();

    if (value === "") {

        showError(
            messageInput,
            messageError,
            "Message is required."
        );

        return false;

    }

    if (value.length < 20) {

        showError(
            messageInput,
            messageError,
            "Message must contain at least 20 characters."
        );

        return false;

    }

    showSuccess(
        messageInput,
        messageError
    );

    return true;

}


/* =========================================================
   9. LIVE VALIDATION
========================================================= */

nameInput.addEventListener(
    "input",
    validateName
);

emailInput.addEventListener(
    "input",
    validateEmail
);

messageInput.addEventListener(
    "input",
    validateMessage
);


/* =========================================================
   10. FORM SUBMISSION
========================================================= */

form.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.style.display = "none";

    const isNameValid = validateName();
    const isEmailValid = validateEmail();
    const isMessageValid = validateMessage();

    if (!isNameValid || !isEmailValid || !isMessageValid) {
        return;
    }

    successMessage.style.display = "block";

    alert("✅ Your message has been submitted successfully!");

    form.reset();

    charCount.textContent = "0";

    nameInput.classList.remove("valid", "invalid");
    emailInput.classList.remove("valid", "invalid");
    messageInput.classList.remove("valid", "invalid");

});


/* =========================================================
   11. RESET BUTTON
========================================================= */

form.addEventListener(
    "reset",
    function(){

        nameError.textContent = "";
        emailError.textContent = "";
        
        messageError.textContent = "";

        successMessage.style.display = "block";

        setTimeout(function () {

          successMessage.style.display = "none";

        }, 2000);

        charCount.textContent = "0";

        nameInput.classList.remove(
            "valid",
            "invalid"
        );

        emailInput.classList.remove(
            "valid",
            "invalid"
        );


        messageInput.classList.remove(
            "valid",
            "invalid"
        );

    }

);

