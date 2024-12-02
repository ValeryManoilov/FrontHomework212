import styled from "styled-components"

const ContactsContent = styled.div`
    font-size: 8em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


function ContactsPage()
{
    return(
        <ContactsContent>
            Contacts
        </ContactsContent>
    )
}

export default ContactsPage