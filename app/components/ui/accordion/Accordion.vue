<script setup lang="ts">
import type { AccordionRootEmits, AccordionRootProps } from "reka-ui"
import {
    AccordionRoot,
    useForwardPropsEmits,
} from "reka-ui"
import type { HTMLAttributes } from "vue"
import { cn } from "~/lib/utils"

const props = defineProps<AccordionRootProps & { class?: HTMLAttributes["class"] }>()
const emits = defineEmits<AccordionRootEmits>()

const forwarded = useForwardPropsEmits(props, emits)
</script>

<template>
    <AccordionRoot
        v-slot="slotProps"
        data-slot="accordion"
        v-bind="forwarded"
        :class="cn('flex flex-col gap-2 w-full', props.class)"
    >
        <slot v-bind="slotProps" />
    </AccordionRoot>
</template>
