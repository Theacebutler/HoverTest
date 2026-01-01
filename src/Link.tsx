export default function Link({ href, text }: { href: string, text: string }) {
  return (
    <a href={href}>{text}</a>
  )
}
