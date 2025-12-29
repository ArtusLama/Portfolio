<template>
    <AppSection
        id="contact"
        label="Contact Information"
        title="Get in Touch"
    >
        <div class="group/contact-card hover:scale-105 transition-transform ease-in-out duration-300 bg-accent/50 border rounded-4xl p-4 flex md:flex-row flex-col gap-x-8 gap-y-2 text-left shadow md:max-w-none max-w-80">
            <div class="aspect-square md:max-w-56 rounded-2xl overflow-hidden">
                <NuxtImg
                    class="object-cover w-full h-full group-hover/contact-card:scale-120 transition-transform duration-500 ease-in-out"
                    src="/imgs/profile_picture.svg"
                    alt="Contact Image"
                />
            </div>
            <div class="max-w-100 py-2 px-4">
                <h2 class="text-3xl font-semibold">
                    Let's Connect!
                </h2>
                <p class="text-muted-foreground">
                    I'm always open to new opportunities, collaborations, or just a friendly chat. Feel free to reach out via email or follow me on social media.
                </p>
                <SocialIconList class="mt-2" />
            </div>
        </div>
    </AppSection>
</template>
