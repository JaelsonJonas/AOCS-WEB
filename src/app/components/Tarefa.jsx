import { AcademicCapIcon } from "@heroicons/react/20/solid"
import Link from "next/link"
import DropTask from "./DropTask"

const Task = ({ data }) => {
    return (
        <main className="bg-white mx-[500px] mt-10 p-7 rounded-2xl max-w-lg m-auto">
            <div className="flex justify-between">
                <div className="flex justify-start items-center mb-4">
                    <AcademicCapIcon className="h-5 w-5" />
                    <Link href="/timer"><span className="text-lg ml-4">{data.titulo}</span></Link>
                </div>
                <div>
                    <DropTask tarefa={data} />
                </div>
            </div>
            <div className="flex justify-between">
                <span>{data.data}</span>
                <span>{data.duracao}</span>
            </div>
        </main>
    )
}
export default Task