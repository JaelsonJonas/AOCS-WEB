"use server"

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

const url = process.env.NEXT_PUBLIC_BASE_URL + "/tarefa"

const apiKey = process.env.NEXT_PUBLIC_TOKEN_KEY
const token = cookies().get(apiKey)

export const getTarefas = async () => {

    const auth = {
        headers: {
            "Authorization": `Bearer ${token.value}`
        }
    }
    const response = await fetch(url, auth, { next: { revalidate: 1800 } })

    if (response.status !== 200) throw new Error("não foi possivel carregar os dados das tarefas")

    return await response.json()
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

    revalidatePath("/tarefa")
    return { ok: "Tarefa Cadastrada com sucesso!!" }

}

export const getTarefa = async (id) => {
    const getUrlById = url + "/" + id

    const response = await fetch(getUrlById)

    const json = await response.json();

    if (!response.ok) {
        console.log(response.status)

        return { error: "Falha ao carregar a tarefa. " }

    }

    return json

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
    return { ok: "Tarefa alterada com sucesso" }

}

export const updateTarefa = async (tarefa) => {

    const updateUrl = url + "/" + tarefa.id

    const opt = {
        method: "PUT",
        body: JSON.stringify(tarefa),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(updateUrl, opt)

    if (!response.ok) {
        const mensagens = json?.reduce((str, erro) => str += ". " + erro.message, "")
        return { error: "Erro ao atualizar" + mensagens }
    }

    revalidatePath("/tarefa")
    return { ok: "Tarefa alterada com sucesso" }
}



