import './list.css'
import { Link } from 'react'
import { useState } from 'react'

function List(prop) {





    return (

        <div id='box'>
            <table>
                {prop.state.map((a) => {
                    return (
                        <tr ><td><button id="id" onClick={(event) => prop.handleEdit(a)}>{a.id}</button></td><td>{a.name}</td><td>{a.price}</td></tr>
                    )
                })}
            </table>
        </div>

    )

}

export default List