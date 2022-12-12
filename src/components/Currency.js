import React from "react";

function Currency({currency}) {
    return <tr>
        <td className="text-center">{currency.txt}</td>
        <td className="text-center text-danger">{currency.rate.toFixed(4)}</td>
        <td className="text-center">{currency.cc}</td>
</tr>
}

export default Currency;