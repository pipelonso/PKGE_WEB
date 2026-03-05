export default {
    name: 'SidebarButton',

    props: {
        url: String,
        text: String
    },

    setup(props) {
        return {
            url : props.url,
            text : props.text
        }
    },

    template: `
    <div class="border-solid rounded-md border-[2px] border-white hover:shadow-md hover:mt-[-5px] hover:border-solid hover:border-b-[2px] hover:border-b-gray-600 transition-all">
        <a :href="url"
        class="block w-full p-2 text-black">
            {{ text }}
        </a>
    </div>    
    `
}