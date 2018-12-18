<template>
  <div>
    <vue-header></vue-header>
    <div id="container" class="container">
      <div class="item-menu" v-on:click="toggle(index)" v-for="(item, index) in contents" :key="item.title">
        <div class="item-menu-title"><span>></span><span>{{item.title}}</span></div>
        <div class="item-menu-content" style="display: none;">
          <div></div>
          <p>{{item.content}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'vue-accordion-menu',
  components: {
    'vue-header': Header
  },
  props: {
    contents: {
      type: Array,
      default: function () {
        return [
          {
            title: 'What is Lorem Ipsum?',
            content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry´s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
            image: ''
          },
          {
            title: 'Why do we use it?',
            content: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ´Content here, content here´, making it look like readable English.',
            image: ''
          },
          {
            title: 'Where does it come from?',
            content: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.',
            image: ''
          },
          {
            title: 'Where can I get some?',
            content: 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don´t look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn´t anything embarrassing hidden in the middle of text.',
            image: ''
          }
        ]
      }
    }
  },
  methods: {
    toggle: function (num) {
      if (this.$el.children[1].children[num].classList.contains('open')) {
        this.$el.children[1].children[num].classList.remove('open')
        this.$el.children[1].children[num].querySelectorAll('.item-menu-content')[0].style.display = 'none'
      } else {
        var prevFaqQuestion = this.$el.querySelectorAll('.open')
        if (prevFaqQuestion.length !== 0) {
          prevFaqQuestion[0].classList.remove('open')
          prevFaqQuestion[0].querySelectorAll('.item-menu-content')[0].style.display = 'none'
        }
        this.$el.children[1].children[num].classList.add('open')
        this.$el.children[1].children[num].querySelectorAll('.item-menu-content')[0].style.display = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
   @import '@/style/accordion-style.scss'
</style>
