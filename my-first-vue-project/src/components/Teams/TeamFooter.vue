<script setup>
import { useTeamStore } from '@/stores/TeamStore';
let team = useTeamStore();
</script>

<template>
    <footer>
        <h5>{{ team.members.length }} Member Team</h5>
    </footer>
</template>