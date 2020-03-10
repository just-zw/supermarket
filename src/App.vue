<template>
  <div id="app">
     <router-view></router-view>
<tapbar>
 
 <tapbaritem path='/main'> </tapbaritem>
  <tapbaritem path='/my'></tapbaritem>
  <tapbaritem path='/shooping'></tapbaritem>
  <tapbaritem path='/sort'></tapbaritem>
  
</tapbar>
  </div>
</template>

<script>
import tapbar from 'components/common/tapbar';
import tapbaritem from 'components/common/tapbaritem'
export default {
  name: 'App',
  components: {
tapbar,
tapbaritem,
  }
}
</script>

<style>
@import 'assets/css/mynormal.css';
</style>
