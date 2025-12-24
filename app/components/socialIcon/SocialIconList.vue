<script lang="ts" setup>
import { toast } from "vue-sonner"

const mailAddress = "contact@arthur-paucke.de"

const copyMailToClipboard = useThrottleFn(() => {
    navigator.clipboard.writeText(mailAddress)
    toast.success(`Email address copied to clipboard: "${mailAddress}"`)
}, 2000)
</script>

<template>
    <div class="flex gap-2">
        <SocialIcon
            icon="lucide:github"
            link="https://github.com/ArtusLama"
            label="GitHub"
        />
        <SocialIcon
            icon="lucide:linkedin"
            link="https://www.linkedin.com/in/arthur-paucke/"
            label="LinkedIn"
        />
        <SocialIcon
            icon="simple-icons:discord"
            link="https://discord.gg/TSE3ErSzaQ"
            label="Discord"
        />
        <SocialIconExpandable
            icon="lucide:mail"
            link="mailto:contact@arthur-paucke.de"
            label="Mail"
            expand-text="contact@arthur-paucke.de"
            :expanded-width="240"
            @click="copyMailToClipboard"
        />
    </div>
</template>
