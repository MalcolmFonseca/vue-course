<script setup>
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import { useTeamStore } from '@/stores/TeamStore';
import Modal from '@/components/Modal.vue';
import { ref } from 'vue';

let team = useTeamStore();
team.fill();

let showModal = ref(false);
</script>

<template>
    <TeamHeader @add="showModal = true" />

    <TeamMembers />

    <TeamFooter />

    <Modal :show="showModal" @close="showModal = false">
        <template #default>
            <p>Add new member</p>
            <form>
                <input type="email" placeholder="Email">
                <button>Add</button>
            </form>
        </template>
    </Modal>
</template>