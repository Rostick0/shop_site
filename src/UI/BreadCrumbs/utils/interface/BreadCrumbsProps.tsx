type links = {
    id: number,
    text: string,
    href?: string | undefined
}

export default interface BreadCrumbsProps {
    links: Array<links>
}