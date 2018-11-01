<template>
  <div>
    <group label-width="4.5em" label-margin-right="2em" label-align="right">
        <popup-picker
        title="地区选择"
        :data='list'
        :columns='2'
        value-text-align="right"
        v-model="check"
        show-name
        ></popup-picker>
    </group>
  </div>
</template>

<script>
import {Group,PopupPicker} from 'vux';
export default {
  name: 'HelloWorld',
  components:{
    Group,
    PopupPicker
  },
  data () {
    return {
      list:[
          {name: '中国',value: 'china',parent: 0},
          {name: '广东',value: 'china001',parent: 'china'},
          {name: '广西',value: 'china002',parent: 'china'},
          {name: '美国',value: 'USA',parent: 0},
          {name: '美国001',value: 'usa001',parent: 'USA'},
          {name: '美国002',value: 'usa002',parent: 'USA'},
      ],
      check:[]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
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
