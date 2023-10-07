'use server'
import { cookies } from 'next/headers'

const apiKey = process.env.NEXT_PUBLIC_TOKEN_KEY

const urlLogin = process.env.NEXT_PUBLIC_BASE_URL + "/login"

export const apiLogin = async (credenciais) => {
    const options = {
        method: "POST",
        body: JSON.stringify(credenciais),
        headers: {
            "Content-Type": "application/json"
        }
    }

    const response = await fetch(urlLogin, options)

    if (response.status !== 200) return { error: "Usuario ou senha invalidas" }

    const json = await response.json()

    console.log(json)

    cookies().set(apiKey, json.token, {
        maxAge: 60 * 60
    })

    return json
}

export const apiLogout = async () => {
    cookies().delete(apiKey)
}