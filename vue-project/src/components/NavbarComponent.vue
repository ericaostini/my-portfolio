<template>
  <nav class="navbar navbar-expand-lg nav-bg" id='navbar-flex'>
    <div>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active-btn">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="#" on-click="FlexTop()">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Projects</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact</a>
          </li>
        </ul>
        <span class="tab-slider"></span>
      </div>
    </div>
  </nav>
</template>

<script>
export default {

  name: 'NavbarComponent',

  data() {
    return {

    }
  },

  methods: {
  }

}

</script>

<style lang="scss" scoped>
@use '../assets/style/partials/variables.scss' as *;

#navbar-flex {
  width: 100%;
  height: 100px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  background: $Luxury-goods2-3-hex;
  z-index: 10;
  position: fixed;
  top: 0;

  li {
    color: $Luxury-goods2-4-hex;
    letter-spacing: 0.3rem;
    font-size: 1rem;
    padding: 30px 70px;

    &:hover {
      a {
        color: $Luxury-goods2-3-hex;
      }

      background: $Luxury-goods2-4-hex;
      transition: all 0.5s ease;
    }


    .tab-slider {
      position: absolute;
      bottom: 0;
      width: 0;
      height: 6px;
      background: #66B1F1;
      transition: left 0.3s ease;
    }
  }

  .active-btn {
    background-color: $Luxury-goods2-4-hex;

    a {
      color: $Luxury-goods2-3-hex;
    }
  }
}
</style>
