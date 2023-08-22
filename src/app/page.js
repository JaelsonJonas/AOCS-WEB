import Link from "next/link"
import NavBar from "./components/NavBar"

const Home = () => {
  return (
    <div>

      <NavBar />
      <h1 className="text-3xl">Pagina inicial</h1>
      <div>
        <ul>
          <li><Link href="/timer">Tarefa01</Link></li>
          <li><Link href="/timer">Tarefa02</Link></li>
          <li><Link href="/timer">Tarefa03</Link></li>
        </ul>
      </div>



    </div >
  )
}
export default Home