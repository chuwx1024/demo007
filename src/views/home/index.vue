<template>
  <div class="home-page">
    <el-form :model="ruleForm" ref="ruleForm" label-width="100px" :rules="rules">
      <el-row>
        <el-col :span="12">
          <el-form-item label="活动名称" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活动区域" prop="region">
            <el-input v-model="ruleForm.region"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="活动区域" prop="region">
            <el-select v-model="ruleForm.region" placeholder="请选择活动区域">
              <el-option label="区域一" value="shanghai"></el-option>
              <el-option label="区域二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="活动时间" required>
            <el-col :span="11">
              <el-date-picker
                v-model="ruleForm.data1"
                type="daterange"
                :editable="true"
                :clearable="true"
                :unlink-panels="false"
                format="yyyy-MM-dd"
                popper-class="挑选日期"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期">
              </el-date-picker>
            </el-col>
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item label="即时配送" prop="delivery">
        <el-switch v-model="ruleForm.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质" prop="type">
        <el-checkbox-group v-model="ruleForm.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源" prop="resource">
        <el-radio-group v-model="ruleForm.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式" prop="desc">
        <el-input type="textarea" v-model="ruleForm.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'formPage',
  data: function () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '输入活动明长城', trigger: 'blur' },
          { min: 3, max: 6, message: '3----6之间', trigger: 'blur' }
        ],
        region: [
          { required: true, message: '选择活动区域', trigger: 'blur' }
        ],
        data1: [
          { type: 'date', required: true, message: '初始日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '结束日期', trigger: 'change' }
        ],
        resource: [
          { required: true, message: '请选择活动资源', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' },
          { min: 0, max: 10, message: '不能超过10', trigger: 'blur' }
        ]

      }
    }
  },
  methods: {
    resetForm (ruleForm) {
      this.$refs.ruleForm.resetFields() // 重置------
    },
    submitForm (ruleForm) {
      this.$refs[ruleForm].validate(valid => {
        if (valid) {
          alert('验证通过')
        } else {
          return false
        }
      })
    }
  }

}
</script>

<style>
.home-page {
    width: 100%;
    height: 100%;
}

</style>
