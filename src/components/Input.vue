<template>
    <div class="tyt-input" :class="[isShowIcon ? 'tyt-input--suffix' : '']">
        <input class="tyt-input-inner" :placeholder="placeholder" :type="showType" :clearable="clearable" :name="name"
            :disabled="disabled" :value="value" @input="handleInput" />
        <div class="tyt-input-suffix" v-if="isShowIcon">
            <i class="iconfont icon-tiantong" v-if="clearable" @click="handleClear"></i>
            <i class="iconfont icon-xiezishousi" v-if="showPassword" @click="handlePassword"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TytInput',
    props: {
        placeholder: {
            type: String,
            default: ''
        },
        clearable: {
            type: Boolean,
            default: false
        },
        showPassword: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: ''
        },
        value: null,

    },
    data() {
        return {
            passwordVisible: false
        }
    },
    created() {
        console.log(this.type)
        if (this.type === 'password') {
            this.passwordVisible = true
        }
    },
    methods: {
        handleInput(e) {
            this.$emit('input', e.target.value)
        },
        handleClear() {
            this.$emit('input', '')
        },
        handlePassword() {
            this.passwordVisible = !this.passwordVisible
        }
    },
    computed: {
        isShowIcon() {
            return this.showPassword || this.clearable
        },
        showType() {
            if (this.type !== 'password') {
                return this.type
            } else {
                return this.passwordVisible === true ? 'password' : 'text'
            }
        }
    }
}
</script>

<style lang="scss" scoped>
@import "@/assets/font/iconfont.css";

.tyt-input {
    width: 100%;
    position: relative;
    font-size: 14px;
    display: inline-block;

    &-inner {
        -webkit-appearance: none;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        border: 1px solid #dcdfe6;
        box-sizing: border-box;
        color: #606266;
        display: inline-block;
        font-size: inherit;
        height: 40px;
        line-height: 40px;
        outline: none;
        padding: 0 15px;
        transition: border-color .2s cubic-bezier(.645, .045, .355, 1);
        width: 100%;
    }
}

.tyt-input--suffix {
    &-inner {
        padding-right: 30px;
    }

    .tyt-input-suffix {
        position: absolute;
        height: 100%;
        right: 10px;
        top: 0;
        line-height: 40px;
        text-align: center;
        color: #c0c4cc;
        transition: all .3s;
        z-index: 900;

        i {
            color: #c0c4cc;
            font-size: 14px;
            cursor: pointer;
            transition: color .2s cubic-bezier(.645, .045, .355, 1);
        }
    }
}
</style>
