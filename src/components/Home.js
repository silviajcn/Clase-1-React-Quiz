import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ContainerStyle, DivForm } from '../style/styles';

export default class Home extends Component {
    render() {
        return (
            <DivForm>
                <ContainerStyle>
                    <h2>Home</h2>
                    <p>{
                        `Realiza este cuestionario para descrubir que tan friki eres, encontrarás preguntas de video juegos y de peliculas que un friki de corazón ha visto más de 2 veces.`
                    }
                    </p>
                    <Image src="https://www.pngkit.com/png/full/192-1923288_octocat-github-logo-transparent-octdrey-catburn.png" rounded width="250px" style={{ textAlign: "center" }} />
                    <Link to="/question" className="nav-link">Comienza el formulario aqui</Link>
                </ContainerStyle>
            </DivForm>
        )
    }
}
