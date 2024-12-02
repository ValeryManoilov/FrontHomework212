import { Link } from "react-router-dom"
import styled from "styled-components"

const LinkList = styled.ul`
    font-size: 2em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    `

const HeaderLink = styled(Link)`
    text-decoration: none;
    list-style-type: none;
`


function Header()
{
    const username = window.localStorage.getItem("username")
    const email = window.localStorage.getItem("email")
    return(
        <header>
            <nav>
                <LinkList>
                    <HeaderLink to="/">Home</HeaderLink>
                    <HeaderLink to="/aboutus">About Us</HeaderLink>
                    <HeaderLink to="/contacts">Contacts</HeaderLink>
                    <HeaderLink to="/settings">Settings</HeaderLink>

                    <HeaderLink to={window.localStorage.getItem("isAuth") ? `/user/${username}/${email}` : "/auth"}>
                        {window.localStorage.getItem("isAuth") ? window.localStorage.getItem("username") : "Auth"}
                    </HeaderLink>
                </LinkList>
            </nav>
        </header>
    )
}

export default Header