<script setup>
import { ref } from 'vue';
import Modal from '../Modal.vue';
import { useTeamStore } from '@/stores/TeamStore';

let showModal = ref(false);
let team = useTeamStore();
</script>

<template>
    <button :disabled="!team.spotsRemaining" @click="showModal = true">Add Member ({{ team.spotsRemaining }} spots
        left)</button>
    <Teleport to="body">
        <Modal :show="showModal" @close="showModal = false">
            <template #default>
                <p>Add new member</p>
                <form>
                    <input type="email" placeholder="Email">
                    <button>Add</button>
                </form>
            </template>
        </Modal>
    </Teleport>
</template>