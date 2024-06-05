import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EditFilme() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState({
        titulo: '',
        diretor: '',
        anoLancamento: ''
    });

    useEffect(() => {
        const fetchFilme = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/filmes/${id}`);
                setFilme(response.data);
            } catch (error) {
                console.error('Error fetching filme:', error);
            }
        };

        fetchFilme();
    }, [id]);

    function handleChange(event) {
        const { name, value } = event.target;
        setFilme(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(event) {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:8080/filmes/${id}`, filme);
            // Redirecionar para a página inicial ou exibir uma mensagem de sucesso
            navigate('/');
        } catch (error) {
            console.error('Error updating filme:', error);
        }
    }

    return (
        <div>
            <h2>Editar Filme</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="titulo">Título:</label>
                    <input
                        type="text"
                        id="titulo"
                        name="titulo"
                        value={filme.titulo}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="diretor">Diretor:</label>
                    <input
                        type="text"
                        id="diretor"
                        name="diretor"
                        value={filme.diretor}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="anoLancamento">Ano de Lançamento:</label>
                    <input
                        type="number"
                        id="anoLancamento"
                        name="anoLancamento"
                        value={filme.anoLancamento}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Salvar</button>
            </form>
        </div>
    );
}

export default EditFilme;
