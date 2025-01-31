import styled from "styled-components";

import { Link } from 'react-router-dom';


export const Loading = styled.div` //Foi passado aqui para cima para ser carregado primeiro por ser o cabeçalho
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 20px rgba(0,0,0, 0.2);
    padding: 30px;
    margin: 80px auto; /*Auto nas laterais vai deixar sempre centralizado*/  
`;

export const Owner = styled.header`
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
        width: 150px;
        border-radius: 20%;
        margin: 20px 0;
    }

    h1{
        font-size: 30px;
        color: #0d2636;
    }

    p{
        margin-top: 5px;
        font-size: 15px;
        color: #000;
        text-align: center;
        line-height: 1.4;
        max-width: 400px;
    }

`;

/*
export const BackButton =styled.button`//Poderia importar diretamente dentro de "Container" como <a>, mas para praticar será importadop Link

`;
*/export const BackButton =styled( Link )`
    border: 0;
    outline: 0;
    background: transparent; 
    // Já foi dado margin-top em "Container" padding: 30px;
`;

export const IssuesList =styled.ul`
    margin-top: 30px;
    padding-top: 30px;
    border-top: 1px solid #eee;
    list-style: none;

    li{
        display: flex;
        padding: 15px 10px
    }

    & + li{ //Vai aplicar somente depois do primeiro
        margin-top: 12px;
    }

    img{
        width:45px;
        height: 45px;
        border-radius: 50%;
        border: 2px solid #0d2636;
    }

    div{
        flex: 1;
        margin-left: 12px;

        p{
            margin-top: 10px;
            font-size: 12px;
            color: #000;
        }
    }

    strong{
        font-size: 15px;
        
        a{
            text-decoration: none;
            color: #222;
            transform: .5s;            

            &:hover{
                color: #071db0;
            }
        }
        span{
            background: #222;
            color: #fff;
            border-radius: 4px;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 7px;
            margin-left: 10px;
        }
    }
    
`;

export const Pagination =styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    button{
        background: #FFD700;        
        outline: 0;
        border: 0;
        border-radius: 5px;             
        padding: 5px 10px;  
        
        // Botão "Anterior" será desabilitado quando <2 
        &:disabled{
            cursor: not-allowed;
            opacity: 0.5;
        }
    }
`;

export const FilterList=styled.div`
    margin: 15px 0;

    button{
        outline: 0;
        border: 0;
        border-radius: 5px;             
        padding: 5px 10px; 
        margin: 0 3px;

        //Estilizar cores do botão
        &:nth-child( ${ props => props.active + 1 }){
            background: #FFD700;
        }
    }
`;