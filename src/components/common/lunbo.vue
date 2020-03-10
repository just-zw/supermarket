<template>
  <div class="lunbo">
  <div class="box">
      <slot>

    </slot>
  </div>
  </div>
</template>

<script>
export default {
create(){

}
}
</script>

<style scoped>
.lunbo{
width: 100%
}
.box{
  width: 5000px;
}
.lunbo::after{
  content: '';
  display: block;
  clear: both;
}
</style>