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
      开始时间: <span>{{value3[0] | renderTime }}</span><br/>
      结束时间: <span>{{ value3[1] | renderTime }}</span><br/>
      <!-- 结束时间: <span>{{ value3[1] | cancelTime }}</span> -->
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
    <h4>倒计时----</h4>
    <span>{{ time }}</span><br/>
    123
    <span>{{ '2021-11-14 21:46:10' | cancelTime }}</span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      h: 23,
      m: 59,
      s: 59,
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

      },
      nowTime: new Date()
    }
  },
  created () {
    setInterval(() => {
      this.nowTime = new Date()
    }, 1000)
  },
  mounted () {
    console.log('00000000000')
  },
  updated () {
    console.log('updated')
  },
  computed: {
    time () {
      const getTime = Date.parse('2021-11-14 21:46:10') // 开始时间
      const oneDay = 24 * 3600 * 1000 // 一天时间
      const time = this.nowTime // 当前时间
      const rangeTime = getTime + oneDay
      if (rangeTime > time) {
        const newTime = (rangeTime - time) / 1000
        // const days = Math.floor(newTime / (24 * 3600))

        const hour = Math.floor(newTime / 3600)
        const live = newTime % 3600
        const minutes = Math.floor(live / 60)
        const seconds = Math.floor(live % 60)
        console.log(hour)
        console.log(minutes)
        console.log(seconds)
        return `${hour > 9 ? hour : ('0' + hour)}:${minutes}:${seconds > 9 ? seconds : ('0' + seconds)}`
      }
      return '已超时'
    }

  },
  methods: {
    changeTime () {
      this.midTime = ''
    },
    countDownTIme (data) {
      --this.s
      if (this.s < 0) {
        --this.m
        this.s = 59
      }
      if (this.m < 0) {
        --this.h
        this.m = 59
      }
      if (this.h < 0) {
        this.s = 0
        this.m = 0
      }
    }

  }

}
</script>

<style>

</style>
