import Link from "next/link"
import {AcademicCapIcon} from "@heroicons/react/20/solid"

const Tarefa = ({ data }) => {
    return (
        <Link href="/timer">
            <main className="bg-nav mx-[500px] my-5 p-8 rounded-2xl">
                <div className="flex justify-start items-center mb-4">
                    <AcademicCapIcon className="h-6 w-6"/>
                    <h2 className="text-lg ml-4">{data.titulo}</h2>
                </div>
                <div className="flex justify-between">                
                    <span>{data.data}</span>
                    <span>{data.duracao}</span>
                </div>
            </main>
        </Link>
    )
}
export default Tarefa