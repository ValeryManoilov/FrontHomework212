import styled from "styled-components"

const SettingsContent = styled.div`
    font-size: 8em;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`


function SettingsPage()
{
    return(
        <SettingsContent>
            Settings
        </SettingsContent>
    )
}

export default SettingsPage