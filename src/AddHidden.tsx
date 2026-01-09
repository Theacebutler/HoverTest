import { useState } from "react"
import type { Link } from "./defaultLinks"
import SingleLink from "./SingleLink";
export default function AddHidden() {
  const [hidden, setHidden] = useState<boolean>(true)
  const hiddenLink: Link = {
    id: Date.now(),
    href: "https://youtube.com",
    text: "new hidden link"
  }
  return (

    <div className="flex flex-col align-middle">
      <button
        onClick={() => {
          setHidden(!hidden)
        }}
      >Show hidden links</button>
      {
        !hidden && <div className="items-center">
          <SingleLink link={hiddenLink} />
        </div>
      }
    </div>
  )
}
