<template>
  <div class="date-page">
    <h4>日期按钮</h4>
    <el-date-picker
      v-model="value1"
      type="date"
      :editable="true"
      :clearable="true"
      :picker-options="pickerOptions"
      placeholder="选择日期">
    </el-date-picker>
    <h4>开始时间</h4>
    <el-date-picker
      v-model="value1"
      type="date"
      :editable="true"
      :clearable="true"
      :picker-options="pickerOptions"
      placeholder="选择日期">
    </el-date-picker>
    <h4>结束时间</h4>
    <el-date-picker
      v-model="value2"
      type="date"
      :editable="true"
      :clearable="true"
      :picker-options="modifyTime"
      placeholder="选择日期">
    </el-date-picker>
    <p>
      开始时间: <span>{{value2[0] }}</span><br/>
      结束时间: <span>{{ value2[1] }}</span>
    </p>

    <el-date-picker
      v-model="value3"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      :picker-options="RangeTime"
      @change='changeTime'
      end-placeholder="结束日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      abc: null,
      value1: '',
      value2: '',
      value3: '',
      midTime: '',
      hehe: '日日期期',
      RangeTime: {
        disabledDate: (time) => {
          if (this.midTime) {
            return time.getTime() < this.midTime.getTime()
          } else {
            return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
          }
        },
        onPick: ({ maxDate, minDate }) => {
          if (!this.midTime) {
            this.midTime = minDate
          }
        },
        cellClassName (Date) {
          // console.log(Date)
        }
      },
      modifyTime: {
        disabledDate: (time) => {
          return time.getTime() < this.value1.getTime() + 24 * 60 * 60 * 1000
        }
      },
      pickerOptions: {
        disabledDate (time) {
          return time.getTime() < Date.now() - 24 * 60 * 60 * 1000
        },
        shortcuts: [
          {
            text: '今天',
            onClick (Picker) {
              Picker.$emit('pick', new Date())
            }
          },
          {
            text: '明天',
            onClick (Picker) {
              Picker.$emit('pick', new Date().getTime() + 24 * 3600 * 1000)
            }
          },
          {
            text: '一周后',
            onClick (Picker) {
              Picker.$emit('pick', new Date().getTime() + 24 * 3600 * 1000 * 7)
            }
          }
        ]

      }
    }
  },
  created () {
  },
  methods: {
    changeTime () {
      this.midTime = ''
      console.log(this.value3)
    }
  }

}
</script>

<style>

</style>
