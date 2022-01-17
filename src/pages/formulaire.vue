<template>

  <div>
    <main>
      <h1>AJOUTER UN ALBUM</h1>
      <div class="modification">
        <form id="ajouter_album">
          <h2>le Titre de l'album </h2>
          <div class="nom">
            <label for="nom"></label>
            <input type="text" id="nom" name="user_name" required>
          </div>
          <div class="date">
            <h2>Date de sortie de l'album</h2>
            <label for="date"></label>
            <input type="text" id="date" name="user_firstname" required>
          </div>
          <div class="ajouter_photos">
            <h2>Couverture de l'album</h2>
            <router-link to=""><svg id="plus_ajouter" height="426.66667pt" viewBox="0 0 426.66667 426.66667" width="426.66667pt" xmlns="http://www.w3.org/2000/svg"><path d="m405.332031 192h-170.664062v-170.667969c0-11.773437-9.558594-21.332031-21.335938-21.332031-11.773437 0-21.332031 9.558594-21.332031 21.332031v170.667969h-170.667969c-11.773437 0-21.332031 9.558594-21.332031 21.332031 0 11.777344 9.558594 21.335938 21.332031 21.335938h170.667969v170.664062c0 11.777344 9.558594 21.335938 21.332031 21.335938 11.777344 0 21.335938-9.558594 21.335938-21.335938v-170.664062h170.664062c11.777344 0 21.335938-9.558594 21.335938-21.335938 0-11.773437-9.558594-21.332031-21.335938-21.332031zm0 0"/></svg><p></p></router-link>
          </div>
          <div class="ajouter">
            <button>
              Ajouter l'album
            </button>
          </div>
        </form>
      </div>

    </main>
  </div>
</template>

<script>
import LFooter from '../components/l-footer.vue'
import LHeader from '../components/l-header.vue'

export default {
  components: {
    LFooter,
    LHeader,
  },
  data() {
  },

  methods:{
  }
}
</script>

<style scoped>
main {
  background-color: black;
}

p, h1, h2, h3 {
  color: white;
  font-family: "Playfair Display";
  text-transform: uppercase;
}

h1 {
  font-size: 30px;
  text-align: center;
}

label {
  color: white;
}

.ajouter_photos svg {
  fill: #FFFFFF;
  width: 70px;
  height: 70px;
}

#ajouter_album {
  width: 80%;
  margin: 0 auto;
}

input {
  border-radius: 5px;
  border: none;
  width: 60%;
  height: 50px;
}

.ajouter button {
  border: none;
  background-color: white;
  width: 30%;
  height: 50px;
  border-radius: 5px;
  font-family: "Playfair Display";
  font-size: 30px;
  font-weight: bold;
}

form {
  padding: 50px 0;
}

h1 {
  margin-top: 0;
  padding: 35px;
}
</style>
