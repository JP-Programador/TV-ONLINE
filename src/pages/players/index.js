import "./index.css"
export default function Player() {
    const iframeSrc = "https://reidoscanais.com/embed/?id=bbb";

   async function Mudar(botao) {
    
    const meuIframe = document.getElementById("meuIframe");
    if(botao === 'CAM1') {    
    meuIframe.src = "https://reidoscanais.com/embed/?id=bbb";
    }
    else if (botao === 'CAM2') {
        meuIframe.src = "https://reidoscanais.com/embed/?id=bbb3";
    }
    else if (botao === 'CAM3') {
        meuIframe.src = "https://reidoscanais.com/embed/?id=bbb7";
    }
    else if (botao === 'CAM4') {
        meuIframe.src = "https://reidoscanais.com/embed/?id=bbb4";
    }
    else if (botao === 'CAM5') {
        meuIframe.src = "https://reidoscanais.com/embed/?id=bbbmosaico";
    }
    }  

    return (
        <div className="containerPlayer">
            <div class="title-fix"><h1>AVISO IMPORTANTE!</h1> 
            <span>Olá é um prazer tê-lo conosco, primeiramente queria agradecer por está utilizando nosso sistema e fazer parte dessa comunidade, que está apenas começando.   <br></br> <br></br> Gostaríamos de avisar que nosso sistema, é um sistema beta, então quer dizer que teremos bugs, conteúdos limitados e algumas páginas e players sem acesso, mas fique tranquilo, estamos trabalhando duro, para que possamos ser uns dos melhores sites de TV Online. Muito obrigado pela sua compreensão e bom divertimento. </span>
            </div>
            <iframe  title="UniqueTitle" name="Player"   id="meuIframe" src={iframeSrc} frameborder="0" height="400" scrolling="no" width="80%" allow="encrypted-media" allowFullScreen />              
            
            <div className="buttons">
                <button onClick={() => Mudar('CAM1')} >Acompanhe a Casa</button>
                <button onClick={() => Mudar('CAM2')}>Cozinha</button>
                <button onClick={() => Mudar('CAM3')}>Sala</button>
                <button onClick={() => Mudar('CAM4')}>BBB Mosaico</button>
                <button id="a1"onClick={() => Mudar('CAM5') }>Acompanhe a Casa 2</button>
            </div>

        </div>
    )
}