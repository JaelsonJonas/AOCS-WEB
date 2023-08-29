import NavBar from "./components/NavBar"
import Tarefa from "./components/Tarefa"

const getTarefas = async () => {
  const url = "http://localhost:8080/api/tarefa"
  const response = await fetch(url, { next: { revalidate: 0 } })
  return response.json()
}


const Home = async () => {

  const data = await getTarefas()

  console.log(data.content)

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