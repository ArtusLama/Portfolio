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
            <p class="sm:text-xl text-lg mt-4 text-center">
                <Icon
                    name="lucide:map-pin"
                    class="mr-1 -mb-0.5"
                />Based in Hamburg, Germany
            </p>
            <SocialIconList class="mt-8" />
        </div>
    </div>
</template>
