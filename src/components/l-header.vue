<template>
  <div>
    <header>
      <nav class="navbar" role="navigation" :class="showNav?'show-nav':''">
        <ul class="navbar__links">
          <li class="navbar__link"><router-link to="/">ACCUEIL</router-link></li>
          <li class="navbar__link"><router-link to="/biographie">BIOGRAPHIE</router-link></li>
          <li class="navbar__link"><router-link to="/filmographie">FILMOGRAPHIE</router-link></li>
          <li class="navbar__link"><router-link to="/discographie">DISCOGRAPHIE</router-link></li>
        </ul>
        <button class="burger" @click="toggleMenu">
          <span class="bar"></span>
        </button>
      </nav>
    </header>
  </div>
</template>
<script>
export default {
  name:'l-header',
  data(){
    return {
      showNav: false,
    }
  },
  mounted(){
  },
  methods:{
    toggleMenu() {
      this.showNav = !this.showNav
    }
  },
}
</script>
<style scoped>
h3 {
  margin-top: 0;
  padding: 35px 0 0 15px;
  font-weight: 400;
}
/* Variables */

/* Reset */
* {
  box-sizing:border-box;
  outline:none;
  margin:0;
  padding:0;
}
ul {
  list-style:none;
}
/* Navbar */
.navbar {
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:10px;
  background: black;
  color: white;
}
.navbar__links {
  display:flex;
}


.navbar__link > a {
  color:white;
  text-decoration:none;
  font-family: "Playfair Display";
  font-size: 20px;
}

.navbar__link > a:hover {
  color:#FFFFFF;
  opacity: 60%;
}
.burger {
  display:none;
}

/*  Small device */
@media screen and (max-width:767.98px) {
  .csv, .csv_2 {
    color: black;
  }

  .navbar {
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:40px 10px 10px 10px;
    background: transparent;
    color: white;
  }

  .navbar__links {
    background-color: #FFFFFF;
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    transform: translateX(200vw);
    z-index: 4;
    transition: all 1.5s;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .show-nav .navbar__links {
    width:100vw;
    transform: translateX(0);
  }
  .navbar__link {
    transform: translateX(101%);
    transition: all .5s ease-in-out;
  }

  .show-nav .navbar__link  {
    transform: translateX(0);
  }
  .navbar__link > a {
    display:block;
    padding:1rem;
    font-size:35px;
    color:black;
    transition: all .4s ease-in-out;
  }

  .navbar__link > a:hover {
    padding-left:2rem;
    letter-spacing:5px;
  }

  /* Toggle menu */
  .burger {
    display:block;
    position:relative;
    padding:0;
    width:55px;
    height:30px;
    border:none;
    background:transparent;
    cursor:pointer;
    z-index: 4;
  }
  .bar {
    display:block;
    width:15px;
    height:2.5px;
    border-radius:3px;
    background:black;
    transition: all .5s ease-in-out;
  }
  .bar::before, .bar::after {
    content:"";
    width:25px;
    height:2.5px;
    position:absolute;
    left:0;
    background: black;
    border-radius:3px;
    transition: all .5s ease-in-out;
  }
  .bar::before {
    transform:translateY(-12px);
  }
  .bar::after {
    transform:translateY(12px);
  }
  .show-nav .bar {
    width:0;
    background:transparent;
  }
  .show-nav .bar::before {
    transform:rotate(45deg);
  }
  .show-nav .bar::after {
    transform:rotate(-45deg);
  }

  /* Animations */
  .show-nav .first {
    transition: all 1s ease-out;
  }
  .show-nav .second {
    transition: all 1.1s ease-out;
  }
  .show-nav .third {
    transition: all 1.2s ease-out;
  }
  .show-nav .four {
    transition: all 1.3s ease-out;
  }
  .show-nav .fifth {
    transition: all 1.4s ease-out;
  }
}

/*  Medium device*/
@media screen and (min-width:768px) {
  .navbar__link > a::after {
    display:block;
    content:"";
    width:0;
    height:1px;
    background: #ffffff;
    opacity: 60%;
    transition:width .4s;
  }
  .navbar__link:hover > a::after {
    width:100%;
  }

  .navbar__link {
    padding:0 40px;
  }

  .navbar {
    display:flex;
    align-items:center;
    justify-content:space-around;
    padding:10px;
    font-size:1.1rem;
    background: black;
    color: white;
  }

  .navbar:before {
    -webkit-backdrop-filter: blur(15px);
    backdrop-filter: blur(15px);
  }

}
</style>
