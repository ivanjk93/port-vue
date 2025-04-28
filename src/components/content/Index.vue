<script>
import BoxRunningRainbow from "@/components/animation/BoxRunningRainbow.vue";

export default {
    components: {
        BoxRunningRainbow,
    },
    data() {
        return {
            fullText: "I am a Fullstack Developer with core expertise as a Frontend Developer and UX Engineer. I have over 8 years of experience working with various companies in Indonesia. I am highly passionate about the field of programming.",
            displayText: "",
            observer: null
        };
    },
    mounted() {
        this.setupSkillHover();
        this.typeWriterEffect();
        this.setupImageObserver();
    },
    beforeDestroy() {
        if (this.observer) {
            this.observer.disconnect();
        }
    },
    methods: {
        scrollTo(sectionId) {
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                const appContainer = document.getElementById("app-container");
                // Scroll ke posisi section dari atasnya (tidak ditambah 90)
                const offsetTop = targetSection.offsetTop;
                appContainer.scrollTo({
                top: offsetTop,
                behavior: "smooth",
                });
            }
        },
        setupSkillHover() {
            const container = document.getElementById("skill");
            if (!container) return;

            const items = container.querySelectorAll(".skill-item");
            items.forEach((item) => {
                item.addEventListener("mouseenter", () => {
                container.classList.add("hovering");
                item.classList.add("hovered");
                });
                item.addEventListener("mouseleave", () => {
                container.classList.remove("hovering");
                item.classList.remove("hovered");
                });
            });
        },
        typeWriterEffect() {
        let index = 0;
        const typingSpeed = 30;
        const typeWriter = () => {
            if (index < this.fullText.length) {
            this.displayText += this.fullText.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
            }
        };
        setTimeout(typeWriter, 500);
        },
        setupImageObserver() {
            const images = document.querySelectorAll(".port-image");

            this.observer = new IntersectionObserver((entries) => {
                entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    entry.target.classList.remove("hide");
                } else {
                    if (entry.boundingClientRect.top > 0) {
                    // Scroll ke bawah, hilang biasa
                    entry.target.classList.remove("show");
                    } else {
                    // Scroll ke atas, animasi hide
                    entry.target.classList.remove("show");
                    entry.target.classList.add("hide");
                    }
                }
                });
            }, {
                threshold: 0.2,
            });

            images.forEach((img) => this.observer.observe(img));
        },
    }
};
</script>

