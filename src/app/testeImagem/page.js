'use client'

import { useState } from 'react';
import toast from 'react-hot-toast';
import TextInput from '@/app/components/TextInput';
import Button from '@/app/components/Button';

const MyForm = () => {
    const [formData, setFormData] = useState({
        nome: '',
        descricao: '',
        foto: '',
        categoria: '',
        tempoAtuacao: ''
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
    };

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <TextInput type="text" id="nome" name="nome" value={formData.nome} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="descricao">Descrição:</label>
                <TextInput type="text" id="descricao" name="descricao" value={formData.descricao} onChange={handleInputChange} />
            </div>
            <div>
                <label htmlFor="foto">Foto:</label>
                <TextInput type="file" id="foto" onChange={handleFileInputChange} />
            </div>
            <div>
                <label htmlFor="categorias">Categoria:</label>
                <select id="categorias" name="categoria" value={formData.categoria} onChange={handleInputChange}>
                    <option value="" disabled>Selecione uma categoria</option>
                    <option value="LOUCURAS_ABSTRATAS">LOUCURAS ABSTRATAS</option>
                    <option value="MUNDO_SURREAL">MUNDO SURREAL</option>
                    <option value="CORES_VIBRANTES">CORES VIBRANTES</option>
                    <option value="EXPRESSOES_FANTASTICAS">EXPRESSÕES FANTÁSTICAS</option>
                    <option value="FICCAO_CIENTIFICA_VISUAL">FICÇÃO CIENTÍFICA VISUAL</option>
                    <option value="SONHOS_EM_TINTA">SONHOS EM TINTA</option>
                    <option value="IMAGINACAO_DESENFREADA">IMAGINAÇÃO DESENFREADA</option>
                    <option value="DIVERSAO_CRIATIVA">DIVERSÃO CRIATIVA</option>
                    <option value="REALIDADE_ALTERNATIVA">REALIDADE ALTERNATIVA</option>
                    <option value="CAOS_ARTISTICO">CAOS ARTÍSTICO</option>
                </select>
            </div>
            <div>
                <label htmlFor="tempoAtuacao">Tempo de Atuação:</label>
                <TextInput type="text" id="tempoAtuacao" name="tempoAtuacao" value={formData.tempoAtuacao} onChange={handleInputChange} />
            </div>

            <Button type="submit">Enviar</Button>
        </form>
    );
};

export default MyForm;
