<template>
  <div class="login-page">
    <div class="login-container">
      <h1 class="login-header">Welcome Back!</h1>
      <p class="login-subheader">Please sign in to access your profile</p>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Username</label>
          <input
            type="text"
            v-model="username"
            id="username"
            placeholder="Enter your username"
            required
            autocomplete="off"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            v-model="password"
            id="password"
            placeholder="Enter your password"
            required
            autocomplete="off"
          />
        </div>
        <button type="submit" class="login-btn">Sign In</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
      <div class="extra-options">
        <a href="#" class="forgot-password">Forgot password?</a>
        <p class="create-account">
          Don't have an account? <a href="#" class="signup-link">Sign up</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      errorMessage: "",
    };
  },
  methods: {
    handleLogin() {
      if (this.username === "admin" && this.password === "admin") {
        // Redirect to /profile after successful login
        console.log("Login successful, redirecting to profile...");
        this.$router.push("/profile"); // Changed from /portfolio/profile to /profile
      } else {
        this.errorMessage = "Invalid username or password";
      }
    },
  },
};
</script>

<style scoped>
/* Ensure the login form is centered */
html,
body {
  height: 100%;
  font-family: 'Roboto', sans-serif;
  background: url('/matrix.gif') no-repeat center center fixed;
  background-size: cover;
  margin: 0;
}

.login-page {
  display: flex;
  justify-content: center;  /* Horizontally center the content */
  align-items: center;      /* Vertically center the content */
  height: 100vh;            /* Full viewport height */
  width: 100vw;             /* Full viewport width */
  margin: 0;
  padding: 0;
}

.login-container {
  background: rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 100%;
  max-width: 400px;         /* Limit the max-width */
  text-align: center;
}

.login-header {
  font-size: 2rem;
  font-weight: bold;
  color: #5e35b1;
  margin-bottom: 15px;
  letter-spacing: 1px;
}

.login-subheader {
  font-size: 1rem;
  color: #757575;
  margin-bottom: 30px;
}

.form-group {
  margin-bottom: 25px;
  text-align: left;
  position: relative;
}

label {
  font-size: 1rem;
  color: #333;
  margin-bottom: 8px;
  display: block;
}

input {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 15px;
  background: #f9f9f9;
  transition: border 0.3s ease, background 0.3s ease;
}

input:focus {
  outline: none;
  border-color: #5e35b1;
  background: #f3e5f5;
}

.login-btn {
  width: 100%;
  padding: 15px;
  font-size: 1.1rem;
  background: #5e35b1;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.login-btn:hover {
  background: #4527a0;
}

.error-message {
  color: #f44336;
  font-size: 0.85rem;
  margin-top: 10px;
  padding: 5px;
  border-radius: 5px;
  background-color: rgba(244, 67, 54, 0.1);
}

.extra-options {
  margin-top: 30px;
  font-size: 0.9rem;
  color: #616161;
}

.forgot-password {
  color: #5e35b1;
  text-decoration: none;
}

.forgot-password:hover {
  text-decoration: underline;
}

.create-account {
  margin-top: 15px;
}

.signup-link {
  color: #5e35b1;
  text-decoration: none;
}

.signup-link:hover {
  text-decoration: underline;
}

@media (max-width: 480px) {
  .login-container {
    padding: 25px;
  }

  .login-header {
    font-size: 1.6rem;
  }

  .login-btn {
    font-size: 1rem;
  }
}
</style>