<template>
    <div id="app-container">
        <div id="home" class="section grid grid-cols-1 lg:grid-cols-2 lg:p-20">
            <div class="left-column animate-left">
                <div class="flex flex-col items-center lg:items-end text-center lg:text-right gap-4 px-10 py-6">
                    <div>
                        <p class="text-white font-bold whitespace-pre-line w-full" style="font-family: 'Merriweather', serif;">
                            Hello World, It's me 
                            <span class="text-yellow-300">( )</span> 
                            <span class="text-blue-500">=></span> 
                            <span class="text-yellow-300">{</span>
                        </p>
                        <p class="text-white font-bold whitespace-pre-line text-4xl w-full" style="font-family: 'Merriweather', serif;">
                            Ivan Jaya Kosasih <span class="text-yellow-300">}</span>
                        </p>
                    </div>
                    <p class="text-green-300 font-bold whitespace-pre-line text-2xl glowing-text tracking-wide w-full">
                    Fullstack Developer
                    </p>
                    <p class="text-cyan-400 font-bold whitespace-pre-line text-xl">
                    {{ displayText }}
                    </p>
                    <div class="social-icons flex gap-4 justify-center lg:justify-start">
                        <a href="https://wa.me/+6281210032917" target="_blank" class="social-icon">
                            <i class="fab fa-whatsapp"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/ivanjk93/" target="_blank" class="social-icon">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://github.com/ivanjk93" target="_blank" class="social-icon">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="https://www.instagram.com/ivanjk93" target="_blank" class="social-icon">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                    <button class="neon-button" @click="scrollTo('about')">
                    View Portfolio
                    </button>
                </div>
            </div>
    
            <div class="right-column animate-right">
                <div class="flex items-center justify-center lg:justify-start p-5">
                    <BoxRunningRainbow />
                </div>
            </div>
        </div>
    
        <div id="about" class="section grid grid-cols-1 lg:grid-cols-3 gap-4 lg:p-20">
            <div class="flex justify-center items-start">
                <div class="flip-card lg:!w-full xl:!w-[90%]">
                    <div class="flip-card-inner">
                        <div class="flip-card-front !gap-6">
                            <div class="flex gap-4">
                                <font-awesome-icon 
                                    icon="code" 
                                    class="text-4xl text-cyan-400 animate-pulse hover:scale-125 hover:rotate-6 hover:text-cyan-300 transition-all duration-500" 
                                />
                                <font-awesome-icon 
                                    icon="plus" 
                                    class="text-4xl text-sky-400 hover:text-sky-300 transform hover:scale-110 transition duration-500" 
                                />
                                <font-awesome-icon 
                                    icon="database" 
                                    class="text-4xl text-cyan-400 animate-pulse hover:scale-125 hover:rotate-6 hover:text-cyan-300 transition-all duration-500" 
                                />
                            </div>
                            <p class="gradient-text text-4xl">Fullstack</p>
                            <p class="text-xl text-white">I develop and integrate both client-side and server-side applications, ensuring a seamless, efficient, and cohesive web experience.</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="text-white !font-bold text-2xl xl:text-4xl !mb-4">Work Experience</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Gracia Teknologi Inovasi</p>
                        </div>
                    </div>
                </div>
            </div>
        
            <div class="flex justify-center items-start">
                <div class="flip-card lg:!w-full xl:!w-[90%]">
                    <div class="flip-card-inner">
                        <div class="flip-card-front !gap-6">
                            <div class="flex gap-4">
                                <font-awesome-icon icon="code" class="text-4xl text-cyan-400 animate-pulse hover:scale-125 hover:rotate-6 hover:text-cyan-300 transition-all duration-500" />
                            </div>
                            <p class="gradient-text text-4xl">Frontend</p>
                            <p class="text-xl text-white">I specialize in building and optimizing the client-side of web applications to create responsive, interactive user interfaces.</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="text-white !font-bold text-2xl xl:text-4xl !mb-4">Work Experience</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Inovasi Dunia Gim</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT WnW Tekno Digie</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Scotia Real Estate</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Danarta Anugrah Divina</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Inti Graha Propertindo</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Indoka Jaya</p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="flex justify-center items-start">
                <div class="flip-card lg:!w-full xl:!w-[90%]">
                    <div class="flip-card-inner">
                        <div class="flip-card-front !gap-6">
                            <div class="flex gap-4">
                                <font-awesome-icon icon="laptop-code" class="text-4xl text-cyan-400 animate-pulse hover:scale-125 hover:rotate-6 hover:text-cyan-300 transition-all duration-500" />
                            </div>
                            <p class="gradient-text text-4xl">UX Engineer</p>
                            <p class="text-xl text-white">I focus on UI slicing and improving user experience by implementing efficient design systems and creating intuitive interfaces.</p>
                        </div>
                        <div class="flip-card-back">
                            <p class="text-white !font-bold text-2xl xl:text-4xl !mb-4">Work Experience</p>
                            <p class="gradient-text text-xl lg:text-lg xl:text-2xl">PT Koltiva</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div id="skill" class="section flex flex-col gap-4 py-10 px-20">
            <p class="text-2xl text-white !font-bold">Languages</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative">
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-js text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">JavaScript</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-ts text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">TypeScript</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>
    
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-html5 text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">HTML5</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>
    
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-css3-alt text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">CSS3</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-php text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">PHP</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">advanced</p>
                    </div>
                </div>
            </div>

            <p class="text-2xl text-white !font-bold">Frameworks</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 relative">
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-vuejs text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Vue JS</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>
    
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-react text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">React</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Intermediate</p>
                    </div>
                </div>
    
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-laravel text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Laravel</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Advanced</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-nuxt text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Nuxt JS</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-next text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Next JS</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Intermediate</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-bootstrap text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Bootstrap</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-nuxt text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Tailwind CSS</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-flutter text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Flutter</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Intermediate</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-uikit text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">UI Kit</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-mui text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Material UI</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-quasar text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Quasar</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-vuetify text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Vuetify</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-vuexy text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">vuexy</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-prime-vue text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">PrimeVue</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-shadcn text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">ShadCN</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-radix text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Radix UI</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>
            </div>

            <p class="text-2xl text-white !font-bold">Tools</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 relative">
                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-git text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Git</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-github text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Github</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-gitlab text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Gitlab</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-postman text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Postman</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-figma text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Figma</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>

                <div class="skill-item border-4 rounded-lg border-amber-300 h-20 flex items-center gap-4 p-4">
                    <i class="fa-brands fa-axios text-4xl text-white animate-pulse hover:text-white transition-all duration-500"></i>
                    <div>
                        <p class="text-xl text-white !font-bold animate-pulse hover:text-white transition-all duration-500">Axios</p>
                        <p class="skill-text opacity-0 hidden text-md text-cyan-400 !font-bold">Proficient</p>
                    </div>
                </div>
            </div>
        </div>

        <div id="project" class="section flex flex-col py-10 px-4 sm:px-10 md:px-20">
            <img
                src="@/assets/images/gameconsign.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/gameconsign-mobile.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/esa.jpeg"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/monika.jpeg"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/somebuddy.jpeg"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/greenchoice.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/pt-gti-web.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/titipcari.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/g-hours-web.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/g-hours-mobile.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/gdschannel-cms.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/gdschannel-web.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/gdschannel-mobile.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/klikpegi-mobile.png"
                alt="indokajaya"
                class="port-image"
            />
            <img
                src="@/assets/images/indokajaya-web.png"
                alt="indokajaya"
                class="port-image"
            />
        </div>
    </div>
