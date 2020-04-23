<template>
  <div class="detailthingwrap">
    <div class="detailthings">
      <div class="jianjie">
        <div class="start"></div>
        <div class="detailinfo">
          <span>{{desc}}</span>
        </div>
        <div class="end"></div>
      </div>
      <div class="trans">
        <span>{{shopname}}</span>
      </div>
    </div>
    <div class="detailthingshow">
      <div v-for="(val,index) in list" :key="index">
        <img :src="val" alt @load="fresh" />
      </div>
    </div>
    <div class="params">
      <div class="paramsthink">
        <table>
          <tr v-for="(val,index) in itemparams.tables" :key="index">
            <td v-for="(values,i) in val" :key="i">{{values}}</td>
          </tr>
        </table>
      </div>
      <div class="paramsspeak">
        <table>
          <tr v-for="(val,index) in itemparams.set" :key="index">
            <td>{{val.key}}</td>
            <td>{{val.value}}</td>
          </tr>
        </table>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  props: {
    detailinfo: {},
    vueref: {},
    itemparams: {}
  },
  data() {
    return {
      desc: "",
      shopname: "",
      list: []
    };
  },
  watch: {
    detailinfo(val) {
      this.desc = val.desc;
      this.shopname = val.detailImage[0].key;
      this.list = val.detailImage[0].list;
    }
  },
  methods: {
    fresh() {
      this.vueref.bscroll.refresh();
    }
  }
};
</script>

<style scoped>
.detailinfo span {
  font-size: 14px;
  color: gray;
}
.detailinfo {
  padding: 15px 0;
}
.detailthings {
  padding: 20px 15px;
}
.start {
  width: 5px;
  height: 5px;
  background: black;
  float: left;
  margin-top: -5px;
}
.start::after {
  content: "";
  display: inline-block;
  width: 90px;
  height: 1px;
  background: black;
  float: left;
  margin-top: 5px;
}
.end {
  width: 5px;
  height: 5px;
  background: black;
  float: right;
  margin-top: -5px;
}
.end::after {
  content: "";
  display: inline-block;
  width: 90px;
  height: 1px;
  background: black;
  float: right;
  margin-top: 5px;
}

.trans {
  margin: 10px 0 10px 0;
}
.detailthingshow img {
  width: 100%;
}
.params {
  border-top: 5px solid rgba(0, 0, 0, 0.1);
  border-bottom: 5px solid rgba(0, 0, 0, 0.1);
  padding: 20px 15px;
}
table {
  width: 100%;
  border-collapse: collapse;
  color: gray;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
tr {
  height: 42px;
}
td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.paramsspeak tr td:nth-child(2) {
  color: #eb4868;
}
.paramsspeak table {
  border-top: 2px solid rgba(0, 0, 0, 0.1);
}
.paramsspeak td:nth-child(1) {
  width: 95px;
}
</style>