"use client"


import Button from "../components/Button"
import NavBar from "../components/NavBar"
import TextInput from "../components/TextInput"
import { ArrowLeftIcon } from "@heroicons/react/20/solid"
import { CheckIcon } from "@heroicons/react/20/solid"
import { useState } from "react"
import { redirect } from 'next/navigation'
import { create } from "@/actions/tarefas"
const Tarefa = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = async (formData) => {
    const response = await create(formData)
    if (response.error) {
      setMessage(response.error)
      return
    }
    redirect("/")
  }

  return (
    <>
      <NavBar />
      <main className="bg-white mx-[500px] mt-10 p-8 rounded-2xl max-w-lg m-auto">
        <h2 className="text-3xl text-title flex justify-center mb-5">Cadastrar Tarefa</h2>
        <form action={handleSubmit}>

          <TextInput name="titulo" id="titulo" label="Titulo" placeholder="Digite o titulo da tarefa" />
          <TextInput name="descricao" id="descricao" label="Descrição" placeholder="Digite o a descrição da tarefa" />
          <TextInput name="data" type="date" id="data" label="Data" />
          <TextInput name="duracao" id="duracao" type="text" label="Duração" placeholder="Informe a duraçáo (HH:mm:ss)" />

          <div className="flex justify-around mt-10">

            <Button href="/" element="link" variante="vazadoVermelho" icon={<ArrowLeftIcon className="h-6 w-6" />}>Cancelar</Button>
            <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>Cadastrar</Button>

          </div>
          <p>{message}</p>
        </form>
      </main>

    </>
  )
}
export default Tarefa