import { list } from "postcss"

const Home = () => {
  return (<>
    <nav className="p-3 bg-nav">
      <ul className="flex gap-44 items-center">
        <li><a href="#">Logo</a></li>
        <li><a href="#">Criar tarefa</a></li>
        <li className="h-16 w-16 rounded-full overflow-hidden"><a href="#"><img src="https://i.pravatar.cc/75
" alt="Imgaem do usuario" /></a></li>
      </ul>
    </nav>
  </>

  )
}
export default Home