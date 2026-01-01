
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
  }, {
    id: 5,
    text: "a link with an emoji in the domain name",
    href: "https://🏎️.com",
  }, {
    id: 6,
    text: "a link with Cyrillic 'а' (U+0430) instead of Latin 'a'",
    href: "https://pаypal.com",
  }

]
