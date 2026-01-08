import React, { useState } from "react"
import { defaultLinks, type Link } from "./defaultLinks"
import LinkList from "./LinkList";
import Input from "./Input"
import "./index.css";


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




  return (
    <main className="">
      {/* input */}
      <Input setLinkList={setLinkList} linkList={linkList} />
      {/* link list */}
      <LinkList linkList={linkList} />
      <div className="flex flex-col align-middle">
        <button
          onClick={() => {
            setHidden(!hidden)
          }}
        >Show hidden links</button>
        {
          !hidden && <div className="items-center">
            <li>
              <a href="https://google.com">This is a hidden link</a>
            </li>
          </div>
        }
        <button>
          <a href="https://google.com">Link in a button</a>
        </button>
      </div>
    </main >
  );
}

export default App;
