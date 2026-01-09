import type { Link } from "./defaultLinks"

export default function SingleLink({ link }: { link: Link }) {

  function handleDrage(e: React.DragEvent<HTMLLIElement>) {
    e.currentTarget.style.position = "absolute"
    e.currentTarget.style.left = `${e.clientX}px`
    e.currentTarget.style.top = `${e.clientY}px`
    if (e.currentTarget.style.top === "0px" && e.currentTarget.style.left === "0px") {
      window.alert("As of now, dragging works only in Chrome and not in FireFox or FireFox based browsers (Yes, Zen. that includes you)")
      e.currentTarget.style.position = ""
      return
    }
  }
  return <li
    draggable
    onDrag={handleDrage}
  >
    <a
      className=""
      key={link.id}
      href={link.href}>
      {link.text ? link.text : link.href}
    </a>
  </li >
}
