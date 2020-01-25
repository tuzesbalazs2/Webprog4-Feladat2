import React, { Component } from 'react'
import ReactTable from 'react-table-6'
import api from '../api'

import styled from 'styled-components'

import 'react-table-6/react-table.css'





const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #0000ff;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class Updatepost extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/posts/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}><b>Módosítás</b></Update>
    }
}

class Deletepost extends Component {
    deleteUser = event => {
        event.preventDefault()
        if (localStorage.jwtToken) {
        if (
            window.confirm(
                `Ki akarja törölni ezt a bejegyzést véglegesen?: ${this.props.id}`,
            )
        ) {
            api.deletePostById(this.props.id)
            window.location.reload()
        }
        }
        else{window.location.href = `/login`}
    }

    render() {
        return <Delete onClick={this.deleteUser}><b>Törlés</b></Delete>
    }
}

class postsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllPosts().then(posts => {
            this.setState({
                posts: posts.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { posts, isLoading } = this.state
        console.log('TCL: postsList -> render -> posts', posts)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Felhasználó',
                accessor: 'user_id',
                filterable: true,
            },
            {
                Header: 'Cím',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Szöveg',
                accessor: 'text',
                filterable: true,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <Deletepost id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <Updatepost id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!posts.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={posts}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                        previousText={"Előző oldal"}
                        nextText={"Következő oldal"}
                        loadingText={"Várjon---"}
                        noDataText={"Nincs bejegyzés"}
                        pageText={"Oldal"}
                        ofText={"ennyiből:"}
                        rowsText={"sor"}
                        pageJumpText={"ugrás erre az oldalra"}
                        rowsSelectorText={"sorok oldalanként"}
                    />
                )}
            </Wrapper>
        )
    }
}

export default postsList