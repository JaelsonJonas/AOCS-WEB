'use client'

import { CheckIcon } from "@heroicons/react/20/solid"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import Image from "next/image"
import Logo from "@/images/Logo.svg"
import { useForm } from "react-hook-form"


const Login = () => {
    const { register, handleSubmit } = useForm()
    const onSubmit = (data) => console.log(data)
    return (
        <>
            <main className="bg-white mx-[500px] mt-10 p-8 rounded-2xl max-w-lg m-auto">

                <div className="flex justify-center items-center">
                    <Image src={Logo} alt="Logo da AOCS" className="h-60 w-60" />
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <TextInput register={register} name="login" id="login" label="Login" placeholder="Digite o seu login" />
                    <TextInput register={register} name="password" id="password" label="Senha" placeholder="digite sua senha" type="password" />

                    <div className="flex justify-around mt-10">

                        <Button
                            element="button" icon={<CheckIcon className="h-6 w-6" />}>Entrar</Button>

                    </div>
                </form>
            </main>
        </>
    )
}
export default Login