

const Informacion = (props) => {

    return(

        <div className="px-4 pt-5 my-5 text-center border-bottom">
            <h1 className="display-4 fw-bold">Pagos con Bitcoin Lightning Network ⚡</h1>
            <div className="col-lg-6 mx-auto">
                <p className="lead mb-4">Para garantizar que tus compras sean confirmadas al instante, utilizamos la tecnologia de capa 2 de Bitcoin denominada Lightning Network. Esto nos permite transaccionar con la moneda dura por excelencia como lo es Bitcoin y proporcionarte velocidades de transferencia y confirmacion super rapidas, haciendo las transaciones mas confiables. Si todavia no estas usando LN, te dejamos algunas wallets recomendadas:</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                    <button onClick="window.location='https://muun.com/es/';" type="button" className="btn btn-primary btn-lg px-4 me-sm-3">Muun Wallet (Recomendada)</button>
                    <button type="button" className="btn btn-outline-secondary btn-lg px-4">Wallet of Satoshi</button>
                </div>
            </div>
            <div className="overflow-hidden" style={{maxHeight:'30vh'}}>
                <div className="container px-5">
                    <img src="/media/lightning_network.png" className="img-fluid border rounded-3 shadow-lg mb-4" alt="Lightning Network" width="800" height="500" loading="lazy"/> 
                </div>
            </div>
        </div>
    )
}

export default Informacion