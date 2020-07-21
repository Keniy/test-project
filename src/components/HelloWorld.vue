<template>
  <div class="hello">
    <simple-input v-model="value" style="width: 300px"/>
    <br>
    <!-- <query-drop-box v-model="value1" :data="dropBoxOpts" style="width: 300px"/> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      value: null,
      value1: null
    }
  },
    computed: {
        dropBoxOpts() {
            return {
                width: '450',
                type: 'PROJECT',
                placeholder: '请选择',
                isLoad: true,
                focusData: true,
                params: {
                }
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
