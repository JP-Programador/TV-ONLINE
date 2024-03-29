// import { useState } from "react"
import Footer from "../../components/footer";
import Header from "../../components/header";

import "./index.css"
import {useNavigate} from 'react-router-dom'

export default function Home() {
    const navig = useNavigate();

    
    // const [Premiere, setpremiere] = useState([{nome:"premiere", c1: "Premiere", c2: "Premiere2", c3: "Premiere3", c4: "Premiere4", c5: "Premiere5", c6: "Premiere6", c7: "Premiere7", c8: "Premiere8", c9: "Premiere9", c10: "Premiere Clube"}])
    
     const abrir = (botao) => {

        var nome;

       if(botao === 'bbb') {
            nome = 'Canais BBB24'
        } else if (botao === 'globo') {
            nome = 'Canais Globo'
        }else if (botao === 'Premiere') {
            nome = 'Canais Premiere'
        }else if (botao === 'ESPN') {
            nome = 'Canais ESPN'
        }else if (botao === 'Sport') {
            nome = 'Canais Sport TV'
        }else if (botao === 'Telecine') {
            nome = 'Canais Telecine'
        }
        else{
            nome = 'não encontrado'
        }
        return navig(`/player/${nome}`);

    }


    return (
        <div classname="containerHome">
            <Header />
            <div className="sal">
            <h1>ATUALIZAÇÃO 1.1 !</h1> 
            <span>Olá é um prazer tê-lo conosco, primeiramente queria agradecer por está utilizando nosso sistema e fazer parte dessa comunidade, que está apenas começando. <br></br> Gostaríamos de avisar que nosso sistema, é um sistema beta, então quer dizer que teremos bugs, conteúdos limitados e algumas páginas e players sem acesso, mas fique tranquilo, estamos trabalhando duro, para que possamos ser uns dos melhores sites de TV Online. Muito obrigado pela sua compreensão e bom divertimento. </span>

            </div>
            <div class="container1">
            
            <div class="row" id="ro1">
                <div class="col" onClick={() => abrir('bbb')}>
                    <div className="col-img" id="cal1" value="bbb"><img src="./images/bbb-logo-big-brother-brasil-logo.webp"width={"250"} alt="" /></div>
                    <div className="col-name"  >Canais BBB</div>
                </div>
                <div class="col"  onClick={() => abrir('globo')}>
                    <div className="col-img" id="cal" value={"Globo"}><img src="./images/Logotipo_da_TV_Globo.png.webp"width={"150"} alt="" /></div>
                    <div className="col-name">Canais Globo</div>               
                 </div>
                <div class="col" onClick={() => abrir('Premiere')}>
                    <div className="col-img" id="cal" value={"Premiere"} ><img src="./images/Premiere_FC_logo.webp"width={"250"} alt="" /></div>
                    <div className="col-name">Canais Premiere</div>
                </div>

                <div class="col" onClick={() => abrir('ESPN')}>
                    <div className="col-img" id="cal" value={"ESPN"} ><img src="./images/ESPN_wordmark.svg.webp"width={"250"} alt="" /></div>
                    <div className="col-name">Canais ESPN</div>
                </div>
                <div class="col" onClick={() => abrir('Sport')}>
                    <div className="col-img"  ><img src="./images/eHJ8Vm3.png"width={"200"} alt="" /></div>
                    <div className="col-name">Canais Sport TV</div>               
                 </div>
                 <div class="col"  onClick={() => abrir('Telecine')}>
                    <div className="col-img" ><img src="./images/Telecine-Play_Vagas.png"width={"200"} alt="" /></div>
                    <div className="col-name">Canais Telecine</div>               
                 </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
