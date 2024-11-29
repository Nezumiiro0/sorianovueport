<template>
  <div class="showcase-page">
    <!-- Header -->
    <header class="header">
      <nav class="navigation">
        <!-- Update links to remove the /portfolio prefix -->
        <a href="/profile">Profile</a>
        <a href="/showcase">Showcase</a>
        <a href="/contact">Contact</a>
        <a href="/creative">Creative</a>
        <a @click="logout" href="#">Logout</a>
      </nav>
    </header>
  
    <!-- Page Title -->
    <h1 class="title">My Projects</h1>
  
    <!-- Showcase Content - Green Background 2x2 Box -->
    <div class="content-box">
      <div v-for="project in projects" :key="project.id" class="card">
        <h2 class="project-name">{{ project.name }}</h2>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      projects: [
        { 
          id: 1, 
          name: 'QR Ticketing System for PNR', 
          description: 'Our team created a ticketing system for the PNR as they have an outdated paper ticketing system. This will improve the quality of life and will have a faster transaction for the people who uses PNR.' 
        },
        { 
          id: 2, 
          name: 'Home Networking System', 
          description: 'I help other people who have trouble with their home systems. Mainly their internet connections or their network and their devices. I work from town to town and home to home to help relieve their stress with ISPs.' 
        },
        { 
          id: 3, 
          name: 'Multiple Robotics', 
          description: 'I create multiple robotics, mainly remote-controlled robots that can entertain other people, especially children. I also teach others how to create robots for their projects.' 
        },
        { 
          id: 4, 
          name: 'Micro-Bot (Unfinished)', 
          description: 'I am working on a personal project that is a micro-bot to help people who have lost things in areas that are hard to reach. It can also help with home maintenance, is user-friendly, and can be controlled via an app.' 
        },
      ],
    };
  },
  methods: {
    logout() {
      this.$router.push('/login'); // Redirect to login page
    }
  },
};
</script>

<style scoped>
/* Showcase Page Container */
.showcase-page {
  text-align: center;
  padding: 40px 20px;
  font-family: 'Arial', sans-serif;
  background-image: url('/matrix.gif'); /* Set matrix.gif as the background */
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Full height */
}

/* Header */
.header {
  background-color: yellow;
  padding: 20px;
}

.navigation {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.navigation a {
  font-size: 1.2rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  transition: transform 0.3s ease;
}

.navigation a:hover {
  transform: scale(1.1);
}

/* Page Title */
.title {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 30px;
  color: #fff;
}

/* Content Box */
.content-box {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  padding: 20px;
  background-color: green;
  margin: 30px 0;
}

/* Project Card */
.card {
  background-color: white;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

/* Project Name */
.project-name {
  font-size: 1.8rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #34495e;
}

/* Project Description */
.project-description {
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
}

/* Responsive Design */
@media (max-width: 768px) {
  .showcase-page {
    padding: 20px;
  }

  .title {
    font-size: 2rem;
  }

  .project-name {
    font-size: 1.6rem;
  }

  .project-description {
    font-size: 1rem;
  }
}
</style>
