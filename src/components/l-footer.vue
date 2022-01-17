<template>
  <footer>
    <div>
      <ul class="nav">
        <li class="navbar__link"><router-link to="/">ACCUEIL</router-link></li>
        <li class="navbar__link"><router-link to="/biographie">BIOGRAPHIE</router-link></li>
        <li class="navbar__link"><router-link to="/filmographie">FILMOGRAPHIE</router-link></li>
        <li class="navbar__link"><router-link to="/discographie">DISCOGRAPHIE</router-link></li>
      </ul>
      <p>Projet réalisé dans le cadre d’un exercice pédagogique au département MMI Montbéliard</p>
    </div>
  </footer>
</template>
<script>

export default {
  name:'l-footer',
  data(){
    return{

    }
  },
}
</script>
<style scoped>
footer {
  background-color: black;
}

a {
  text-decoration: none;
  color: white;
  font-family: "Playfair Display";
  text-transform: uppercase;
  font-size: 30px;
}

.nav {
  display: flex;
  justify-content: space-around;
}

p {
  color: white;
  font-family: "Playfair Display";
  font-size: 25px;
  text-align: center;
}

footer {
  height: 140px;
}

ul {
  margin-top: 0;
}
</style>
