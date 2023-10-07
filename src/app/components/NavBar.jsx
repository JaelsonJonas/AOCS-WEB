"use client"

import Link from "next/link"
import { useState } from "react"
import DropMenu from "./DropMenu"
import Image from "next/image"
import Logo from '@/images/Logo.svg'


const NavBar = (page) => {

  const [nav, SetNav] = useState("Criar Tarefa")

  return (<>

    <div>
      <nav className="flex justify-center p-3 bg-white rounded-b-xl ">
        <ul className="flex gap-44 items-center">
          <li><Link href="/home"><Image src={Logo} alt="Logo da AOCS" className="h-16 w-16 rounded-full overflow-hidden" /></Link></li>
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