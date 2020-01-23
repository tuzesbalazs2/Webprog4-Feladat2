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

class PostsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
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

    handleUpdatePost = async () => {
        const { id, user_id, title, text } = this.state
        const payload = { user_id, title, text }

        await api.updatePostById(id, payload).then(res => {
            window.alert(`Bejegyzés sikeresen módosítva.`)
            this.setState({
                user_id: '',
                title: '',
                text: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const post = await api.getPostById(id)

        this.setState({
            user_id: post.data.data.user_id,
            title: post.data.data.title,
            text: post.data.data.text,
        })
    }

    render() {
        const { user_id, title, text } = this.state
        return (
            <Wrapper>
                <Title>Bejegyzés módosítása</Title>

                <Label>Felhasználó: </Label>
                <InputText
                    type="text"
                    value={user_id}
                    onChange={this.handleChangeInputName}
                />

                <Label>Cím: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputName}
                />

                <Label>Szöveg: </Label>
                <InputText
                    type="text"
                    value={text}
                    onChange={this.handleChangeInputTime}
                />

                <Button onClick={this.handleUpdatePost}>Bejegyzés módosítása</Button>
                <CancelButton href={'/posts/list'}>Mégse</CancelButton>
            </Wrapper>
        )
    }
}

export default PostsUpdate