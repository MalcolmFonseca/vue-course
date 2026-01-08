<script setup>
import TeamMember from './TeamMember.vue';

import { useTeamStore } from '@/stores/TeamStore';
let team = useTeamStore();
</script>

<template>
    <div>
        <table>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Status</th>
            </thead>
            <tbody>
                <TeamMember v-for="member in team.members" :name="member.name" :email="member.email"
                    :status="member.status" />
            </tbody>
        </table>

        <p v-show="!team.spotsRemaining">No remaining spots left!</p>
    </div>
</template>