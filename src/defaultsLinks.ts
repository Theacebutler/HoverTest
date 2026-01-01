
export interface Link {
  id: number,
  href: string,
  text?: string
}

export const defaultLinks: Link[] = [
  {
    id: 1,
    href: "https://google.com",
  }, {
    id: 2,
    href: "https://amazon.com",
  }, {
    id: 3,
    href: "https://not_a_domain_name.com",
  }, {
    id: 4,
    href: "/samePage",
  }
]
