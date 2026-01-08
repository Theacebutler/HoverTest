import type { Link } from "@/defaultLinks"

export default function LinkList({ linkList }: { linkList: Link[] }) {

  const handleDrageStart = (event: React.DragEvent<HTMLLIElement>) => {
    event.dataTransfer.setData('link', event.currentTarget.id)
  }
  const handleDrageEnd = (event: React.DragEvent<HTMLLIElement>) => {
    event.currentTarget.style.position = "absolute"
    event.currentTarget.style.top = `${event.clientY}px`
    event.currentTarget.style.left = `${event.clientX}px`
  }

  const links = linkList.map((link) => {
    return <li
      draggable
      onDragStart={handleDrageStart}
      onDragEnd={handleDrageEnd}
      id={`__li_id${link.id}`}
    >
      <a
        className=""
        id={link.id.toString()}
        key={link.id}
        href={link.href}>
        {link.text ? link.text : link.href}
      </a>
    </li >
  })
  return (
    <div className="flex justify-center items-center">
      <ul className="">
        {links}
      </ul>
    </div>
  )
}
