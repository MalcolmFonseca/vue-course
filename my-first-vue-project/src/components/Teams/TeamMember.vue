<script setup>
    defineProps({
        name: String,
        email: String,
        status: String
    })
</script>

<template>
    <tr>
        <td>{{ name }}</td>
        <td>{{ email }}</td>
        <td><button>{{ status }}</button></td>
    </tr>
</template>m