import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Portfólió oldal
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/posts/list" className="nav-link">
                                Bejegyzések
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/posts/create" className="nav-link">
                                Új bejegyzés
                            </Link>
                        </Item>
                                                <Item>
                            <Link to="/login" className="nav-link">
                                Bejelentkezés
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/register" className="nav-link">
                                Regisztráció
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links