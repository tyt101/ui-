<template>
  <button class="tyt-button" :class="[
    `tyt-button--${type}`,
    {
      'is-plain': plain,
      'is-round': radius,
      'is-circle': circle,
      'is-disabled': disabled,
    },
  ]" :disabled="disabled" @click="handleClick">
    <i v-if="icon" class="iconfont" :class="[`icon-${icon}`]"></i>
    <span v-if="$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'TytButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    plain: {
      type: Boolean,
      default: false
    },
    radius: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleClick (e) {
      this.$emit('click', e)
    }
  }
}
</script>

<style scoped lang="scss">
.tyt-button {
  display: inline-block;
  line-height: 1;
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #dcdfe6;
  color: #606266;
  -webkit-appearance: none;
  text-align: center;
  box-sizing: border-box;
  outline: none;
  margin: 0;
  transition: 0.1s;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  padding: 12px 20px;
  font-size: 14px;
  border-radius: 4px;

  &:hover,
  &:focus {
    color: #409eff;
    border-color: #c6e2ff;
    background-color: #ecf5ff;
  }
}

.tyt-button--primary {
  color: #fff;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
}

.tyt-button--success {
  color: #fff;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #85ce61;
    border-color: #85ce61;
  }
}

.tyt-button--info {
  color: #fff;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #a6a9ad;
    border-color: #a6a9ad;
  }
}

.tyt-button--waring {
  color: #fff;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ebb563;
    border-color: #ebb563;
  }
}

.tyt-button--danger {
  color: #fff;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #f78989;
    border-color: #f78989;
  }
}

.tyt-button--primary.is-plain {
  color: #000;
  background-color: #409eff;
  border-color: #409eff;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #66b1ff;
    border-color: #66b1ff;
  }
}

.tyt-button--success.is-plain {
  color: #000;
  background-color: #67c23a;
  border-color: #67c23a;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #85ce61;
    border-color: #85ce61;
  }
}

.tyt-button--info.is-plain {
  color: #000;
  background-color: #909399;
  border-color: #909399;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #a6a9ad;
    border-color: #a6a9ad;
  }
}

.tyt-button--waring.is-plain {
  color: #000;
  background-color: #e6a23c;
  border-color: #e6a23c;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #ebb563;
    border-color: #ebb563;
  }
}

.tyt-button--danger.is-plain {
  color: #000;
  background-color: #f56c6c;
  border-color: #f56c6c;

  &:hover,
  &:focus {
    color: #fff;
    background-color: #f78989;
    border-color: #f78989;
  }
}

.tyt-button.is-round {
  border-radius: 10px;
}

.tyt-button.is-circle {
  border-radius: 50%;
  padding: 12px;
}

.tyt-button.is-disabled {
  color: #000;
  background-color: #ccc;
  border: 1px solid #ccc;
  cursor: not-allowed;

  &:focus,
  &:hover {
    background-color: #ccc;
    border: 1px solid #ccc;
    color: #000;
  }
}

.tyt-button [class*="icon-"]+span {
  margin-right: 5px;
}
</style>
