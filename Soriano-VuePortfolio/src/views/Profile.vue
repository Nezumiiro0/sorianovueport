<template>
  <div class="profile-page">
    <!-- Header Section with Yellow Background -->
    <div class="header">
      <div class="tabs">
        <router-link to="/profile" class="tab">Profile</router-link>
        <router-link to="/showcase" class="tab">Showcase</router-link>
        <router-link to="/contact" class="tab">Contact</router-link>
        <router-link to="/creative" class="tab">Creative</router-link>
        <router-link to="/login" class="tab">Logout</router-link>
      </div>
    </div>

    <!-- Profile Content Section -->
    <div class="profile-header">
      <img src="/profile.jpg" alt="Profile Photo" class="profile-photo" />
      <div class="profile-text">
        <h1>Jobert Soriano</h1>
        <p class="bio">
          Good day! I am Jobert Soriano, a Computer Engineering student with a specialization in Cybersecurity. 
          I am deeply passionate about technology, gaming, photography, and much more. I spend a lot of time 
          creating projects and solutions that can help others, whether it’s through developing secure systems or 
          sharing my knowledge with others in the tech community. I believe in the power of innovation and the impact 
          technology can have on our lives. In addition to my studies, I constantly work on honing my skills to stay 
          ahead in this ever-evolving field. Let's connect and collaborate to create something meaningful!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
/* Profile Page Styling */
.profile-page {
  background: url('/matrix.gif') no-repeat center center fixed;
  background-size: cover;
  font-family: 'Poppins', sans-serif;
  padding: 40px;
}

/* Header with Yellow Background */
.header {
  background-color: yellow;
  padding: 10px 0;
}

.tabs {
  display: flex;
  justify-content: center;
  gap: 30px;
}

.tab {
  font-size: 1.1rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  padding: 10px;
  transition: background-color 0.3s, color 0.3s;
}

.tab:hover {
  background-color: #4caf50; /* Green color on hover */
  color: white;
}

/* Profile Header Section Styling */
.profile-header {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-top: 40px;
}

.profile-photo {
  width: 170px;
  height: 170px;
  border-radius: 50%;
  border: 5px solid #4caf50;
}

.profile-text {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  width: auto;
  max-width: 600px;
}

.profile-header h1 {
  color: black;
}

.bio {
  color: black;
  font-size: 1.2rem;
  margin-top: 10px;
  line-height: 1.6;
}
</style>
