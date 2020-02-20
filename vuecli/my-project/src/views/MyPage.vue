<template>
    <div>
        <h1>我的测试界面</h1>
        <p class="active">{{str}}</p>
    </div>
</template>
<script>
export default {
    data(){
        return{
            str:"你好"
        }
    },
    methods:{

    },
}
</script>
<style scoped>
    .active{
        color: red;
    }
</style>