<script setup>
defineProps({
    show: Boolean
})
</script>

<template>
    <Transition name="modal">
        <div v-if="show" class="modal-mask">
            <div class="modal-container">
                <div>
                    <slot>default body</slot>
                </div>
                <footer class="modal-footer">
                    <slot name="footer">
                        <button @click="$emit('close')">Close</button>
                    </slot>
                </footer>
            </div>
        </div>
    </Transition>
</template>

<style>
.modal-mask {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, .6);
    display: grid;
    place-items: center;
}

.modal-container {
    background: gray;
    padding: 1rem;
    width: 80vw;
    max-width: 500px;
    border-radius: 7px;
}

.modal-footer {
    border-top: 1px solid #ddd;
    padding-top: .5rem;
    margin-top: .5rem;
}

.modal-enter-active,
.modal-leave-active {
    transition: opacity .3s;
}

.modal-enter-from {
    opacity: 0;
}

.modal-enter-to {
    opacity: 100;
}

.modal-leave-from {
    opacity: 100;
}

.modal-leave-to {
    opacity: 0;
}
</style>