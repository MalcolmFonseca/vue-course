<script setup>
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import { useTeamStore } from '@/stores/TeamStore';

let team = useTeamStore();
team.fill();
</script>

<template>
    <TeamHeader />

    <div>
        <TeamMembers />
    </div>

    <TeamFooter />
</template>