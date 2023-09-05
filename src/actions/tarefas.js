"use server"

import { revalidatePath } from "next/cache"

const create = async (formData) => {
    const url = "http://localhost:8080/api/tarefa"
    const opt = {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(url, opt)
    if (response.status !== 201) {
        console.log(response.status)
        const json = await response.json();
        const mensagens = json.reduce((str, erro) => str +=  erro.field + " - " + erro.message , "")
        return { error: "Erro ao cadastrar" + mensagens }
    }
    console.log(response.status)

    revalidatePath("/")
    return { ok: "Tarefa Cadastrada com sucesso!!" }

}
export default create


