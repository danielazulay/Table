import { useState } from 'react'
import List from '../list/List'
import './home.css'

function Home() {

    let [product, setProduct] = useState({
        id: '',
        name: '',
        price: '',

    })

    let [state, setState] = useState([])

    let [search, setSearch] = useState({ search: '' })


    function handelChange(event) {

        setProduct({ ...product, [event.currentTarget.name]: event.currentTarget.value })
    }

    function handleSearch(event) {
        event.preventDefault()
        setSearch({ [event.currentTarget.name]: event.currentTarget.value })
    }

    function handleSubmit(event) {
        event.preventDefault()
        console.log(search)
        let find = false
        let index
        state.map((a, i) => {
            if (product.id === a.id) {
                find = true
                index = i
            }
        })
        if (find) {
            let arr = [...state]
            arr.splice(index, 1, product)
            setState([...arr])
        } else {
            setState([...state, product])
        }


    }

    function handleEdit(a) {

        setProduct({ ...a })

    }



    return (
        <div id="main">
            <h3> New Products</h3>
            <form onSubmit={handleSubmit}>
                <lable>Id</lable><br />
                <input type='string' name='id' value={product.id} onChange={handelChange} /><br />
                <lable>Name</lable><br />
                <input type='string' name='name' value={product.name} onChange={handelChange} /><br />
                <lable>Price</lable><br />
                <input type='string' name='price' value={product.price} onChange={handelChange} /><br />
                <button type='submit'>salvar</button>
            </form>

            <form id='search'>
                <lable className="label">Search :</lable><br />
                <input type='string' name='search' value={search.search} onChange={handleSearch} /><br />
            </form>
            <>
                {search.search !== '' ? <ul>{state.filter(a => a.name.includes(search.search)).map(b => (

                    <li>
                        {b.name} : {b.price}
                    </li>


                ))}</ul> : <p></p>}
            </>
            <List state={state} handleEdit={handleEdit} />
        </div>
    )


}

export default Home