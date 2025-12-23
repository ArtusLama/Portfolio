export default (id: string, updateRoute: boolean) => {
    const el = document.getElementById(`${id}`) as HTMLElement | null
    if (el) {
        const computedStyle = getComputedStyle(el)
        const scrollMarginTop = parseFloat(computedStyle.scrollMarginTop) || 0
        const scrollPaddingTop = parseFloat(computedStyle.scrollPaddingTop) || 0
        const offset = scrollMarginTop + scrollPaddingTop

        useLenis().value?.scrollTo(el, {
            offset: -offset,
        })

        if (updateRoute) {
            useRouter().push({
                hash: `#${id}`,
            })
        }
    }
}
