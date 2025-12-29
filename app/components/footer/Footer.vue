<script setup lang="ts">
function goToTop() {
    if (useRoute().path === "/") {
        useLenis().value?.scrollTo(0)
    }
}
</script>

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
                <SocialIconList />
            </div>
            <div class="flex gap-8 flex-wrap justify-center">
                <FooterLinksCategory title="Navigation">
                    <FooterLinksItem
                        label="Home"
                        link="/"
                        @click="goToTop"
                    />
                    <FooterLinksItem
                        label="Experience"
                        link="#experience"
                        @click="useLenisScrollTo('experience', false)"
                    />
                    <FooterLinksItem
                        label="Skills"
                        link="#skills"
                        @click="useLenisScrollTo('skills', false)"
                    />
                    <FooterLinksItem
                        label="Projects"
                        link="#projects"
                        @click="useLenisScrollTo('projects', false)"
                    />
                    <FooterLinksItem
                        label="Contact"
                        link="#contact"
                        @click="useLenisScrollTo('contact', false)"
                    />
                </FooterLinksCategory>
                <FooterLinksCategory title="Resources">
                    <FooterLinksItem
                        label="View CV"
                        link="/files/CV_ArthurPaucke.pdf"
                        is-external
                    />
                </FooterLinksCategory>
            </div>
        </div>
        <div
            class="flex flex-col text-sm
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
