<template>
  <div class="continer">
      <slot></slot>
  </div>
</template>

<script>

export default {

}
</script>

<style scoped>
.continer{
  position: fixed;
 bottom: 0px;
   display: flex;
  width: 100%;
  background-color: rgb(247, 242, 242);
  height: 50px;
}

</style>