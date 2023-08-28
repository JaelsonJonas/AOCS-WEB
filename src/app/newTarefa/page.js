import Link from "next/link"
import NavBar from "../components/NavBar"

const Tarefa = () => {
  return (
    <div>

      <NavBar page={"CriarTarefa"} />

      <h1 className="text-3xl m-20"><Link href="/timer">Criar Tarefa</Link></h1>

    </div >
  )
}
export default Tarefa