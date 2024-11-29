<template>
  <div class="creative-page">
    <!-- Header -->
    <header class="header">
      <nav class="navigation">
        <a href="/profile">Profile</a>
        <a href="/showcase">Showcase</a>
        <a href="/contact">Contact</a>
        <a href="/creative">Creative</a>
        <a @click="logout" href="#">Logout</a>
      </nav>
    </header>
  
    <!-- Page Title -->
    <h1 class="title">My Chino Collection</h1>
  
    <!-- Content Box (No Scroll) -->
    <div class="content-box">
      <div class="grid-container">
        <div class="box">
          <img src="/Chino1.jpg" alt="Chino 1" />
        </div>
        <div class="box">
          <img src="/Chino2.jpg" alt="Chino 2" />
        </div>
        <div class="box">
          <img src="/Chino3.jpg" alt="Chino 3" />
        </div>
        <div class="box">
          <img src="/Chino4.jpg" alt="Chino 4" />
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  methods: {
    logout() {
      this.$router.push('/login'); // Redirect to login page
    }
  },
};
</script>
  
<style scoped>
/* Creative Page Container */
.creative-page {
  text-align: center;
  font-family: 'Arial', sans-serif;
  background-image: url('/matrix.gif'); /* Set matrix.gif as the background */
  background-size: cover;
  background-position: center;
  min-height: 100vh; /* Full height */
  padding: 0;
  margin: 0;
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
  margin: 20px 0;
  color: #fff;
}

/* Content Box */
.content-box {
  width: 80%;
  margin: 20px auto; /* Center the content box */
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.9); /* Semi-transparent white */
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2x2 grid */
  gap: 20px;
}

.box {
  background-color: white;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.box img {
  max-width: 100%;
  height: auto;
  border-radius: 8px; /* Optional: Rounded corners for the images */
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

/* Responsive Design */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr; /* Stack in 1 column for smaller screens */
  }

  .title {
    font-size: 2rem;
  }

  .navigation a {
    font-size: 1rem;
  }

  .content-box {
    width: 90%;
    margin: 10px auto; /* Adjust the box width for smaller screens */
  }
}
</style>
