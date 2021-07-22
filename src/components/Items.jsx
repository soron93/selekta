import React, { Component } from 'react'
import AddForm from './AddForm'
import ItemDetail from './ItemDetail'

class Items extends Component {

    state = {
        showForm: false
    }

    handleClick = () => {
        this.setState({
            showForm: true
        })
    }

    handleAddBook = (event) => {
        event.preventDefault()



        this.setState({
            showForm: false
        })

        let newBook = {
            title: event.target.title.value,
            price: event.target.price.value
        }
        this.props.onAddNewBook(newBook)

    }



    componentDidMount() {
        console.log('Item was Mounted')
    }

    componentDidUpdate() {
        console.log('Item was updated')
    }



    render() {
        console.log('Item was rendered')
        // destructure your books here
        const { books, handleAddTotal } = this.props
        const { showForm } = this.state

        return (
            <div>
                List

                {/* condintional rendering with ternaries */}

                {

                    showForm ? <AddForm onAddBook={this.handleAddBook} /> : <button onClick={this.handleClick}>Show Form</button>


                }


                {
                    books.map((book, i) => {
                        return <ItemDetail
                            key={i}
                            myBook={book}
                            handleAddTotal={handleAddTotal}

                        />
                    })
                }
            </div>
        )
    }
}

export default Items