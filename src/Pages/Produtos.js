import { useState, useEffect } from 'react';
import Produto from '../Components/Produto';
import Menu_categoria from '../Components/Produto/Menu';
import { Container, Row } from 'react-bootstrap';

export default function Produtos() {
    const [produtos, setProdutos] = useState([]);

    useEffect(async () => {
        const resposta = await fetch("http://localhost/FullstackEletro/php/api/produtos.php");
        const dados = await resposta.json()
        setProdutos(dados);
    }, []);

    return (

        <Container>
            <h1>Produtos</h1>
            <hr />
            <Menu_categoria />
            <br />

            <Row>
                {produtos && produtos.map(item => <Produto imagem={item.imagem} descricao={item.descricao}  preco={item.preco} preco_final={item.preco_final} categoria={item.geladeira} />)}
            </Row>

        </Container>

    );
}

