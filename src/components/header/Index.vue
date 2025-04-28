<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);
const menuDropdown = ref(null);
const menuButton = ref(null);
const activeSection = ref("#home");

const sections = ["#home", "#about", "#skill", "#project"];

const scrollToSection = (section) => {
  const targetSection = document.getElementById(section.replace("#", ""));
  const appContainer = document.getElementById("app-container");
  
  if (targetSection && appContainer) {
    isMenuOpen.value = false;
    setTimeout(() => {
      const offsetTop = targetSection.offsetTop;
      appContainer.scrollTo({
        top: offsetTop + 90,
        behavior: "smooth",
      });
    }, 250);
  }
};

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const handleClickOutside = (event) => {
  if (
    menuDropdown.value &&
    !menuDropdown.value.contains(event.target) &&
    menuButton.value &&
    !menuButton.value.contains(event.target)
  ) {
    isMenuOpen.value = false;
  }
};

const handleScroll = () => {
  const appContainer = document.getElementById("app-container");
  if (!appContainer) return;

  const scrollPosition = appContainer.scrollTop + 100;
  
  let currentSection = "#home";
  for (const section of sections) {
    const el = document.getElementById(section.replace("#", ""));
    if (el && el.offsetTop <= scrollPosition) {
      currentSection = section;
    }
  }
  activeSection.value = currentSection;
};

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
  const appContainer = document.getElementById("app-container");
  if (appContainer) {
    appContainer.addEventListener("scroll", handleScroll);
  }
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
  const appContainer = document.getElementById("app-container");
  if (appContainer) {
    appContainer.removeEventListener("scroll", handleScroll);
  }
});
</script>

<template>
  <nav class="bg-transparent border-gray-200 dark:bg-gray-900 sticky top-0 z-50">
    <div class="max-w-full flex flex-wrap items-center justify-between mx-auto p-4 relative">
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <span class="self-center text-2xl !font-bold whitespace-nowrap text-white" @click.prevent="scrollToSection('#home')">{ Ivan jaya Kosasih }</span>
      </a>
      <button
        ref="menuButton"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        :aria-expanded="isMenuOpen"
        @click="toggleMenu"
      >
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
        </svg>
      </button>

      <!-- Dropdown Menu -->
      <div
        id="navbar-default"
        ref="menuDropdown"
        :class="isMenuOpen ? 'absolute top-full left-0 w-full bg-white shadow-lg rounded-t-lg z-50' : 'hidden'"
        class="md:block md:relative md:w-auto md:bg-transparent md:shadow-none md:rounded-none md:z-auto"
      >
        <ul class="font-medium flex flex-col gap-8 p-4 md:flex-row md:space-x-8 rtl:space-x-reverse">
          <li>
            <a
              href="#home"
              :class="[
                'relative block py-2 px-3 text-white !font-semibold rounded-sm md:p-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300',
                activeSection === '#home'
                  ? 'text-cyan-400 after:w-full'
                  : 'hover:text-cyan-400 hover:after:w-full',
              ]"
              @click.prevent="scrollToSection('#home')"
            >Home</a>
          </li>
          <li>
            <a
              href="#about"
              :class="[
                'relative block py-2 px-3 text-white !font-semibold rounded-sm md:p-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300',
                activeSection === '#about'
                  ? 'text-cyan-400 after:w-full'
                  : 'hover:text-cyan-400 hover:after:w-full',
              ]"
              @click.prevent="scrollToSection('#about')"
            >About</a>
          </li>
          <li>
            <a
              href="#skill"
              :class="[
                'relative block py-2 px-3 text-white !font-semibold rounded-sm md:p-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300',
                activeSection === '#skill'
                  ? 'text-cyan-400 after:w-full'
                  : 'hover:text-cyan-400 hover:after:w-full',
              ]"
              @click.prevent="scrollToSection('#skill')"
            >Skill</a>
          </li>
          <li>
            <a
              href="#project"
              :class="[
                'relative block py-2 px-3 text-white !font-semibold rounded-sm md:p-0 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-cyan-400 after:transition-all after:duration-300',
                activeSection === '#project'
                  ? 'text-cyan-400 after:w-full'
                  : 'hover:text-cyan-400 hover:after:w-full',
              ]"
              @click.prevent="scrollToSection('#project')"
            >Project</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
