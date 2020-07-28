import React from 'react';
import PageDefault from '../../../components/PageDefault'
import { Link } from 'react-router-dom';






function CadastroVideo() {
    return(
        <PageDefault>
            <h1>
                Pagina cadastro Video
            </h1>
            <Link to ="/cadastro/categoria">
                Cadastro Categoria
            </Link>
        </PageDefault>

    )
}

export default  CadastroVideo;