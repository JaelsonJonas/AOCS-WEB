import { Skeleton } from "@/components/ui/skeleton"
import NavBar from "../components/NavBar"

const Loading = async () => {

    return (
        <div>
            <NavBar />
            <h1 className="text-3xl text-title flex justify-center my-10">Tarefas</h1>

            <div className="my-4">
                {Array(3).fill({}).map(() => {
                    return (
                        <main className="bg-blue-light mx-[500px] mt-10 p-7 rounded-2xl max-w-lg m-auto">
                            <div className="flex justify-between">
                                <div className="flex justify-start items-center mb-4 gap-2">
                                    <Skeleton className="h-5 w-32 bg-slate-500"></Skeleton>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <Skeleton className="h-5 w-10 bg-slate-500"></Skeleton>
                                <Skeleton className="h-5 w-16 bg-slate-500"></Skeleton>
                            </div>
                        </main>
                    )

                })}
            </div>
        </div >
    )

}
export default Loading