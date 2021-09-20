import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'
import WaitIndicator from '../WaitIndicator/WaitIndicator.js'

//Importando la base de datos de NFT temporalmente
import nftDB from '../NftListDB/nftListDB'

const nftList=nftDB

function getList() {
    return new Promise ((resolve,reject) => {
        setTimeout(() => resolve(nftList),2000)
    })
}

const ItemListContainer = (props) => {

    const [listNFT, setListNFT] = useState([])

    useEffect(() => {
      const list = getList()
  
      list.then(list => {
        setListNFT(list)
      })
    }, [])

    if(listNFT.length === 0) {
        return (
            <WaitIndicator />
            )
      }

    return (

        <div className="container">
            <div className="alert alert-primary" role="alert">Listado de NFTs en venta</div>
            <ItemList items={listNFT}/>

        </div>
    )
}


export default ItemListContainer