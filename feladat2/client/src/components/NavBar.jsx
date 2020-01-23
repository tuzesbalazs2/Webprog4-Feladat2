import React, { Component } from 'react'
import styled from 'styled-components'

//import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container mx-0 flex-grow-1 mw-100',
})``

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark w-100',
})`
    margin-bottom: 20 px;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>

                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar