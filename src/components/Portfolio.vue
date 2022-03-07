<template>
  <div
    class="py-4 p-st"
    :class="{
      'bg-light': !nightMode,
      'bg-dark2': nightMode,
      'text-light': nightMode,
    }"
  >
    <div class="container">
      <div
        class="text-center"
        data-aos="fade"
        data-aos-once="true"
        data-aos-duration="1000"
      >
        <span
          class="title text-center"
          :class="{ pgray: !nightMode, 'text-light': nightMode }"
          >Portfolio.</span
        >
      </div>
      <hr
        width="50%"
        :class="{ pgray: !nightMode, 'bg-secondary': nightMode }"
      />

      <vue-tabs :activeTextColor="!nightMode ? '#535A5E' : '#dfdfdf'">
        <v-tab
          v-for="(category, index_) in portfolio_categories"
          :key="index_"
          :title="category">
          <br />
          <div class="row">
            <div
              class="col-xl-4 col-bg-4 col-md-6 col-sm-12"
              v-for="(portfolio, idx) in portfolio_portfolios[index_]"
              :key="portfolio.name"
            >
              <Card
                :style="{ 'transition-delay': (idx % 3) / 4.2 + 's' }"
                :portfolio="portfolio"
                @show="showModalFn"
                data-aos="fade-up"
                :nightMode="nightMode"
                data-aos-offset="100"
                data-aos-delay="10"
                data-aos-duration="500"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="true"
              />
            </div>
          </div>
          <div class="text-center py-3" v-if="portfolio_categories_showBtns[index_] !== 'show less'">
            <button class="btn" @click.prevent="showMore(index_)">{{ portfolio_categories_showBtns[index_] }}</button>
          </div>
        </v-tab>

        <!-- <v-tab title="design">
          <div class="row">
            <div
              v-for="(design, idx) in desgin_info"
              :key="idx"
              :class="{ 'mt-4': idx === 0 ? true : true }"
              class="col-xl-6 col-bg-6 col-md-12 col-sm-12"
              style="position: relative;"
            >
              <vueper-slides
                :dragging-distance="50"
                fixed-height="300px"
                :bullets="false"
                slide-content-outside="bottom"
                style="position: aboslute"
                  @click.prevent="showDesignModalFn(design)"

              >
                <vueper-slide
                  v-for="(slide, i) in design.pictures"
                  :key="i"
                  :image="slide.img"
                />
              </vueper-slides>
              <div
                style="width: 100%; display: flex; justify-content: space-between"
                class="mt-2"
              >
                <div>
                  <div class="title2" style="font-weight: 500;">{{ design.title }}</div>
                  <span
                    class="badge mr-2 mb-2"
                    v-for="tech in design.technologies"
                    :key="tech"
                    :class="{ 'bg-dark4': nightMode }"
                    >{{ tech }}</span
                  >
                  •
                  <span class="date ml-1">{{design.date}}</span>
                </div>

                <button
                  style="height: 31px; margin-top: 5px;"
                  class="btn-sm btn btn-outline-secondary no-outline"
                  @click.prevent="showDesignModalFn(design)"
                >
                  read more
                </button>
              </div>
            </div>
          </div>
          <br />
        </v-tab> -->
      </vue-tabs>
    </div>
    <transition name="modal">
      <Modal
        :showModal="showModal"
        @close="closeModal"
        v-if="showModal"
        :portfolio="modal_info"
        :nightMode="nightMode"
      />
    </transition>
    <transition name="modal">
      <DesignModal
        :showModal="showDesignModal"
        @close="closeModal"
        v-if="showDesignModal"
        :portfolio="design_modal_info"
        :nightMode="nightMode"
      />
    </transition>
  </div>
</template>

<script>
import Card from "./helpers/Card";
import Modal from "./helpers/Modal";
import DesignModal from "./helpers/DesignModal";
// import Carousel from "./helpers/Carousel";
import info from "../../info";

