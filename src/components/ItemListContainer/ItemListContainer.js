import {useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList.js'


import logo from '../../media/nft_logo.png'
import nft_1 from '../../media/nft_1.png'
import nft_2 from '../../media/nft_2.png'
import nft_3 from '../../media/nft_3.png'

const nftList=[
    {id:1, title:'The Bitcoin Pizza', price:'12.000', pictureUrl:nft_1, stock:10, initial:1},
    {id:2, title:'Cyberpunk world', price:'27.345', pictureUrl:nft_2, stock:20, initial:2},
    {id:3, title:'Bitcoin Token render', price:'1.000', pictureUrl:nft_3, stock:100, initial:5}
]

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

    return (

        <div className="container">
            <img src={logo} className="App-logo" alt="logo" style={{width:'10%'}}/>
            <h1>{props.greeting}</h1>
            
            <ItemList items={listNFT}/>

        </div>
    )
}


export default ItemListContainer