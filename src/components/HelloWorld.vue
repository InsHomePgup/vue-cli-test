<template>
  <div class="hello">
    <div @click="addOne">{{number}}</div>
  </div>
</template>

<script>
// import store from '../store';
export default {
  name: "HelloWorld",
  store,
  props: {
    msg: String,
  },
  data(){
    return {
      num:0
    }
  },
  computed:{
    number(){
      return this.num*2;
    }
  },
  mounted() {
    // console.log("hello  create");
    // console.log(store)
  },
  methods:{
    addOne(){
      this.$store.commit("increment");
      console.log(this.$store.state.count); // -> 1
      this.num++;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
