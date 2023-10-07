
'use client'
import { AuthContext } from "@/context/AuthContext"
import { useContext } from "react"
import NavBar from "../components/NavBar"


const Home = () => {

  const { user } = useContext(AuthContext)

  return (
    <div>
      <NavBar />
      <h1 className="text-3xl text-title flex justify-center my-10">Bem vindo, {user?.nome}!</h1>
    </div >
  )
}
export default Home