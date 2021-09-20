import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import ItemDetail from '../ItemDetail/ItemDetail'

//Importando la base de datos de NFT temporalmente
import nftDB from '../NftListDB/nftListDB'

const nftListFromDB=nftDB

const getList = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(nftListFromDB),2000)
    })
}

const ItemDetailContainer = (props) => {
    const {id} = useParams()
    const [listNFT, setListNFT] = useState(undefined)

    useEffect(() => {
      const list = getList()
  
      list.then(result => {
        const listNFT = result.find(item => item.id === id)
        setListNFT(listNFT)
      })
      return(() => {
          setListNFT(undefined)
      })
    }, [id])

console.log(listNFT)

    return (

        <div className="container">
            <div className="alert alert-primary" style={{margin:'10px 0px 10px 0px'}} role="alert">Detalle del NFT</div>
            <ItemDetail item={listNFT}/>

        </div>
    )
}

export default ItemDetailContainer