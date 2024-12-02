import styled from "styled-components"

const NotFoundContent = styled.div`
    font-size: 16em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

function NotFound()
{
    return(
        <NotFoundContent> 
            404
        </NotFoundContent>
    )
}

export default NotFound