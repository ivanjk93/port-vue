<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const dots = ref([
{ x: 0, y: 0, size: 20, color: "bg-cyan-400" },
{ x: 0, y: 0, size: 20, color: "bg-blue-500" },
{ x: 0, y: 0, size: 20, color: "bg-cyan-400" },
{ x: 0, y: 0, size: 20, color: "bg-blue-500" },
{ x: 0, y: 0, size: 20, color: "bg-cyan-400" },
]);

const mouse = { x: 0, y: 0 };

const moveDots = () => {
dots.value.forEach((dot, index) => {
    const target = index === 0 ? mouse : dots.value[index - 1];
    dot.x += (target.x - dot.x) * 0.2;
    dot.y += (target.y - dot.y) * 0.2;
});

requestAnimationFrame(moveDots);
};

const handleMouseMove = (e) => {
mouse.x = e.clientX;
mouse.y = e.clientY;
};

onMounted(() => {
window.addEventListener("mousemove", handleMouseMove);
moveDots();
});

onUnmounted(() => {
window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
    <div v-for="(dot, index) in dots" :key="index"
        :style="{
            top: dot.y + 'px',
            left: dot.x + 'px',
            width: dot.size + 'px',
            height: dot.size + 'px',
            backgroundColor: dot.color,
            borderRadius: '50%',
            position: 'fixed',
            transform: 'translate(-50%, -50%)',
            pointerEvents: 'none',
            zIndex: 9999,
        }"
        :class="dot.color"
    ></div>
</template>

<style scoped>
/* Optional: smooth fade in */
div {
transition: all 0.1s linear;
}
</style>