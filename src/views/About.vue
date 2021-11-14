<template>
  <div>
    <div class="about" :class="{isRed: isRed, isYellow: isYellow}">
      <h1>This is an about page</h1>
      <el-button @click="isRed = !isRed">
        红色
      </el-button>
      <el-button @click="isYellow = !isYellow">
        黄色
      </el-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isRed: false,
      isYellow: true

    }
  },
  created () {

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang="less">
.isYellow {
  color:yellow;
}
.isRed {
  color: red;
}

</style>
