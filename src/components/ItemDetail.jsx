import React, { Component } from 'react'
import { Button, TextField } from '@material-ui/core';


class ItemDetail extends Component {





    render() {
        const { myBook, handleAddTotal } = this.props
        return (
            <form onSubmit={(event) => { handleAddTotal(event, myBook) }} noValidate autoComplete="off">
                <p>{myBook.title}</p>
                <h4>$ {myBook.price}</h4>
                <TextField name="quantity" id="standard-basic" label="Quantity" />
                <Button type="submit" variant="contained" color="primary">
                    Add
                </Button>
            </form>
        )


    }
}


export default ItemDetail