import React, { createContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider ({children}) {
    const [shopItemsList, setShopItemsList] = useState([
        {
            name: "Giovanni's Messer",
            description: 'Das Messer in der Hand halten, mit der man arbeitet. Die messerklinge in die Ringe einschieben; bitte darauf achten, dass die Spirale immer nach oben zeight, d.h., oberhalb des Messerklinge ( auch für Linkshänder ) und die Spirale in die gewünschte Dicke verstellen.',
            price: 9.99,
            image: require('../images/shop/messer.webp'),
            video: '../videos/messerVideo.mp4',
            galery: [
                '/images/shop/messerGalery/1.webp',
                '/images/shop/messerGalery/2.webp',
                '/images/shop/messerGalery/3.webp',
                '/images/shop/messerGalery/4.webp',
            ],
            id: 1001

        },
        {
            name: "Giovani's Saftpresse",
            description: 'Den Griff auf die Spirale aufsetzen und die Spitze in der Mitte vom Gemüse oder Obst stecken. Die Spirale in Drehrichtung bis zum Austritt aus dem Gemüse/der Frucht, drücken und gleichzeitig drehen. Nach dem Austritt der Spiralringe den Griff entfernen und die Spirale herausziehen. nun die geformten Spiralen aus dem Gemüse/der Frucht im/gegen den Uhrzeigersinn herausdrehen. (bitte nicht ziehen, sondern immer drehen).',
            price: 4.99,
            image: require('../images/shop/presser.webp'),
            video: '../videos/saftpresserVideo.mp4',
            galery: [
                '/images/shop/presseGalery/1.webp',
                '/images/shop/presseGalery/2.webp',
                '/images/shop/presseGalery/3.webp',
                '/images/shop/presseGalery/4.webp',
            ],
            id: 1002
        },
        {
            name: "Giovanni's Spirale",
            description: ' Die Frucht mit der Blüte nach oben senkrecht halten. Die gezahnte Schneide hin- und herbewegen und so die Schale an der Blüte durchschneiden. So lange hin- und herbewegen, bis das Gewinde die Frucht erreicht hat. Jetzt das Gerät einschrauben, bis der obere Rand des Gewindes mit der Frucht abschließt. Ringsherum auf die Frucht drücken, der Saft steigt in den Behälter und lässt sich bei Bedarf ausgießen,',
            price: 9.99,
            image: require('../images/shop/spiralle.webp'),
            video: '../videos/spiralleVideo.mp4',
            galery: [
                '/images/shop/spiraleGalery/1.webp',
                '/images/shop/spiraleGalery/2.webp',
                '/images/shop/spiraleGalery/3.webp',
                '/images/shop/spiraleGalery/4.webp',
            ],
            id: 1003
        },
    ]);
    const [offersList, setOffersList] = useState([
        {
            name: 'All around Packet',
            image: require('../images/shop/set.jpg'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque tortor.',
            price: 19.99,
            contains: shopItemsList,
            id: 2001
        }
    ])

    return (
        <ShopContext.Provider value={{shopItemsList, offersList}}>{children}</ShopContext.Provider>
    )
}

export default ShopContext;