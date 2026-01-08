import React, { useState } from "react"
import { defaultLinks, type Link } from "./defaultLinks"
import LinkList from "./LinkList";
import Input from "./Input"
import AddHidden from "./AddHidden";
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





  return (
    <main className="">
      {/* input */}
      <Input setLinkList={setLinkList} linkList={linkList} />
      {/* link list */}
      <LinkList linkList={linkList} />
        <button>
          <a href="https://google.com">Link in a button</a>
        </button>
      </div>
      <AddHidden />
    </main >
  );
}

export default App;
