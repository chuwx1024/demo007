<template>
  <el-container>
    <left-siderbar></left-siderbar>
    <el-container>
      <el-header>
        <head-page></head-page>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import HeadPage from './Header'
import LeftSiderbar from './LeftSiderbar'
export default {
  name: 'Layout',
  components: {
    HeadPage,
    LeftSiderbar
  }

}
</script>

<style lang='less' scoped>
/deep/ .el-header {
  width: 100%;
  height: 40px !important;
  background: #ccc;
}

</style>
