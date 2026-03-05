import { computed, ref } from "../../../resources/javascript/vue.js"

export default {
    name: 'MyName',

    setup() {

        const automatic = ref(true)
        const currentIndex = ref(0)

        const alterLine = ref(false)

        return {
            automatic,
            currentIndex,
            alterLine
        }

    },
    methods: {
        async cycleNames() {
            while (this.automatic) {
                await new Promise(resolve => setTimeout(resolve, 2000))
                this.currentIndex = (this.currentIndex + 1) % 7
            }
        },
    async cycleLine() {
            while (this.automatic) {
                await new Promise(resolve => setTimeout(resolve, 200))
                this.alterLine = !this.alterLine
            }
        }   
    },
    turnOff() {
        this.automatic = false;

    },
    mounted() {
    this.cycleNames();
    this.cycleLine();
    },
template : `
<div class="text-2xl font-bold text-gray-800 shadow-xl">
    <div>
        <span>Andrés Felipe Ibañez Cuta</span>
        <div class="w-[100px] bg-gray-300 h-[3px] rounded-md"></div>
    </div>

    <div v-show="!automatic" class="pt-2 gap-0">
        <div class="border-solid flex justify-between border-gray-200 border-[1px] bg-gray-100 rounded-t-md font-light text-sm p-2"> 
            <span> Or maybe I'm just a human 👦</span>
        </div>
    </div>

    <div v-show="automatic" class="pt-2 gap-0">
        <div class="border-solid flex justify-between border-gray-200 border-[1px] bg-gray-100 rounded-t-md font-light text-sm p-2">
            <span>Console</span>
            <span>
                <button @click="automatic = !automatic">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </span>
        </div>
        <div class="border-solid border-gray-200 border-[1px] bg-gray-100 rounded-b-md font-mono text-sm p-2">
            <div class="h-[60px] flex gap-2 mt-2 p-2 align-bottom ">
                <div class="w-[20px] mt-[20px]">
                    <span>{{ alterLine ? '>_' : '> ' }}</span>
                </div>
                <div>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 0">
                            Tech Enthusiast
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 1">
                            <span>Software Developer</span>
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 2">
                            Full Stack Developer
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 3">
                            Frontend Developer
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 4">
                            Backend Developer
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 5">
                            Programmer
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 6">
                            <span class="bg-pink-400 rounded-md pl-2 pr-2 text-black">
                            or just Pipelonso 🐨
                            </span>
                        </div>
                    </transition>
                    <transition name="slide-horizontal">
                        <div v-show="currentIndex == 7"></div>
                    </transition>
                </div>
            </div>
        </div>
    </div>
</div>
`
}