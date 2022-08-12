<template>
  <div id="app">
    <bottom></bottom>
    <inter-face></inter-face>
    <!-- <div >sssssssssssssss </div> -->
  </div>
</template>

<script>
import bottom from './views/bottom.vue'
import interFace from './views/interface.vue'

export default {
  name: 'App',
  components:{
    bottom,
    interFace,
  }
  //改动2 
}
</script>

<style> 
body{ 
  /*否者body和html宽度不一致（body整体默认margin:8px,就很奇怪） */
  margin: 0px;
 }
</style>