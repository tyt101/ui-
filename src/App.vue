<template>
  <div id="app">
    <tyt-button @click="visible = true">显示dialog</tyt-button>
    <div class="row">
      <tyt-dialog width="40%" top="15vh" :visible.sync="visible">
        <template v-slot:title>
          <h3 class="taskForm">任务表单</h3>
        </template>
        <ul>
          <li>111</li>
          <li>222</li>
          <li>333</li>
        </ul>
        <template v-slot:footer>
          <tyt-button @click="handleCancel">取消</tyt-button>
          <tyt-button type="primary" @click="handleConfirm">确认</tyt-button>
        </template>
      </tyt-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return { visible: false }
  },
  methods: {
    handleClick (e) {
      console.log(e)
    },
    handleCancel () {
      this.visible = false
    },
    handleConfirm () {
      this.visible = false
    }
  }
}
</script>

<style lang="scss" scoped>
.taskForm {
  padding: 0;
  margin: 0;
}

.row {
  margin-bottom: 20px;

  .tyt-button {
    margin-right: 20px;
  }
}
</style>
