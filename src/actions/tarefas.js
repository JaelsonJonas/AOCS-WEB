"use server"

import { revalidatePath } from "next/cache"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/tarefa"

export const getTarefas = async () => {
    const response = await fetch(url, { next: { revalidate: 1800 } })
    return response.json()
}

export const create = async (formData) => {
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
        const mensagens = json?.reduce((str, erro) => str += ". " + erro.message, "")
        return { error: "Erro ao cadastrar" + mensagens }
    }
    console.log(response.status)

    revalidatePath("/")
    return { ok: "Tarefa Cadastrada com sucesso!!" }

}




export const deleteTarefa = async (id) => {
    const deleteUrl = url + "/" + id

    const response = await fetch(deleteUrl, {
        method: "DELETE"
    })

    if (!response.ok) {
        console.log(response.status)
        const json = await response.json();
        return { error: "Falha ao apagar a tarefa. " }

    }
    revalidatePath("/tarefa")

}



