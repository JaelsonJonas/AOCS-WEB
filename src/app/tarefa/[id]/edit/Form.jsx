'use client'

import { updateTarefa } from "@/actions/tarefas"
import Button from "@/app/components/Button"
import TextInput from "@/app/components/TextInput"
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/20/solid"
import { redirect } from "next/navigation"
import { useState } from "react"
import toast from "react-hot-toast"

const Form = ({ tarefa }) => {

    const [tarefaEdit, setTarefaEdit] = useState(tarefa)

    const handleSubmit = async () => {
        const response = await updateTarefa(tarefaEdit);

        if (response.error) {
            toast.error(response.error)
            return
        }
        toast.success(response.ok)
        redirect("/tarefa")
        

    }

    const handleFieldChange = (field, value) => {

        setTarefaEdit({
            ...tarefaEdit,
            [field]: value
        })
    }

    return (
        <form action={handleSubmit}>

            <TextInput
                name="titulo"
                id="titulo"
                label="Titulo"
                placeholder="Digite o titulo da tarefa"
                value={tarefaEdit.titulo}
                onChange={e => handleFieldChange("titulo", e.target.value)}
            />
            <TextInput name="descricao" id="descricao" label="Descrição" placeholder="Digite o a descrição da tarefa" value={tarefaEdit.descricao}
                onChange={e => handleFieldChange("descricao", e.target.value)}
            />
            <TextInput name="data" type="date" id="data" label="Data" value={tarefaEdit.data}
                onChange={e => handleFieldChange("data", e.target.value)}
            />
            <TextInput name="duracao" id="duracao" type="text" label="Duração" placeholder="Informe a duraçáo (HH:mm:ss)" value={tarefaEdit.duracao}
                onChange={e => handleFieldChange("duracao", e.target.value)}

            />

            <div className="flex justify-around mt-10">

                <Button href="/" element="link" variante="vazadoVermelho" icon={<ArrowLeftIcon className="h-6 w-6" />}>Cancelar</Button>
                <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>Salvar</Button>

            </div>
        </form>

    )

}
export default Form