import React from 'react';


const search = (props) => {

    const handleChange = (e) => {
        props.handleSearch(e.target.value)
    }

    return (
        <div style={{ width: "80%", margin: "10px 10vw 50px 45vw" }} className="input-group">
            <div className="form-outline">
                <input type="search" onChange={handleChange} id="form1" placeholder="Search" className="form-control" />
            </div>
        </div>
    );
}


export default search
