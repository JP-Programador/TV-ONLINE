import Footer from "../../components/footer"
import Header from "../../components/header"
import "./index.css"

export default function NotFound() {
    return (
        <div className="containerfound">
            <Header />
            <div className="notfound">
            <img style={{height: '90vh', width: '90vw', backgroundAttachment: 'fixed'}}
                        src={"https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"} alt="Não Encontrado"/>
            </div>
            <Footer />
        </div>
    )
}