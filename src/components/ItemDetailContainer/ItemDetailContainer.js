import {useState, useEffect} from 'react'

import ItemDetail from '../ItemDetail/ItemDetail'

import nft_1 from '../../media/nft_1.png'


const nftList={id:1, title:'The Bitcoin Pizza', price:'12.000', pictureUrl:nft_1, stock:10, initial:1, description:'El 18 de mayo de 2010, un programador llamado Laszlo Hanyecz publicó en el foro de Bitcoin que quería usar 10,000 Bitcoins (valorados en $ 40 en ese momento) para comprar dos grandes pizzas de Papa John.“Pagaré 10,000 Bitcoins por dos pizzas. Lo mejor serían dos pizzas grandes, así que me queda algo para mañana. Puedes hacer tus propias pizzas. Una vez que hayan terminado, puede entregarlos en mi casa o coordinar una empresa de entrega para que los entregue, pero quiero usar Bitcoin para pagarlos. De esta manera, no tengo que pedirlos o hacerlos yo mismo, como el servicio de habitaciones en un hotel, entregados directamente a mi puerta. Serás muy feliz. Si estás interesado, contáctame. Podemos discutirlo más a fondo. Puede ser cualquier tipo de pizza con cebollas, pimientos, salchichas, champiñones e incluso una extraña cubierta de pescado está bien “.'}


function getList() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(nftList),2000)
    })
}

const ItemDetailContainer = (props) => {

    const [listNFT, setListNFT] = useState([])

    useEffect(() => {
      const list = getList()
  
      list.then(list => {
        setListNFT(list)
      })
    }, [])

    return (

        <div className="container">
            
            <ItemDetail item={listNFT}/>

        </div>
    )
}

export default ItemDetailContainer