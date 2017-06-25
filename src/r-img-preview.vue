<template>
  <div id="r-img-preview">
    <img v-for="(img, index) in imgs" :src="img" :key="index" alt="" @click="bigImg">
    <transition name="fade">
      <div v-if="show" class="shade" @click="smallImg">
        <mt-swipe :auto="0" class="img-container">
          <mt-swipe-item class="123" v-for="(img, index) in imgs" :key="index">
            <img :src="img" :key="index" alt="">
          </mt-swipe-item>
        </mt-swipe>
      </div>
    </transition>
  </div>
</template>

<script>
  import { Swipe, SwipeItem } from 'mint-ui'
  export default {
    data () {
      return {
        show : false
      }
    },
    props: ["imgs"],
    components: {
    },
    methods: {
      bigImg () {
        this.show = true
      },
      smallImg () {
        this.show = false
      },
      computeWidth () {
        let n = this.imgs.length;
        return 'width: '+(n * 100) + "%;";
      }
    },
    components: {
      'mt-swipe': Swipe,
      'mt-swipe-item' : SwipeItem
    }
  }
</script>

<style scoped>
@import '../static/css/style.css';
</style>
