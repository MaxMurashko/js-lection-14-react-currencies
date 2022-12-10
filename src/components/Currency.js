import React from "react";

function Currency({currency}) {
    return <tr>
        <td className="text-center">{currency.name}</td>
        <td className="text-center text-danger">{currency.rate}</td>
</tr>
}

export default Currency;