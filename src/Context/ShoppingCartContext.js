import React, { createContext, useState, useEffect } from "react";

const ShopingCartContext = createContext();

export function ShoppingCardProvider ({children}) {
    const [total, setTotal] = useState(0.00)
    const [shopingCartList, setShopingCartList] = useState([   
    ]);

    //when the page first loads, the data from the local storange is beeing reasigned to the list
    useEffect(() => {
        const data = window.localStorage.getItem('storangeShopingCart');
        if(data !== null) setShopingCartList(JSON.parse(data));
    }, []);
    

    //save the items in the local storenge so that they don't get lost when the page is beeing reloded
    useEffect(() => {
        window.localStorage.setItem('storangeShopingCart', JSON.stringify(shopingCartList));
    }, [shopingCartList]);

    //this hook has to calculate the total of the list if the list is beeing changed
    useEffect(() => {
        let newTotal = 0;

        shopingCartList.map((item) => {
            newTotal = newTotal +  item.price;
        })

        setTotal(newTotal);
    },[shopingCartList])

    const handdleNewItem = (name, price, image, color) => {
        const newObj = {
            id: Math.random() * 1000,
            name: name,
            price: price,
            image: image,
            amount: 1,
            color: color
        }
        setShopingCartList(oldArray => [...oldArray, newObj]);
    }

    const handdleRemoveItem = (removeID) => {
        setShopingCartList(oldArray => {
            return oldArray.filter(elm => elm.id !== removeID)
        })
    }

    return (
        <ShopingCartContext.Provider value={{shopingCartList, handdleNewItem, total, handdleRemoveItem, setShopingCartList}}>{children}</ShopingCartContext.Provider>
    )
}

export default ShopingCartContext;