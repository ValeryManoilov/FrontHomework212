import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const AuthContent = styled.div`
    font-size: 8em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

const AuthForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 30px;
    background-color: #90ce90;
    border: 3px solid green;
    border-radius: 3px;
`

const SubmitButton = styled.button`
    padding: 5px 10px;
    width: 30%;
    background-color: orange;
    border: 1px solid black;
    border-radius: 5px;
`

const AuthInput = styled.input`
    padding-left: 5px;
    font-size: 16px;
`

const AuthTitle = styled.h1`
    padding: 0;
    margin: 0;
    font-size: 20px;
`

function AuthPage()
{
    const navigate = useNavigate()

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    function SubmitNavigate()
    {
        if (name != undefined)
        {
            navigate(`/user/${name}/${email}`)
            window.localStorage.setItem("username", name)
            window.localStorage.setItem("email", email)
            window.localStorage.setItem("isAuth", true)
        }
    }
    return(
        <AuthContent>
            <AuthForm onSubmit={SubmitNavigate}>
                <AuthTitle>Авторизируйтесь</AuthTitle>
                <AuthInput type="text" placeholder="Введите имя" onChange={(e) => setName(e.target.value)}/>
                <AuthInput type="email" placeholder="Введите почту" onChange={(e) => setEmail(e.target.value)}/>
                <SubmitButton>Submit</SubmitButton>
            </AuthForm>
        </AuthContent>
    )
}

export default AuthPage