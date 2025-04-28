<script>
import { onMounted, nextTick } from "vue";
import Header from "@/components/header/Index.vue";
import Content from "@/components/content/Index.vue";
import TrailingDots from "@/components/animation/TrailingDots.vue";

export default {
  components: {
    Header,
    Content,
    TrailingDots,
  },
  setup() {
    onMounted(() => {
      nextTick(() => {
        setTimeout(() => {
          window.scrollTo(0, 0);
        }, 50);
      });

      const canvas = document.getElementById("stars");
      if (!canvas) return; // Jika canvas tidak ditemukan, hentikan proses

      const ctx = canvas.getContext("2d");
      if (!ctx) return; // Jika ctx tidak ditemukan, hentikan proses

      let stars = [];

      const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      };

      window.addEventListener("resize", resizeCanvas);
      resizeCanvas();

      const createStars = (count) => {
        stars = [];
        for (let i = 0; i < count; i++) {
          stars.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 2.5,
            speed: Math.random() * 0.5 + 0.2,
          });
        }
      };

      createStars(150);

      const animate = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = "white";
        stars.forEach((star) => {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
          ctx.fill();

          star.y += star.speed;
          if (star.y > canvas.height) {
            star.y = 0;
            star.x = Math.random() * canvas.width;
          }
        });

        requestAnimationFrame(animate);
      };

      animate();
    });

    return {};
  },
};
</script>

<template>
  <TrailingDots />
  <canvas id="stars"></canvas>
  <main>
    <Header />
    <Content />
  </main>
</template>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

html, body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

#stars {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: #121314;
}

main {
  position: relative;
  z-index: 1;
}
</style>