</template>

<style lang="scss" scoped>
#app-container {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    scroll-behavior: smooth;

    &::after {
        content: "";
        display: block;
        height: 90px;
    }
    
    .section {
        scroll-snap-align: start;
        min-height: 100vh;
    }

    .left-column {
        opacity: 0;
        transform: translateX(-100%);
        animation: slideInLeft 3s forwards;

        /* Animation glowing text */
        @keyframes glowing {
            0% {
                text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 15px #ffcc00, 0 0 20px #ffcc00;
            }
            50% {
                text-shadow: 0 0 10px #ffcc00, 0 0 20px #ffcc00, 0 0 30px #ffcc00, 0 0 40px #ff9900;
            }
            100% {
                text-shadow: 0 0 5px #ffcc00, 0 0 10px #ffcc00, 0 0 15px #ffcc00, 0 0 20px #ffcc00;
            }
        }
        .glowing-text {
            animation: glowing 1.5s ease-in-out infinite;
            color: #ffcc00;
            transition: all 0.3s ease;
            will-change: text-shadow;
        }

        .social-icons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            @media (min-width: 1024px) {
                justify-content: flex-start;
            }
        }
        .social-icon {
            position: relative;
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            background: transparent;
            border: 1px solid white;
            border-radius: 50%;
            font-size: 1.25rem;
            color: white;
            transition: all 0.4s ease;
            cursor: pointer;
            padding: 5px;

            i {
                transition: all 0.3s ease;
            }

            &:hover {
                background: #00f0ff;
                border-color: #00f0ff;
                box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff;
                color: #121314;
            }
        }

        .neon-button {
            position: relative;
            overflow: hidden;
            border-radius: 9999px;
            padding: 0.75rem 2rem;
            font-size: 1.125rem;
            font-weight: 600;
            background: white;
            color: #121314;
            border: 1px solid white;
            transition: all 0.4s ease;
            cursor: pointer;

            &:hover {
                background: #00f0ff;
                color: #121314;
                border-color: #00f0ff;
                box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff;
            }
        }
    }
    .right-column {
        opacity: 0;
        transform: translateX(100%);
        animation: slideInRight 3s forwards;
    }
    @keyframes slideInLeft {
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }
    @keyframes slideInRight {
        100% {
            opacity: 1;
            transform: translateX(0);
        }
    }

    .flip-card {
        background-color: transparent;
        width: 80%;
        height: auto;
        perspective: 1000px;

        .flip-card-inner {
            aspect-ratio: 3/4;
            max-height: 500px;
            position: relative;
            width: 100%;
            text-align: center;
            transition: transform 0.8s;
            transform-style: preserve-3d;
            border: 10px solid #a855f7;
            border-radius: 16px;

            .flip-card-front,
            .flip-card-back {
                padding: 12px;
                position: absolute;
                width: 100%;
                height: 100%;
                backface-visibility: hidden;
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: #121314;
                gap: 8px;

                .gradient-text {
                    // font-size: 3vw;
                    font-weight: bold;
                    background: linear-gradient(270deg, #ff00cc, #3333ff, #00ffcc, #ffcc00, #ff00cc);
                    background-size: 800% 800%;
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    animation: gradientMove 8s ease infinite;
                    text-align: center;
                }

                @keyframes gradientMove {
                    0% {
                        background-position: 100% 50%;
                    }
                    50% {
                        background-position: 0% 50%;
                    }
                    100% {
                        background-position: 100% 50%;
                    }
                }
            }

            .flip-card-back {
                transform: rotateY(180deg);
                padding: 20px;
                display: flex;
                flex-direction: column;
                justify-content: center;
            }
        }

        &:hover .flip-card-inner {
            transform: rotateY(180deg);
            border-color: #00f0ff;
            box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff;
        }
    }

    #skill {
        &.hovering {
            .skill-item {
            filter: blur(2px);
                opacity: 0.6;
                transform: scale(1);
            }

            .skill-item.hovered {
            filter: none;
                opacity: 1;
                transform: scale(1.1);
                z-index: 10;

                .skill-text {
                    opacity: 1;
                    animation: typing 0.5s steps(10, end) forwards;
                    white-space: nowrap;
                    overflow: hidden;
                    // border-right: 2px solid #0ff;
                    display: block;
                }
            }
        }

        .skill-item {
            cursor: pointer;
            filter: none;
            transform: scale(1);

            .skill-text {
                opacity: 0;
            }

            &:hover {
                // background: #00f0ff;
                color: #121314;
                border-color: #00f0ff;
                box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff;
            }
        }

        @keyframes typing {
            from {
                width: 0;
            }
            to {
                width: 100%;
            }
        }
    }

    #project {
        padding-bottom: 120px;
        .port-image {
            height: 80vh;
            border-radius: 24px;
            border: 5px solid #00f0ff;
            box-shadow: 0 0 10px #00f0ff, 0 0 20px #00f0ff, 0 0 30px #00f0ff;

            opacity: 0;
            transform: translateY(50px) scale(1.2);
            transition: all 0s ease;
            will-change: transform, opacity;
            z-index: 5;

            position: sticky;
            top: 50px;

            @media (max-width: 640px) {
                height: 300px;
                width: 100%;
                top: 20%;
                transform: translateY(-20%);
            }

            &.show {
                opacity: 1;
                transform: translateY(0) scale(1);
                z-index: 10;
            }

            &.hide {
                opacity: 0;
                transform: translateY(-50px) scale(0.8);
                z-index: 0;
            }
        }
    }
}
</style>