import Link from "next/link"

const NotFound = () => {
    return (<>

        <h1 className="text-3xl m-20 flex-col g-2">404 - Pagina não encontrada</h1>
        <Link href="/">voltar para a Home</Link>
    </>)
}
export default NotFound