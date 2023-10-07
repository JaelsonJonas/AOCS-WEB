'use client'

import Logo from "@/images/Logo.svg"
import { ArrowLeftIcon, SparklesIcon } from "@heroicons/react/20/solid"
import Image from "next/image"
import { useState } from "react"
import toast from "react-hot-toast"
import Button from "../components/Button"
import TextInput from "../components/TextInput"
import { useRouter } from "next/navigation"

const Register = () => {

    const { push } = useRouter()
    const [formData, setFormData] = useState({
        nome: '',
        login: '',
        foto: '',
        senha: ''
    });

    const [fileInput, setFileInput] = useState(null);

    const handleFileInputChange = (e) => {
        const file = e.target.files[0];
        setFileInput(file);
    };

    const handleImage = async () => {
        if (!fileInput) {
            toast.error('Por favor, selecione uma foto.');
            return;
        }

        try {
            const formdata = new FormData();
            formdata.append('file', fileInput, fileInput.name);

            const requestOptions = {
                method: 'POST',
                body: formdata,
                redirect: 'follow'
            };
            const response = await fetch(process.env.NEXT_PUBLIC_BASE_URL + '/image/upload', requestOptions);
            const result = await response.json();

            return result.image;
        } catch (error) {
            console.error('Erro ao enviar a foto:', error);
            return ''; // Retorne uma string vazia em caso de erro
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = await handleImage();

        const json = {
            nome: formData.nome,
            descricao: formData.descricao,
            foto: url,
            categoria: formData.categoria,
            tempoAtuacao: formData.tempoAtuacao
        };
        console.log(JSON.stringify(json));
        push("/login")
    };


    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };


    return (
        <main className="bg-white mx-[500px] mt-10 p-8 rounded-2xl max-w-lg m-auto">

            <div className="flex justify-center items-center">
                <Image src={Logo} alt="Logo da AOCS" className="h-60 w-60" />
            </div>
            <form onSubmit={handleSubmit}>

                <TextInput name="nome" id="name" label="Nome" placeholder="Digite o seu nome" value={formData.nome} onChange={e => handleInputChange("nome", e.target.value)} />
                <TextInput name="login" id="login" label="Login" placeholder="digite seu login" value={formData.login} onChange={e => handleInputChange("login", e.target.value)} />
                <TextInput name="foto" id="foto" label="Foto" placeholder="Insira sua foto" type="file" onChange={handleFileInputChange} />
                <TextInput name="senha" id="senha" label="Senha" placeholder="digite sua senha" type="password" value={formData.senha} onChange={e => handleInputChange("senha", e.target.value)} />

                <div className="flex justify-around mt-10">

                    <Button
                        element="button" icon={<SparklesIcon className="h-6 w-6" />}>Cadastrar</Button>

                    <Button href="/login" element="link" icon={<ArrowLeftIcon className="h-6 w-6" />}>Cancelar</Button>
                </div>
            </form>
        </main>
    )
}
export default Register