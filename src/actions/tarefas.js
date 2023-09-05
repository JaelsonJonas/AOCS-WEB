"use server"

const create = async (formData) => {
    const url = "http://localhost:8080/api/tarefa"
    console.log(Object.fromEntries(formData))
    const opt = {

        method: "POST",
        body: JSON.stringify(Object.fromEntries(formData)),
        headers: {
            "Content-Type": "application/json"
        }
    }
    const response = await fetch(url, opt)
    if (response.status !== 201){
        return {error: "Erro ao cadastrar"}
    }
    return {ok: "Tarefa Cadastrada com sucesso!!"}
        
}
export default create


