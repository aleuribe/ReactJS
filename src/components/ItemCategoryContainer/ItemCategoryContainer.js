import {useState, useEffect} from 'react'
import { useParams } from "react-router-dom";

import ItemList from '../ItemList/ItemList';

//Importando la base de datos de NFT temporalmente
import nftDB from '../NftListDB/nftListDB'

const nftListFromDB=nftDB

const getList = () => {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(nftListFromDB),2000)
    })
}

const ItemCategoryContainer = (props) => {
    const {category} = useParams()
    const [listNFT, setListNFT] = useState(undefined)

    useEffect(() => {
      const list = getList()
  
      list.then(result => {
        const listNFT = result.filter(item => item.category.toLowerCase() === category)
        setListNFT(listNFT)
      })
      return(() => {
          setListNFT(undefined)
      })
    }, [category])

    console.log(listNFT)


    return (

        <div className="container">
            <div className="alert alert-primary" style={{margin:'10px 0px 10px 0px'}} role="alert">Explorando NFTs de {category}</div>
            <ItemList items={listNFT}/>
        </div>
    )
}

export default ItemCategoryContainer