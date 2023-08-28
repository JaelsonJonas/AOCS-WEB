
"use client"

import Link from "next/link"
import { useState } from "react"
import DropMenu from "./DropMenu"


const NavBar = (page) => {

  const [nav, SetNav] = useState("Criar Tarefa")

  const alteraNome = (nome) => {
    { `${nome === "CriarTarefa" ? SetNav("Teste") : nav}` }
  }

  return (<>

    <div>
      <nav className="flex justify-center p-3 bg-nav rounded-b-xl ">
        <ul className="flex gap-44 items-center">
          <li><Link href="/"><img src="Logo.svg" alt="Logo da AOCS" className="h-16 w-16 rounded-full overflow-hidden" /></Link></li>
          <li><Link href="/newTarefa">Criar Tarefas</Link></li>
          <li>
              <DropMenu />
          </li>
        </ul>
      </nav>
    </div>
  </>)

}
export default NavBar