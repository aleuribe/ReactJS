import {useState, useEffect} from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

import imgEmpty from './media/item_empty.png'

import nft_1 from './media/nft_1.png'
import nft_2 from './media/nft_2.png'
import nft_3 from './media/nft_3.png'

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

const App = () => {

  const [listNFT, setListNFT] = useState([])

  useEffect(() => {
    const list = getList()

    list.then(list => {
      setListNFT(list)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

    <body>
      
      <ItemListContainer greeting='Bienvenido a la tienda NFStore.com' list={listNFT}/>

      <p>Tienda online de Tokens No Fungibles - En construccion</p>

    </body>
    
    </div>
  );
}

export default App;
