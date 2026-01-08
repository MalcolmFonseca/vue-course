<script setup>
import { useTeamStore } from '@/stores/TeamStore';
import AddMemberModal from './AddMemberModal.vue';
let team = useTeamStore();
</script>

<template>
    <header>
        <h1>{{ team.name }} Team</h1>
        <AddMemberModal />
    </header>
</template>