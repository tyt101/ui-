<template>
    <label class="tyt-switch" :class="{ 'is-checked': value }" @click="handleClick">
        <input :name="name" type="hidden" class="tyt-switch-input" />
        <span class="tyt-switch-core" ref="core">
            <span class="tyt-switch-button"></span>
        </span>
    </label>
</template>

<script>
import Input from './Input.vue'
export default {
    components: { Input },
    name: 'TytSwitch',
    props: {
        value: {
            type: Boolean,
            default: false
        },
        activeColor: {
            type: String,
            default: '#409cff'
        },
        inactiveColor: {
            type: String,
            default: '#fff'
        },
        name: {
            type: String,
            default: ''
        }
    },
    methods: {
        handleClick() {
            this.$emit('input', !this.value)
        },
        toggleColor() {
            if (this.activeColor || this.inactiveColor) {
                const color = this.value ? this.activeColor : this.inactiveColor
                this.$refs.core.style.borderColor = color
                this.$refs.core.style.backgroundColor = color
            }
        }
    },
    mounted() {
        this.toggleColor()
    },
    watch: {
        value: {
            handler() {
                this.toggleColor()
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.tyt-switch {
    display: inline-flex;
    align-items: center;
    position: relative;
    font-size: 14px;
    line-height: 20px;
    height: 20px;
    vertical-align: middle;

    .tyt-switch-input {
        position: absolute;
        width: 0;
        height: 0;
        opacity: 0;
        margin: 0;
    }

    .tyt-switch-core {
        margin: 0;
        display: inline-block;
        position: relative;
        width: 40px;
        height: 20px;
        border: 1px solid #dcdfe6;
        outline: none;
        border-radius: 10px;
        box-sizing: border-box;
        background: #dcdfe6;
        cursor: pointer;
        transition: border-color .3s, background-color .3s;
        vertical-align: middle;

        .tyt-switch-button {
            position: absolute;
            top: 1px;
            // right: 1px;
            border-radius: 100%;
            transition: all .3s;
            width: 16px;
            height: 16px;
            background-color: #fff;
        }
    }
}

.tyt-switch.is-checked {
    .tyt-switch-core {
        border-color: #409cff;
        background-color: #409cff;

        .tyt-switch-button {
            transform: translateX(20px);
        }
    }
}
</style>