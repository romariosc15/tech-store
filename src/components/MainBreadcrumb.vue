<script setup>
const props = defineProps({
  route: Array,
});
const lastIndex = props.route.length -1;
</script>
<template>
    <nav class="py-4" aria-label="breadcrumb">
        <ol class="breadcrumb flex flex-row">
            <li v-for="(segment, key) in props.route" v-bind:key="key">
                <a :class="lastIndex === key ? 'text-gray-500' : 'text-gray-800 hover:underline'" class="text-xs font-medium uppercase" :href="segment.url">{{ segment.name }}</a>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
.breadcrumb li + li::before {
    content: '\203A';
    margin-left: .625rem;
    margin-right: .625rem;
    font-weight: 500;
}
</style>
