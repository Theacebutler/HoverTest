import React, { useState } from "react"
import { defaultLinks, type Link } from "./defaultLinks"
import LinkList from "./LinkList";
import Input from "./Input"
import AddHidden from "./AddHidden";
import LinkInBtn from "./LinkInBtn";
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
      <AddHidden />
      <LinkInBtn />
    </main >
  );
}

export default App;
