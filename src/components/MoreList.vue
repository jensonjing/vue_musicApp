<template>
    <div>
        <wv-tabs v-model="active">
            <wv-tab class='tabs' v-for="(item,i) in datas" :key=i :title="item">
                {{item}}
            </wv-tab>
        </wv-tabs>
    </div>
</template>

<script>
export default {
    name:'morelist',
    data(){
        return{
            active:0,
            datas:['推荐','现场','翻唱','原点','听BGM','MV','舞蹈','AGG音乐','演奏','视频榜','广场']
        }
    },
    created() {
        
    },
    methods:{
        
    }
}
</script>

<style scoped>

</style>


