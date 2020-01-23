import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class PostsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user_id: '',
            title: '',
            text: '',
        }
    }

    handleChangeInputUser_id = async event => {
        const user_id = event.target.value
        this.setState({ user_id })
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputText = async event => {
        const text = event.target.value
        this.setState({ text })
    }

    handleIncludePost = async () => {
        const { user_id, title, text } = this.state
        const payload = { user_id, title, text }

        await api.insertPost(payload).then(res => {
            window.alert(`Bejegyzés sikeresen hozzáadva.`)
            this.setState({
                user_id: '',
                title: '',
                text: '',
            })
        })
    }

    render() {
        const { user_id, title, text } = this.state
        return (
            <Wrapper>
                <Title>Bejegyzés hozzáadása</Title>

                <Label>Felhasználó: </Label>
                <InputText
                    type="text"
                    value={user_id}
                    onChange={this.handleChangeInputUser_id}
                />

                <Label>Cím: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Szöveg: </Label>
                <InputText
                    type="text"
                    value={text}
                    onChange={this.handleChangeInputText}
                />

                <Button onClick={this.handleIncludePost}>Bejegyzés hozzáadása</Button>
                <CancelButton href={'/Posts/list'}>Mégse</CancelButton>
            </Wrapper>
        )
    }
}

export default PostsInsert