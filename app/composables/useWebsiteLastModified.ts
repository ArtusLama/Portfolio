export default (): Date => {
    return new Date(useRuntimeConfig().public.buildDate)
}
