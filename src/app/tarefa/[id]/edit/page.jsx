import NavBar from "@/app/components/NavBar";
import { getTarefa } from "@/actions/tarefas";
import FormEdit from "./Form";
const TarefaEdit = async ({params}) => {

    const tarefa = await getTarefa(params.id);

    return (
        <>
            <NavBar />
            <main className="bg-white mx-[500px] mt-10 p-8 rounded-2xl max-w-lg m-auto">
                <h2 className="text-3xl text-title flex justify-center mb-5">Editar Tarefa</h2>

                <FormEdit tarefa={tarefa} />
            </main>

        </>
    )
}
export default TarefaEdit