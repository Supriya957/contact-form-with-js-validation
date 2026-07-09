# Contact Frm with JS Validation

## 📌 Project Overview

The **Professional Contact Form Validation** project is a responsive web application developed using **HTML5, CSS3, and JavaScript**. It demonstrates client-side form validation by checking user inputs before allowing form submission.

The application validates the **Name**, **Email**, and **Message** fields, displays appropriate error messages, prevents invalid form submissions, and shows a success message when all inputs are valid. This project is designed for learning JavaScript form validation and creating responsive web forms.

---

## 🎯 Objectives

* Build a responsive contact form.
* Validate user inputs using JavaScript.
* Prevent form submission when validation fails.
* Display meaningful error messages.
* Validate email addresses using Regular Expressions (Regex).
* Improve user experience with instant feedback.

---

## ✨ Features

* Responsive contact form
* Professional and modern user interface
* Name validation
* Email validation using Regex
* Message validation
* Client-side form validation
* Error messages displayed below each field
* Prevents invalid form submission
* Success popup/message after successful validation
* Character counter for the message field
* Reset functionality
* Smooth animations and hover effects
* Mobile-friendly design

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

---

## 📁 Project Structure

```text
ContactForm/
│
├── index.html
├── style.css
├── script.js
README.md
```

---

## 📋 Validation Rules

### Name

* Required
* Minimum 3 characters

### Email

* Required
* Must follow a valid email format
* Validated using Regular Expressions (Regex)

### Message

* Required
* Minimum 20 characters

---

## ▶️ How to Run the Project

1. Download or clone this repository.
2. Open the project folder in Visual Studio Code.
3. Open the `index.html` file in Google Chrome or any modern web browser.
4. Enter the required information.
5. Click the **Send Message** button to test the validation.

---

## 🧪 Test Cases

| Test Case                             | Expected Result                 |
| ------------------------------------- | ------------------------------- |
| Empty Name                            | Error message displayed         |
| Empty Email                           | Error message displayed         |
| Invalid Email Format                  | Error message displayed         |
| Empty Message                         | Error message displayed         |
| Message with fewer than 20 characters | Error message displayed         |
| Valid Name, Email and Message         | Success popup/message displayed |
| Special Characters in Message         | Accepted                        |

---

## 📚 Learning Outcomes

This project helped in understanding:

* HTML form creation
* CSS styling and responsive layouts
* JavaScript DOM manipulation
* Client-side validation
* Regular Expressions (Regex)
* Event handling
* User feedback and form validation techniques

---

## 📄 License

This project is developed for educational and learning purposes.

