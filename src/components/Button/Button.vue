<template>
  <button type="button" :class="classes" @click="onClick" :style="style">{{ label }}</button>
</template>

<script>
export default {
  name: "TButton",

  props: {
    label: {
      type: String,
      required: true,
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "medium",
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  computed: {
    classes() {
      return {
        "t-button": true,
        "t-button--primary": this.primary,
        "t-button--secondary": !this.primary,
        [`t-button--${this.size}`]: true,
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor,
      };
    },
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
<style lang="scss">
.t-button {
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  &--primary {
    color: white;
    background-color: red;
  }
  &--secondary {
    color: #333;
    background-color: transparent;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
  }
  &--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &--large {
    font-size: 16px;
    padding: 12px 24px;
  }
}
</style>
