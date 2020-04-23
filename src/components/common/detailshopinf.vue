<template>
  <div class="detailshopinf">
    <div class="shopdetaillog">
      <img :src="shopdetaillog.shopLogo" alt />
      <span>{{shopdetaillog.shopname}}</span>
    </div>
    <div class="shopdetail">
      <div class="cdetail">
        <div class="cgood">
          <div>{{shopdetail.cSells|csellfilter}}</div>
          <span>总销售</span>
        </div>
        <div class="csell">
          <div>{{shopdetail.cGoods}}</div>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="score">
        <div v-for="(val,index) in shopdetail.shopscore" :key="index">
          <span>{{val.name}}</span>
          <span class="showsc" :class="{activesc:val.isBetter}">{{val.score}}</span>
          <span class="showib" :class="{activeib:val.isBetter}">{{val.isBetter|scorefilter}}</span>
        </div>
      </div>
    </div>
    <div class="enter">
      <div>立即进入</div>
    </div>
   
  </div>
</template>

<script>
export default {
  props: {
    shopdetaillog: {},
    shopdetail: {},
   
  },
  filters: {
    csellfilter(val) {
      val = parseInt(val);
      if (val > 10000) {
        val = (val / 10000).toFixed(1);
        return val + "万";
      } else {
        return val;
      }
    },
    scorefilter(val) {
      if (val) {
        return "高";
      } else {
        return "低";
      }
    }
  }
};
</script>

<style scoped>
.detailshopinf {
  padding: 25px 8px;
  border-bottom: 3px solid rgba(221, 218, 218, 0.3);
}
.shopdetaillog {
  color: gray;
}
.shopdetaillog img {
  width: 45px;
  height: 45px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
}
.shopdetaillog span {
  vertical-align: 16px;
  padding-left: 15px;
}
.cdetail {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.cdetail span {
  font-size: 10px;
}
.cdetail div div {
  color: 18px;
  margin-bottom: 10px;
}
.shopdetail {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}
.score div {
  padding: 5px 0;
  margin: 0 30px;
  display: flex;
  justify-content: space-between;
}
.score div span {
}
.score {
  flex: 1;
  font-size: 13px;
  color: gray;
}
.activeib {
  background: red !important;
  color: white;
}
.showib {
  background: green;
  color: white;
}
.activesc {
  color: red !important;
}
.showsc {
  color: green;
}
.enter{
  margin-top: 15px;
}
.enter div {
  width: 150px;
  height: 30px;
  border-radius: 10px;
  font-size: 14px;
  background-color: #f2f5f8;
  margin: 0 auto;
  line-height: 30px;
  text-align: center;
}

</style>