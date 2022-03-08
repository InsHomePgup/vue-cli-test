<template>
    <div class="hello">
        <div>{{ count }}</div>
        <button @click="storeClick">click me</button>
    </div>
</template>

<script>
import { mapState } from "vuex";
export default {
    computed: {
        ...mapState({
            count: "count",
        }),
    },
    name: "HelloWorld",
    props: {
        msg: String,
    },
    mounted() {
        this.$store.commit("addObj", {
            id: "mapbox",
            list: [1, 2, 3],
        });
        // console.log("挂载的store", this.$store.state.count);
        const list = this.$store.getters.getObjById("mapbox");
        console.log("获取到的列表", list);
        // this.count = this.$store.state.count
    },
    data() {
        return {};
    },
    methods: {
        storeClick() {
            this.$store.commit("increment");
        },
    },
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
