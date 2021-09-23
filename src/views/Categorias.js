import nftDB from "../components/NftListDB/nftListDB"
import { Link } from 'react-router-dom'


const Categorias = (setCountFunc) => {
    const nft = nftDB

    const justCategories = nft.map((cat)=>cat.category)

    const uniqueCategories = [...new Set(justCategories)]
    
    return (
        <div className="container">
            <div className="alert alert-primary" style={{margin:'10px 0px 10px 0px'}}  role="alert">Busca NFTs por categoria</div>
            <div className="row align-items-start">
                {uniqueCategories.map(e=> 
                    <div className="col align-self-center">
                        <div className="card" style={{width:'20rem', padding:'10px 10px 10px 10px', margin:'10px 10px 10px 10px'}}>
                            <img src={'/media/'+e.toLowerCase()+'.png'} className="card-img-top" alt="..."/>
            
                            <div className="card-body">
                                <h5 className="card-title">{'NFT de '+e}</h5>

                                <Link handler={setCountFunc} to={`/cat/`+e.toLowerCase()} className="btn btn-primary"> Explorar </Link>
                                    
                                
                            </div>
                        </div>
                    </div>
          
                )}
            </div>
        </div>


    )
}

export default Categorias