import { VueTabs, VTab } from "vue-nav-tabs";
import "vue-nav-tabs/themes/vue-tabs.css";

import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";

export default {
  name: "Portfolio",
  components: {
    Card,
    Modal,
    VueTabs,
    VTab,
    VueperSlides,
    VueperSlide,
    DesignModal,
  },
  props: {
    nightMode: {
      type: Boolean,
    },
  },
  data() {
    return {
      all_info: info.portfolio,
      desgin_info: info.portfolio_design,
      portfolio_info: [],
      portfolio_categories: [],
      portfolio_categories_numbers: [],
      portfolio_categories_showers: [],
      portfolio_categories_showBtns: [],
      test: [1, 2, 3],
      all_info_porfolios: [],
      portfolio_portfolios: [],
      showModal: false,
      showDesignModal: false,
      modal_info: {},
      design_modal_info: {},
      data: [
        '<div class="example-slide">Slide 1</div>',
        '<div class="example-slide">Slide 2</div>',
        '<div class="example-slide">Slide 3</div>',
      ],
    };
  },
  created() {
    this.all_info.forEach(element => {
      if(element.category && !this.portfolio_categories.includes(element.category.trim())) {
        this.portfolio_categories.push(element.category.trim());
      }
    });

    for(let i = 0; i < this.portfolio_categories.length; i++) {
      this.portfolio_categories_numbers.push(3);
      this.portfolio_categories_showers.push(0);
      this.portfolio_categories_showBtns.push("show more");
      let element = this.all_info.filter(e => e.category.trim() === this.portfolio_categories[i]);
      this.all_info_porfolios.push(element);
      this.portfolio_portfolios[i] = [];
      for(let k = 0; k < element.length && k < this.portfolio_categories_numbers[i]; k++) {
        this.portfolio_portfolios[i].push(element[k]);
      }
    }

    

    // this.portfolio_categories_numbers.forEach(number => {
    //   for (let i = 0; i < number; i++) {
    //     this.portfolio_info.push(this.all_info[i]);
    //   }
    //   this.all_info.forEach(info => {

    //   });
    // });

    // for(let i = 0; i < portfolio_categories_numbers.length; i++) {
    //   let count = 0;
    //   for(let j = 0; j < this.all_info.length; j++) {
    //     if(this.all_info[j].category.trim() == this.portfolio_categories[i]) {
    //       this.portfolio_info.push(this.all_info[j]);
    //       count++;
    //       if(count >= 3) break;
    //     }
    //   }
    // }
  },
  // watch: {
  //   portfolio_categories_numbers: {
  //     handler(new_, old_) {
  //       // this.portfolio_info = [];
  //       let index = 0;
  //       for(let i = 0; i < old_.length; i++) {
  //         if(old_[i] != new_[i]) {index = i; break;}
  //       }
  //       this.portfolio_portfolios[index] = [];
  //       for (let i = 0; i < this.portfolio_categories_numbers[index]; i++) {
  //         this.portfolio_portfolios[index].push(this.all_info[i]);
  //       }
  //     },
  //     deep: true
  //   },
  // },
  methods: {
    next() {
      this.$refs.flickity.next();
    },

    previous() {
      this.$refs.flickity.previous();
    },
    closeModal() {
      this.showModal = false;
      this.showDesignModal = false;
      document.getElementsByTagName("body")[0].classList.remove("modal-open");
    },
    showModalFn(portfolio) {
      this.modal_info = portfolio;
      this.showModal = true;
    },
    showDesignModalFn(design_portfolio) {
      this.design_modal_info = design_portfolio;
      this.showDesignModal = true;
    },
    rerender(index) {
      this.portfolio_portfolios[index] = [];
      for (let i = 0; i < this.portfolio_categories_numbers[index]; i++) {
        this.portfolio_portfolios[index].push(this.all_info_porfolios[index][i]);
      }
      console.log(this.portfolio_portfolios[index]);
      this.$forceUpdate();
    },
    showMore(index) {
      if (this.portfolio_categories_numbers[index] != this.all_info_porfolios[index].length) {
        this.portfolio_categories_numbers[index] += 3;

        // window.scrollBy({
        //   top: document.getElementsByClassName("smcard")[0].clientHeight,
        //   behavior: "smooth",
        // });

        if (this.portfolio_categories_numbers[index] > this.all_info_porfolios[index].length)
          this.portfolio_categories_numbers[index] = this.all_info_porfolios[index].length;
      }

      if (this.portfolio_categories_numbers[index] == this.all_info_porfolios[index].length && this.portfolio_categories_showers[index] == 0) {
        this.portfolio_categories_showers[index] = 1;
        this.portfolio_categories_showBtns[index] = "show less";
      } else if (this.portfolio_categories_numbers[index] == this.all_info_porfolios[index].length && this.portfolio_categories_showers[index] == 1) {
        let elementPosition = document.getElementById("portfolio").offsetTop;
        window.scrollTo({ top: elementPosition + 5, behavior: "smooth" });
        this.portfolio_categories_showers[index] = 0;
        this.portfolio_categories_numbers[index] = 3;
        this.portfolio_categories_showBtns[index] = "show more";
      }
      this.rerender(index);
    },
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
  font-weight: 400;
}

.title3 {
  font-size: 16px;
  font-weight: 400;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.btn {
  border-color: #8585ad;
  color: #8585ad;
}

.btn:hover {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

.btn:focus {
  background-color: #8585ad;
  border-color: #8585ad;
  color: white;
}

/deep/ .vue-tabs .nav-tabs {
  border: none;
  font-size: 20px;
  font-weight: 500;
  display: flex;

  justify-content: center;
}

/deep/ .vue-tabs .tabs__link {
  color: #a0a0a0;
}

/deep/ .vue-tabs .nav-tabs > li.active > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
  padding-right: 0;
  padding-left: 0;
  margin-right: 15px;
  margin-left: 15px;
}

/deep/ .vue-tabs .nav-tabs > li > a:hover {
  background: transparent;
  color: #cbcbcb;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a {
  background: transparent;
  border: none;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li > a:after {
  content: "";
  width: 20%;
  position: absolute;
  bottom: 3px;
  border-width: 0 0 2px;
  border-style: solid;
  transition: all 0.5s;
}

/deep/ .vue-tabs .nav-tabs > li.active > a:after {
  width: 100%;
  transition: all 0.5s;
}

.design-img {
  width: 100%;
  border-radius: 15px;
  transition: all 0.5s;
}

.dimg {
  position: relative;
  border-radius: 15px;
}
.middle {
  transition: all 0.5s;
  opacity: 0;
  position: absolute;
  bottom: 0px;
  left: 70px;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
  padding: 20px;
}

.dimg:hover .design-img {
  position: relative;
  border-radius: 15px;
  opacity: 0.1;
  cursor: pointer;
}

.dimg:hover .middle {
  opacity: 1;
}

/deep/.vueperslide {
  border-radius: 10px !important;
}
/deep/.vueperslides__parallax-wrapper {
  border-radius: 10px !important;
}

.btn {
  border-color: #759CC9;
  color: #759CC9;
}

.btn:hover {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}

.btn:focus {
  background-color: #759CC9;
  border-color: #759CC9;
  color: white;
}
/deep/ .vueperslides__arrow {
  outline: none !important;
  border: none;
  color: grey;
}

.badge {
  background-color: #bbd4dd;
  transition: all 0.5s;
  font-weight: 500;
  font-size: 13px;
}

.bg-dark4 {
  background-color: #494e55 !important;
}

.date {
  font-size: 14px;
  font-weight: 400;
  opacity: 0.75
}
</style>
