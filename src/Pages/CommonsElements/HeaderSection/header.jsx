import './Style/style.css';
import React from "react";


function HeaderPage(){
    return(
        <header>
            <nav>
                <ul className="let-side">
                    <figure className="logoTopo">
                        <img className="logoTopo" id="logoTopo" src="" alt="" />
                    </figure>
                    <div className="inputer">
                        <input type="text" placeholder='Pesquise Alguma Coisa' className='inputer-componente' />
                        <i className='fas fa-search search-icon'></i>
                    </div>
                </ul>
            </nav>
        </header>
    );
}

export default HeaderPage;