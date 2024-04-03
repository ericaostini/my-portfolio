<template>
   <NavbarComponent />
   <div class="intro text-light">
      <div class="intro-container">
         <div class="img-container">
            <img src="../../img/profile.png" alt="Erica-Ostini-image">
         </div>
         <h1>Hello I'm Erica Ostini</h1>
         <h3>I'm a 'front-end developer'</h3>
         <p>I'm passionate about creating beautiful and functional websites. I'm also a fan of coding
            and design.</p>
         <div>
            <a href="https://www.linkedin.com/in/erica-ostini-65a8a31a6/" target="_blank"><button>Get in touch <i
                     class="fa-brands fa-linkedin-in"></i></button></a>
            <a href="../../public/img/Erica Ostini curriculum.png"
               download="Erica Ostini curriculum.png"><button>Download
                  CV <i class="fa-solid fa-download"></i></button></a>
            <a href="https://github.com/ericaostini" target="_blank"><button>View Portfolio <i
                     class="fa-brands fa-square-github"></i></button></a>
         </div>
      </div>
   </div>
   <SkillsComponent />
</template>

<script>
import NavbarComponent from '../components/NavbarComponent.vue';
import SkillsComponent from '../components/SkillsComponent.vue';
export default {
   name: 'Homepage',
   components: {
      NavbarComponent,
      SkillsComponent
   }

}
</script>

<style lang="scss" scoped>
.intro {
   height: 100vh;

   .intro-container {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
   }
}
</style>