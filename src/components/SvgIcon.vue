<template>
    <svg
      :class="['svg-icon', `svg-icon-${name}`, className]"
      :style="svgStyle"
      fill="currentColor"
    >
      <use :xlink:href="iconName"/>
    </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    name: {
      type: String,
      required: true,
    },
    className: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: Number,
    },
  },
  computed: {
    iconName() {
      return `#icon-${this.name}`;
    },
    svgClass() {
      if (this.className) {
        return `${this.className}`;
      }
      return '';
    },
    svgStyle() {
      const { color, size } = this;
      const style = {};
      color && (style.color = color);
      size && (style.fontSize = `${size}px`);
      return style;
    },
  },
};
</script>
