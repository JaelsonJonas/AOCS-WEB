import { create } from "@/actions/tarefas"
import { ArrowLeftIcon, CheckIcon } from "@heroicons/react/20/solid"
import { redirect } from 'next/navigation'
import NavBar from "@/app/components/NavBar"
import Button from "@/app/components/Button"
import TextInput from "@/app/components/TextInput"
const TarefaEdit = () => {

    const handleSubmit = async (formData) => {
        const response = await create(formData)
        if (response.error) {
            setMessage(response.error)
            return
        }
        redirect("/tarefa")
    }

    return (
        <>
            <NavBar />
            <main className="bg-white mx-[500px] mt-10 p-8 rounded-2xl max-w-lg m-auto">
                <h2 className="text-3xl text-title flex justify-center mb-5">Editar Tarefa</h2>
                <form action="">

                    <TextInput name="titulo" id="titulo" label="Titulo" placeholder="Digite o titulo da tarefa" />
                    <TextInput name="descricao" id="descricao" label="Descrição" placeholder="Digite o a descrição da tarefa" />
                    <TextInput name="data" type="date" id="data" label="Data" />
                    <TextInput name="duracao" id="duracao" type="text" label="Duração" placeholder="Informe a duraçáo (HH:mm:ss)" />

                    <div className="flex justify-around mt-10">

                        <Button href="/" element="link" variante="vazadoVermelho" icon={<ArrowLeftIcon className="h-6 w-6" />}>Cancelar</Button>
                        <Button element="button" icon={<CheckIcon className="h-6 w-6" />}>Cadastrar</Button>

                    </div>
                </form>
            </main>

        </>
    )
}
export default TarefaEdit