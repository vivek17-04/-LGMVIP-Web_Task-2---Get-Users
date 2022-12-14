import React from 'react'

function Data(props) {
    return (
        <>
            <ul>
                <div className="box">
                    {(props.user).map(({ id, first_name, last_name, email, avatar }) => {
                        return (
                            <li key={id} >
                                Employee Id : {id}<br />
                                First Name : {first_name}<br />
                                Last Name : {last_name}<br />
                                Email : {email}<br />
                                <img src={avatar} alt="img" />
                            </li>
                        )
                    })}
                </div>
            </ul>
        </>
    )
}

export default Data