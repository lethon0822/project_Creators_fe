<script setup lang="ts">

    import { ref } from 'vue'

    const state  = ref (false)
    const header = ref <HTMLElement | null> (null)

    function toggleListener (active: boolean): void {

        active ?  window.addEventListener    ("mousedown", mouseDownOutside) : 
                  window.removeEventListener ("mousedown", mouseDownOutside)

    }

    function mouseDownHeader (): void {

        toggleListener (state.value = !state.value)

    }

    function mouseDownOutside (e: MouseEvent): void {

        const isOutside = header.value && !header.value.contains(e.target as Node) 

        if (isOutside) toggleListener (state.value = false)

    }

    function mouseDownItem (): void {

        toggleListener (state.value = false)

    }

</script>

<template>

    <button ref = "header" @mousedown.prevent = mouseDownHeader >
        click
    </button>

    <ul v-if = state >
        <li @mousedown.prevent = mouseDownItem >one</li>
        <li @mousedown.prevent = mouseDownItem >two</li>
    </ul>

</template>

<style scoped>

</style>