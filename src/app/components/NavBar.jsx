import Link from "next/link"

const NavBar = () =>{
    return (<>
    
    <div>
        <nav className="flex justify-center p-3 bg-nav rounded-b-xl ">
          <ul className="flex gap-44 items-center">
            <li><Link href="/"><img src="logo.png" alt="" className="h-16 w-16 rounded-full overflow-hidden" /></Link></li>
            <li><Link href="/tarefa">Criar tarefa</Link></li>
            <li className="h-16 w-16 rounded-full overflow-hidden"><Link href="/perfil"><img src="https://i.pravatar.cc/75" alt="Imgaem do usuario" /></Link></li>
          </ul>
        </nav>
      </div>
</>)

}
export default NavBar