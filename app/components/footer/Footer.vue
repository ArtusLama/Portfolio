<template>
    <footer
        class="px-16 py-10 bg-footer flex flex-col
                gap-16
                lg:gap-12"
    >
        <div
            class="flex justify-between
                    flex-col         items-center        gap-12
                    lg:flex-row lg:items-start lg:gap-0"
        >
            <div
                class="flex flex-col gap-1
                        items-center
                        lg:items-start"
            >
                <p
                    class="font-black text-3xl stroke-1
                        text-center
                        lg:text-left"
                >
                    Arthur Paucke
                </p>
                <p
                    class="text-center max-w-72
                            lg:text-left lg:max-w-80"
                >
                    Whether it's a quick hello or something more, I'd be glad to hear from you.
                </p>
                <div class="flex gap-2">
                    <FooterSocialIcon
                        icon="lucide:github"
                        link="https://github.com/ArtusLama"
                        label="GitHub"
                    />
                    <FooterSocialIcon
                        icon="lucide:linkedin"
                        link="https://www.linkedin.com/in/arthur-paucke/"
                        label="LinkedIn"
                    />
                    <FooterSocialIcon
                        icon="simple-icons:discord"
                        link="https://discord.gg/TSE3ErSzaQ"
                        label="Discord"
                    />
                    <FooterSocialIcon
                        icon="lucide:mail"
                        link="mailto:contact@arthur-paucke.de"
                        label="Mail"
                    />
                </div>
            </div>
            <div class="flex gap-8 flex-wrap justify-center">
                <FooterLinksCategory title="Main">
                    <FooterLinksItem
                        v-for="i in 4"
                        :key="i"
                        label="test lol"
                        link="https://example.com"
                        is-external
                    />
                </FooterLinksCategory>
                <FooterLinksCategory title="Other">
                    <FooterLinksItem
                        v-for="i in 4"
                        :key="i"
                        label="on this page"
                        link="/test"
                    />
                </FooterLinksCategory>
            </div>
        </div>
        <div
            class="flex flex-col
                    items-center    gap-1    text-center
                    lg:items-start  lg:gap-0 lg:text-left"
        >
            <p>
                © {{ useWebsiteLastModified().getFullYear() }} Arthur Paucke. All rights reserved.
            </p>
            <div
                class="flex flex-wrap justify-between items-center gap-x-8 w-full
                        flex-col
                        lg:flex-row"
            >
                <p class="text-muted-foreground">
                    Always a work in progress - because progress never stops.
                </p>
                <p class="text-muted-foreground/50 text-sm">
                    Last updated on
                    <NuxtTime
                        :datetime="useWebsiteLastModified()"
                        day="numeric"
                        month="long"
                        year="numeric"
                        hour="2-digit"
                        minute="2-digit"
                    />
                </p>
            </div>
        </div>
    </footer>
</template>
