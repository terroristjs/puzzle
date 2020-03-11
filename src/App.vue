<template>
  <div>
    <d-puzzle v-bind="puzzleConfig[level]" @next="handleNext" />
  </div>
</template>
<script>
import DPuzzle from './Puzzle';

export default {
  components: {
    DPuzzle
  },
  data () {
    return {
      level:0,
      puzzleConfig:[
        { row: 3, col: 3, img: require('./assets/1.jpg') },
        { row: 4, col: 4, img: require('./assets/2.jpg') },
        { row: 5, col: 5, img: require('./assets/3.jpg') },
        { row: 6, col: 6, img: require('./assets/4.jpg') },
        { row: 8, col: 8, img: require('./assets/5.jpg') },
      ]
    }
  },
  methods: {
    handleNext () {
      if(++ this.level == this.puzzleConfig.length) {
        const answerFlag = window.confirm('已经是最后一关了，要重新开始不？');
        if(answerFlag) {
          this.level = 0;
        }
      }
    }
  }
}
</script>