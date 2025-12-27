<script setup lang="ts">
import type { AccordionTriggerProps } from "reka-ui"
import type { HTMLAttributes } from "vue"
import { reactiveOmit } from "@vueuse/core"
import {
    AccordionHeader,
    AccordionTrigger,
} from "reka-ui"
import { cn } from "@/lib/utils"

const props = defineProps<AccordionTriggerProps & { class?: HTMLAttributes["class"] }>()

const delegatedProps = reactiveOmit(props, "class")
</script>

<template>
    <AccordionHeader class="flex">
        <AccordionTrigger
            data-slot="accordion-trigger"
            v-bind="delegatedProps"
            :class="
                cn(
                    'border bg-accent/25 cursor-pointer focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 gap-4 rounded-md px-4 py-4 text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&[data-state=open]>span]:rotate-180',
                    props.class,
                )
            "
        >
            <slot name="icon">
                <Icon
                    name="lucide:chevron-down"
                    :size="16"
                    class="mt-px text-muted-foreground pointer-events-none shrink-0 translate-y-0.5 transition-transform duration-200"
                />
            </slot>
            <slot />
        </AccordionTrigger>
    </AccordionHeader>
</template>
