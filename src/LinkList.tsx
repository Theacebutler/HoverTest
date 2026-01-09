import type { Link } from "@/defaultLinks"
import SingleLink from "./SingleLink"

export default function LinkList({ linkList }: { linkList: Link[] }) {


  const links = linkList.map((link: Link) => {
    return <SingleLink link={link} key={link.id} />
  })
  return (
    <div className="flex justify-center items-center">
      <ul className="">
        {links}
      </ul>
    </div>
  )
}
