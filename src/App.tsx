import React, { useState } from "react"
import { defaultLinks, type Link } from "./defaultsLinks"
// import "./index.css";


export function App() {

  const links = (): Link[] => {
    const localLinks = localStorage.getItem("links")
    if (localLinks) {
      return JSON.parse(localLinks)
    } else {
      return defaultLinks as Link[]
    }
  }

  const [linkList, setLinkList] = useState<Link[]>(links())

  const [hidden, setHidden] = useState<boolean>(true)
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
    localStorage.clear()
    setLinkList(defaultLinks)
  }



  return (
    <>
      < form onSubmit={handelAddLink}>
        <input type="text"
          className="border-2 border-black"
          placeholder="Add a link to test "
          onChange={(e) => {
            setHref(e.target.value)
          }
          }
          value={href}
          id="__input" />

        <input type="text"
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
        <div>
          <ul>
            {
              linkList.map((link) => {
                return <li>
                  <a
                    className=""
                    key={link.id}
                    href={link.href}>
                    {link.text ? link.text : link.href}
                  </a>
                </li>
              })
            }
          </ul>
        </div>
        <button
          onClick={() => {
            setHidden(!hidden)
          }}
        >Show hidden links</button>
        {
          !hidden && <div>
            <a href="https://google.com">This is a hidden link</a>
          </div>
        }
      </div>
      <button>
        <a href="https://google.com">Link in a button</a>
      </button>
    </>
  );
}

export default App;
