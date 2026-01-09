import type { Link } from "./defaultLinks"

export default function SingleLink({ link }: { link: Link }) {

  const handleDrage = (e: React.DragEvent<HTMLLIElement>) => {
    e.currentTarget.style.position = "absolute"
    e.currentTarget.style.left = `${e.clientX}px`
    e.currentTarget.style.top = `${e.clientY}px`
  }
  return <li
    draggable
    onDragEnd={handleDrage}
  // onDragEnd={handleDrageEnd}
  >
    <a
      className=""
      key={link.id}
      href={link.href}>
      {link.text ? link.text : link.href}
    </a>
  </li >
}
