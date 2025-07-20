import React, { useState, useMemo } from 'react';
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'lenovo legion', value: 300 },
        { name: 'Sony ANC headset', value: 80},
        { name: 'genuine 12th century katana', value: 400},
        { name: 'asics shoes', value: 70}
    ]);

    // Your code starts here
    const totalValue = useMemo(() => {
        let result = 0;
        for(let i= 0; i<items.length; i++) {
            result += items[i].value;
        }
        return result;
    }, [items])
    // Your code ends here
    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
