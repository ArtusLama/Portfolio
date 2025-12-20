<template>
    <div class="flex items-center justify-center h-dvh max-h-200">
        <div class="flex flex-col items-center">
            <p class="font-semibold text-3xl">
                Hey, I'm
            </p>
            <h1 class="font-black text-7xl text-center">
                Arthur Paucke
            </h1>
            <h2 class="font-bold text-5xl mt-2 text-center">
                <span class="bg-linear-to-b from-fuchsia-300 to-fuchsia-700 bg-clip-text text-transparent">
                    Designer
                </span>
                <span>
                    &
                </span>
                <span class="bg-linear-to-b from-sky-300 to-blue-700 bg-clip-text text-transparent">
                    Developer
                </span>
            </h2>
            <p class="text-xl mt-4 text-center">
                <Icon
                    name="lucide:map-pin"
                    class="mr-1 -mb-0.5"
                />Based in Hamburg, Germany
            </p>
            <div class="flex gap-2 mt-8">
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
                <SocialIcon
                    icon="lucide:mail"
                    link="mailto:contact@arthur-paucke.de"
                    label="Mail"
                />
            </div>
        </div>
    </div>
</template>
