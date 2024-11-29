<template>
  <div class="contact-page">
    <!-- Header Section -->
    <header class="header">
      <nav>
        <ul>
          <li><router-link to="/profile">Profile</router-link></li>
          <li><router-link to="/showcase">Showcase</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
          <li><router-link to="/creative">Creative</router-link></li>
          <li><router-link to="/login">Logout</router-link></li>
        </ul>
      </nav>
    </header>

    <!-- Contact Form Section -->
    <div class="form-container">
      <h1>Contact Me</h1>
      <form @submit.prevent="sendEmail">
        <div class="form-group">
          <label for="name">Your Name</label>
          <input type="text" id="name" v-model="form.name" required />
        </div>
        <div class="form-group">
          <label for="email">Your Email</label>
          <input type="email" id="email" v-model="form.email" required />
        </div>
        <div class="form-group">
          <label for="message">Your Message</label>
          <textarea id="message" v-model="form.message" required></textarea>
        </div>
        <button type="submit" class="submit-btn">Send Message</button>
      </form>
    </div>
  </div>
</template>

<script>
import emailjs from 'emailjs-com';

export default {
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
    };
  },
  methods: {
    sendEmail() {
      const { name, email, message } = this.form;

      // Using your public key to send the email via EmailJS
      emailjs
        .send(
          'service_8j9pggm', // Replace with your service ID
          'template_wthhops', // Replace with your template ID
          {
            name: name,
            email: email,
            message: message,
          },
          'RKjzJA-WwhIKexFIF' // This is your public key
        )
        .then(
          (response) => {
            console.log('Email sent successfully:', response);
            alert('Message sent successfully!');
            // Clear the form after sending the email
            this.form.name = '';
            this.form.email = '';
            this.form.message = '';
          },
          (error) => {
            console.log('Failed to send email:', error);
            alert('Failed to send message. Please try again.');
          }
        );
    },
  },
};
</script>

<style scoped>
/* Background - Matrix Gif from public folder */
.contact-page {
  text-align: center;
  padding: 40px 20px;
  background-image: url('/matrix.gif'); /* Direct path to the public folder */
  background-size: cover;
  background-position: center;
  color: black; /* Set all text color to black */
  min-height: 100vh;
}

/* Header Section */
.header {
  background-color: yellow;
  padding: 20px 0;
}

.header nav ul {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  margin: 0;
}

.header nav ul li {
  margin: 0 15px;
}

.header nav ul li a {
  text-decoration: none;
  color: black; /* Set link text color to black */
  font-weight: bold;
  font-size: 1.2rem;
  transition: transform 0.3s ease;
}

.header nav ul li a:hover {
  transform: scale(1.1);
}

/* Contact Form Container */
.form-container {
  background-color: rgba(255, 255, 255, 0.8); /* White with some opacity */
  padding: 30px;
  border-radius: 10px;
  max-width: 600px;
  margin: 50px auto;
}

/* Form Title */
h1 {
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: black; /* Ensure header color is black */
}

/* Form Group Styling */
.form-group {
  margin: 15px 0;
}

.form-group label {
  display: block;
  font-size: 1.2rem;
  color: black; /* Set label color to black */
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  color: black; /* Set input text color to black */
}

/* Submit Button Styling */
.submit-btn {
  background-color: #4caf50;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 25px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.submit-btn:hover {
  background-color: #45a049;
}

/* Responsive Design */
@media (max-width: 768px) {
  .form-container {
    padding: 20px;
  }

  .submit-btn {
    padding: 10px 20px;
  }
}
</style>
