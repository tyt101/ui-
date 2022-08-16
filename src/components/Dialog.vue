<template>
  <transition name="dialog">
    <div class="tyt-dialog-wrapper" v-show="visible" @click.self="$emit('update:visible', false)">
      <div class="tyt-dialog" :style="{ width, marginTop: top }">
        <div class="tyt-dialog-header">
          <slot name="title">
            <span class="tyt-dialog-title">{{ title }} </span>
          </slot>
          <button class="tyt-dialog-headerBtn">
            <i class="iconfont icon-tiantong" @click="$emit('update:visible', false)"></i>
          </button>
        </div>
        <div class="tyt-dialog-body">
          <slot></slot>
        </div>
        <div class="tyt-dialog-footer" v-if="$slots.footer">
          <slot name="footer"></slot>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'TytDialog',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    width: {
      type: String,
      default: '30%'
    },
    top: {
      type: String,
      default: '15vh'
    },
    visible: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/font/iconfont.css";

.tyt-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  background-color: rgba(0, 0, 0, 0.5);

  .tyt-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;

    &-header {
      padding: 20px 20px 10px;

      .tyt-dialog-title {
        line-height: 24px;
        font-size: 10px;
        color: #303123;
      }

      .tyt-dialog-headerBtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;

        .tyt-icon-close {
          color: #909399;
        }
      }
    }

    &-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }

    &-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;

      ::v-deep .tyt-button:first-child {
        margin-right: 20px;
      }
    }
  }
}

.dialog-enter {
  opacity: 0;
}

.dialog-enter-to {
  opacity: 1;
}

.dialog-enter-active {
  transition: all 0.5s;
}

.dialog-leave {
  opacity: 1;
}

.dialog-leave-to {
  opacity: 0;
}

.dialog-leave-active {
  transition: all 0.5s;
}
</style>
