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
        calculateTotal();
    },[shopingCartList])


    //calculate the total of the basket
    const calculateTotal = () => {
        let newTotal = 0;

        shopingCartList.map((item) => {
            newTotal = newTotal +  (item.price * item.amount);
        })

        setTotal(newTotal);
    }


    // function that add new item in shopping basket
    const handdleNewItem = (id, name, price, image, colors, versand) => {
        const newObj = {
            id: id,
            name: name,
            price: parseFloat (price),
            image: image,
            amount: 1,
            colors: colors,
            versand: versand, 
            totalItem: function() {
                return this.price * this.amount;
            }
        }
        setShopingCartList(oldArray => [...oldArray, newObj]);
    }

    // function that remove new item in shopping basket
    const handdleRemoveItem = (removeID) => {
        setShopingCartList(oldArray => {
            return oldArray.filter(elm => elm.id !== removeID)
        })
    }

    // function that edit item in shopping basket
    const editColor = (id, newColor) => {
        setShopingCartList(oldArray => {
            return oldArray.map(item => {
              if (item.id === id) {
                return { ...item, color: newColor };
              }
              return item;
            });
          });
    };
    const editAmount = (id, newAmount) => {
        setShopingCartList(oldArray => {
            return oldArray.map(item => {
              if (item.id === id) {
                return { ...item, amount: newAmount };
              }
              return item;
            });
        });
        calculateTotal();
    }

    return (
        <ShopingCartContext.Provider value={{shopingCartList, handdleNewItem, total, handdleRemoveItem, setShopingCartList, editColor, editAmount}}>{children}</ShopingCartContext.Provider>
    )
}

export default ShopingCartContext;