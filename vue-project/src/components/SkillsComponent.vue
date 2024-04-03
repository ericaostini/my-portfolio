<template>

   <div class="skills text-light container">
      <h1>Skills</h1>
      <p>Benvenuti nella sezione dedicata alle mie competenze in programmazione!
         Sono fiera di presentarti le abilità che ho sviluppato grazie al corso insivo della durata di sei mesi di
         Boolean.
         Da allora, ho continuato a migliorare e ad ampliare il mio bagaglio di competenze seguendo corsi online e
         rimanendo agggioranta sulle ultime tendenze e tecnologie nel mondo della programmazione.

         Scopri di più sulle mie capacità informatiche qui sotto:
      </p>
      <!-- <p>Welcome to the section dedicated to my programming skills! I'm proud to present to you the skills i have developed thanks to the intensive six months course at Boolean.
      From now, I am continuously improving and expanding my programming skills by following online courses and staying up-to-date on the latest trends and technologies in the world of programming.

      Check out more about my technical capabilities here:
      </p> -->

      <div class="text-light">
         <div class="row justify-content-between">
            <div v-for="skill in  store.skills " :key="skill.id" class="col-lg-2">
               <div class="col-lg-4" v-if='skill.front_end'>
                  <p>{{ skill.name }}</p>
                  <div class="img-container">
                     <img :src="'../../img/skills/' + skill.img" alt="img">
                  </div>
               </div>
               <div class="col-lg-6" v-if='skill.back_end'>
                  <p>{{ skill.name }}</p>
                  <div class="img-container">
                     <img :src="'../../img/skills/' + skill.img" alt="img">
                  </div>
               </div>
               <div class="col-lg-6" v-if='skill.support'>
                  <p>{{ skill.name }}</p>
                  <div class="img-container">
                     <img :src="'../../img/skills/' + skill.img" alt="img">
                  </div>
               </div>
               <div class="col-lg-6" v-if='skill.inprogress'>
                  <p>{{ skill.name }}</p>
                  <div class="img-container">
                     <img :src="'../../img/skills/' + skill.img" alt="img">
                  </div>
                  <p>In progress</p>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>

<script>
import { store } from '../data/store.js';
export default {
   name: 'SkillsComponent',
   data() {
      return {
         store
      }
   }
}
</script>

<style lang="scss" scoped>
.skills {
   height: 100vh;

   .img-container {
      width: 150px;
      height: 150px;
      background-color: white;

      img {
         width: 100%;
         height: 100%;
         object-fit: contain;
         padding: 20px;
      }
   }

}
</style>