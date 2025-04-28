<script>
export default {
  data() {
    return {
      imageClass: "",
    };
  },
  methods: {
    handleHover() {
      this.imageClass = "drop-shadow-[0_0_20px_white]";
    },
    handleMouseLeave() {
      this.imageClass = "";
    },
  },
};
</script>

<template>
    <div class="relative w-[400px] h-[400px] flex items-center justify-center">
        
        <div
        class="absolute inset-0 animate-rotate z-2"
        style="
            --border-width: 30px;
            border: var(--border-width) solid transparent;
            border-image: conic-gradient(from var(--angle), red, yellow, lime, aqua, blue, magenta, red) 1;
        "
        @mouseover="handleHover" 
        @mouseleave="handleMouseLeave"
        ></div>

        <div
        class="absolute inset-0"
        style="
            mask-image: url('@/assets/images/ijk.png');
            -webkit-mask-image: url('@/assets/images/ijk.png');
            mask-size: contain;
            mask-repeat: no-repeat;
            mask-position: center;
            -webkit-mask-size: contain;
            background: white;
        "
        ></div>

        <img
        src="@/assets/images/ijk.png"
        alt="Profile"
        class="absolute bottom-0 w-full object-contain z-1 transition-all duration-300 p-8"
        :class="imageClass"
        />
    </div>
</template>

<style scoped>
@property --angle {
syntax: '<angle>';
initial-value: 0deg;
inherits: false;
}

@keyframes rotate {
to {
    --angle: 360deg;
}
}

.animate-rotate {
--angle: 0deg;
animation: rotate 4s linear infinite;
}
</style>
  