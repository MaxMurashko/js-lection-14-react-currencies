import React, { useEffect, useState } from "react";
import Currency from "./Currency";
import {Table} from 'react-bootstrap';
import SearchByName from "./SearchByName"; 

function Currencies () {
    const [currencies , setCurrencies] = useState([]);
    const [filteredCurrencies, setFilteredCurrencies] = useState([]);
    const [searchValue, setSearchValue] = useState([]);

    useEffect(() => {
        fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=20221208&json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCurrencies(data)
        });
    }, []);
    
    function searchByNameOrCode(name){
        setSearchValue(name); 
        const result = currencies.filter(currency => currency.txt.toLowerCase().trim().includes(name) || currency.cc.toLowerCase().trim().includes(name));
        setFilteredCurrencies(result);
    }

    return <div>
    <SearchByName searchByName = {searchByNameOrCode} />
    
    <Table striped bordered hover>
        <thead className="text-center">
            <tr>
                <th className="w-50">
                    Currency name
                </th>
                <th>
                    Exchange rate
                </th>
                <th>Currency code</th>
            </tr>
        </thead>
        <tbody>
            {(searchValue.length ? filteredCurrencies : currencies).map(currency => <Currency 
                currency = {currency} 
                key = {currency.r030} />)}
        </tbody>
    </Table></div>
}

export default Currencies