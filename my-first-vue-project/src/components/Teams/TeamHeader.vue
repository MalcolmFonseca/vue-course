<script setup>
import { useTeamStore } from '@/stores/TeamStore';
let team = useTeamStore();
</script>

<template>
    <header>
        <h1>{{ team.name }} Team</h1>
        <button :disabled="!team.spotsRemaining">Add Member ({{ team.spotsRemaining }} spots
            left)</button>
    </header>
</template>