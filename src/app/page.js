import { getTarefas } from "@/actions/tarefas"
import NavBar from "./components/NavBar"
import Tarefa from "./components/Tarefa"


const Home = async () => {

  const data = await getTarefas()

  return (
    <div>
      <NavBar />
      <h1 className="text-3xl text-title flex justify-center my-10">Tarefas</h1>
      <div className="my-4">
        {data.content.map(tarefa => <Tarefa data={tarefa} />)}
      </div>
    </div >
  )
}
export default Home