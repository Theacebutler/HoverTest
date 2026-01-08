import React, { useState, type SetStateAction } from "react"
import { defaultLinks, type Link } from "./defaultLinks"
export default function Input({ setLinkList, linkList }: { setLinkList: React.Dispatch<SetStateAction<Link[]>>, linkList: Link[] }) {

  const [href, setHref] = useState<string>("")
  const [text, setText] = useState<string>("")

  function handelAddLink(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (href === "") {
      return
    }
    const newLink: Link = {
      id: Date.now(),
      href: href,
      text: text
    }
    setText("")
    setHref("")
    setLinkList([...linkList, newLink])
    localStorage.setItem("links", JSON.stringify([...linkList, newLink]))
  }

  function reset() {
    localStorage.removeItem("links")
    setLinkList(defaultLinks)
  }
  return (
    <div className="flex items-center justify-center">
      <form className=""
        onSubmit={handelAddLink}>
        <input type="text"
          className=""
          placeholder="Add a link to test "
          onChange={(e) => {
            setHref(e.target.value)
          }
          }
          value={href}
          id="__input" />

        <input type="text"
          className="m-px"
          placeholder="Add text (optional)"
          onChange={(e) => {
            setText(e.target.value)
          }
          }
          value={text} />
        <button type="submit">
          Add
        </button>
      </form >
      <div className="">
        <button
          onClick={reset}
        >Reset List / clear cache</button>
      </div >
    </div >
  )
}
