<script setup>
import { useTeamStore } from '@/stores/TeamStore';
let team = useTeamStore();
</script>

<template>
    <footer>
        <h5>{{ team.spotsRemaining }} Member Team</h5>
    </footer>
</template>