<template>
  <div :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode }" class="p-st">
    <div class="container py-4">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Skills.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />
      <br />
      <div class="row">
        <div
          class="col-xl-4 col-bg-4 col-md-4 col-sm-12 text-center pb-5 px-4"
          v-for="(skill, idx) in skills"
          :key="skill.title"
          data-aos="fade-up"
          data-aos-offset="10"
          data-aos-delay="30"
          :style="{ 'transition-delay': idx / 4.2 + 's' }"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="true"
        >
          <div class="bg-div">
            <span v-if="skill.isMaterial" class="icon-container">
              <span 
                class="material-icons" 
                :class="skill.type"
              > 
                {{ skill.icon }}
              </span>
              <span class="cut-off-icon_before" :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode}">

              </span>
              <span class="cut-off-icon_after" :class="{ 'bg-white': !nightMode, 'bg-dark': nightMode}">

              </span>
            </span>
            <font-awesome-icon v-else class="font-awesome-icon" :icon="skill.icon"/>
          </div>
          <div class="title2 pt-2">{{ skill.title }}</div>
          <hr
            width="50%"
            :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
          />
          <span class="title3">{{ skill.info.join(", ") }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import info from "../../info";

export default {
  name: "Skills",
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      skills: info.skills,
    };
  },
};
</script>

<style scoped>
.title {
  font-size: 30px;
  font-weight: 500;
}
.title1 {
  font-size: 24px;
  font-weight: 400;
}

.title2 {
  font-size: 20px;
  font-weight: 500;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

/* .fa {
  color: #8585ad;
  font-size: 40px;
  transition: all 0.5s;
}

.fas {
  color: #8585ad;
  font-size: 40px;
  font-weight: bold;
  transition: all 0.5s;
} */

.font-awesome-icon, .material-icons {
  color: #8585ad;
  font-size: 40px;
  transition: all 0.5s;
}

.icon-container {
  position: relative;
}

.cut-off-icon_before, .cut-off-icon_after {
  display: none;
}

.cut-off-icon ~ .cut-off-icon_before {
  display: block;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 10px;
  left: calc(100% - 8px);
  /* background-color: red; */
  transform: rotate(-10deg);
}

.cut-off-icon ~ .cut-off-icon_after {
  display: block;
  position: absolute;
  width: 100%;
  height: 40px;
  bottom: 10px;
  right: calc(100% - 8px);
  /* background-color: red; */
  transform: rotate(10deg);
}
</style>
