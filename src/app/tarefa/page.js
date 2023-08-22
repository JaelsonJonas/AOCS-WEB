import Link from "next/link"
import NavBar from "../components/NavBar"

const Tarefa = () => {
  return (<>
    <div>

      <NavBar />

      <h1 className="text-3xl m-20"><Link href="/timer">Tarefa</Link></h1>

    </div >

  </>
  )
}
export default Tarefa