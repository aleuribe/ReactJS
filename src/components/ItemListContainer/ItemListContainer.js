import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'

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
            <div>
                <div className="spinner-border text-primary" role="status" >
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-danger" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
                <div className="spinner-border text-warning" role="status">
                <span className="visually-hidden">Loading...</span>
                </div>
            </div>
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