import { useLocation, useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"

const PersonalAccountContent = styled.div`
    font-size: 2em;
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 10px;
    width: 40%;
    overflow: scroll;
    background-color: #90ce90;
    border: 3px solid green;
    padding: 10px;
`

const ExitButton = styled.button`
    padding: 10px;
    font-size: 2em;
    background-color: red;
`

const DataField = styled.p`
`

const PersonalAccountContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

function PersonalAccountPage()
{
    const navigate = useNavigate()

    function ExitFromAccount()
    {
        window.localStorage.removeItem("name")   
        window.localStorage.removeItem("email")   
        window.localStorage.removeItem("isAuth")
        
        navigate("/")

    }
    const {name, email} = useParams()

    const location = useLocation()

    return(
        <PersonalAccountContainer>
            <PersonalAccountContent>
                <DataField>Username: {name}</DataField>
                <DataField>Email: {email}</DataField>
                <DataField>Location: {location.pathname}</DataField>
            </PersonalAccountContent>
            <ExitButton onClick={ExitFromAccount}>Exit</ExitButton>
        </PersonalAccountContainer>
    )
}

export default PersonalAccountPage