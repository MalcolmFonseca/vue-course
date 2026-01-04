export default {
    template: `<li>
                    <label class="p-2 flex justify-between items-center">{{ assignment.name }}
                        <input v-model="assignment.complete" type="checkbox" class="ml-2">
                    </label>
                </li>`,

    props: {
        assignment: Object
    }
}