import './Style/style.css'

export default function FooterPage(){
    return(
        <div className="footer" id="footer">
            <div className="content-footer">
                    <section id="payments" className="formasDePagamento">
                        <p>Formas de Pagamento</p>
                        <ul>
                            <li>Visa</li>
                            <li>Mastercard</li>
                            <li>Cielo</li>
                            <li>Boleto</li>
                            <li>Cartão da Loja</li>
                            <li>Elo</li>
                        </ul>
                    </section>
                    <hr />
                    <section id="certificados" className="certificadosDeSegurança">
                        <p>Certificados de Segurança</p>
                    </section>
                    <hr />
                    <section className="links" id="links">
                        <ul className="politicas">
                            <a href="#">Políticas de Privacidade</a>
                            <a href="#">Termos de Uso</a>
                            <a href="#">Termos de Frete & Garantia</a>
                        </ul>
                    </section>
                    <hr />
                    <section className="Ender" id="Ender">
                        <ul className="contact-ul">
                        <p>© Copyright 202X - Sua Empresa</p>
                        <p className="email" id="email">contato@suporte.com.br</p>
                        </ul>
                    </section>
            </div>
        </div>
    )
}