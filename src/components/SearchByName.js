import React from "react";
import {FormControl} from "react-bootstrap";

function SearchByName({searchByName}) {
    return <FormControl className="mb-3"
        placeholder="Search"
        aria-label="Serch"
        aria-describedby="basic-addon2"
        onKeyUp={e => searchByName(e.currentTarget.value.trim().toLowerCase())}
    />
} 

export default SearchByName