import { getTarefas } from "@/actions/tarefas"
import NavBar from "./components/NavBar"
import Tarefa from "./components/Tarefa"


const Home = () => {


  return (
    <div>
      <NavBar />
      <h1 className="text-3xl text-title flex justify-center my-10">Home</h1>
    </div >
  )
}
export default Home