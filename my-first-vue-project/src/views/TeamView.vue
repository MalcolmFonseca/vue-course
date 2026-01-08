<script setup>
import TeamFooter from '@/components/Teams/TeamFooter.vue';
import TeamHeader from '@/components/Teams/TeamHeader.vue';
import TeamMembers from '@/components/Teams/TeamMembers.vue';
import { useTeamStore } from '@/stores/TeamStore';
import AddMemberModal from '@/components/Teams/AddMemberModal.vue';

let team = useTeamStore();
team.fill();
</script>

<template>
    <TeamHeader />

    <TeamMembers />

    <TeamFooter />

    <AddMemberModal />
</template>