<script setup lang="ts">
import { ref } from "vue"
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog"

const open = ref(false)
</script>

<template>
    <div class="relative">
        <slot />

        <Dialog v-model:open="open">
            <DialogTrigger as-child>
                <Icon
                    name="lucide:zoom-in"
                    class="absolute top-4 right-4 text-white opacity-50 hover:opacity-75 transition-opacity cursor-pointer"
                    :size="20"
                />
            </DialogTrigger>
            <DialogContent class="bg-transparent p-0 border-0 flex min-w-fit ">
                <slot />
            </DialogContent>
        </Dialog>
    </div>
</template>

<style scoped>
.dialog-img {
    max-width: 90vw;
    max-height: 90vh;
    object-fit: contain;
    display: block;
    margin: auto;
}
</style>
