import { useParams } from "react-router-dom";
import "./index.css"
import { useEffect, useState } from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";

export default function Player(props) {
    const iframeSrc = "https://www.veed.io/view/35c4d6a5-dd9f-4a10-8d5d-b866ca23bff2"

    const {canal} = useParams();
    const [cam1, setCam1] = useState('')
    const [cam2, setCam2] = useState('')
    const [cam3, setCam3] = useState('')
    const [cam4, setCam4] = useState('')
    const [cam5, setCam5] = useState('')
    const [cam6, setCam6] = useState('')
    const [cam7, setCam7] = useState('')
    const [cam8, setCam8] = useState('')
    const [cam9, setCam9] = useState('')
    const [cam10, setCam10] = useState('')
    const [cam11, setCam11] = useState('')
   
    var bloco1 = document.querySelector("#bloc1")
    var bloco2 = document.querySelector("#bloc2")
    var bloco3 = document.querySelector("#bloc3")
    var bloco4 = document.querySelector("#bloc4")
    var bloco5 = document.querySelector("#bloc5")
    var bloco6 = document.querySelector("#bloc6")
    var bloco7 = document.querySelector("#bloc7")
    var bloco8 = document.querySelector("#bloc8")
    var bloco9 = document.querySelector("#bloc9")
    var bloco10 = document.querySelector("#bloc10")
    var bloco11 = document.querySelector("#bloc11")


    const MudarCor =  (botao) => {
        if(botao === 'CAM1'){
            bloco1.style.backgroundColor = "rgb(4, 13, 192)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }else if (botao === 'CAM2'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(4, 13, 192)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        } else if(botao === 'CAM3'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(4, 13, 192)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }else if(botao === 'CAM4'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(4, 13, 192)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM5'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(4, 13, 192)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM6'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(4, 13, 192)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM7'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(4, 13, 192)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM8'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(4, 13, 192)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM9'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(4, 13, 192)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM10'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(4, 13, 192)";
            bloco11.style.backgroundColor = "rgb(36, 41, 130)";
        }
        else if(botao === 'CAM11'){
            bloco1.style.backgroundColor = "rgb(36, 41, 130)";
            bloco2.style.backgroundColor = "rgb(36, 41, 130)";
            bloco3.style.backgroundColor = "rgb(36, 41, 130)";
            bloco4.style.backgroundColor = "rgb(36, 41, 130)";
            bloco5.style.backgroundColor = "rgb(36, 41, 130)";
            bloco6.style.backgroundColor = "rgb(36, 41, 130)";
            bloco7.style.backgroundColor = "rgb(36, 41, 130)";
            bloco8.style.backgroundColor = "rgb(36, 41, 130)";
            bloco9.style.backgroundColor = "rgb(36, 41, 130)";
            bloco10.style.backgroundColor = "rgb(36, 41, 130)";
            bloco11.style.backgroundColor = "rgb(4, 13, 192)";
        }
        
    }

    function Mudar(botao) {


    let d =  canal;
    const meuIframe = document.getElementById("meuIframe");
    
    

        if(d === 'Canais Prime') {
            
            if(botao === 'CAM1') {    
            meuIframe.src = "https://playertv.net/e/?v=primeA";
            
        }
            else if (botao === 'CAM2') {
                meuIframe.src = "https://playertv.net/e/?v=primeAlt";
            }
            else if (botao === 'CAM3') {
                meuIframe.src = "https://playertv.net/e/?v=primeAlt2";
            }
            else if (botao === 'CAM4') {
                meuIframe.src = "https://playertv.net/e/?v=primeAlt3";
            }
            
        }
        else if(d === "Canais Globo") {
            if(botao === 'CAM1') {    
                meuIframe.src = "https://embedflix.online/tv/globo-sp";

                }
                else if (botao === 'CAM2') {
                    meuIframe.src = "https://embedflix.online/tv/globo-rio";
                }
                else if (botao === 'CAM3') {
                    meuIframe.src = "https://embedflix.online/tv/globo-minas";
                }
                else if (botao === 'CAM4') {
                    meuIframe.src = "https://reidoscanais.com/embed/?id=globoba-tvbahia";
                }
                else if (botao === 'CAM5') {
                    meuIframe.src = "https://reidoscanais.com/embed/?id=globodf-globobrasilia";
                }
        }
        else if(d === "Canais Premiere") {
            if(botao === 'CAM1') {    
                meuIframe.src = "https://playertv.net/e/?v=premiere";
                }
                else if (botao === 'CAM2') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere2";
                }
                else if (botao === 'CAM3') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere3";
                }
                else if (botao === 'CAM4') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere4";
                }
                else if (botao === 'CAM5') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere5";
                }
                else if (botao === 'CAM6') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere6";
                }
                else if (botao === 'CAM7') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere7";
                }
                else if (botao === 'CAM8') {
                    meuIframe.src = "https://playertv.net/e/?v=premiere8";
                }
        }
        else if(d === "Canais ESPN") {
            if(botao === 'CAM1') {    
                meuIframe.src = "https://playertv.net/e/?v=espnAlt";
                }
                else if (botao === 'CAM2') {
                    meuIframe.src = "https://playertv.net/e/?v=espn2";
                }
                else if (botao === 'CAM3') {
                    meuIframe.src = "https://playertv.net/e/?v=espn3";
                }
                else if (botao === 'CAM4') {
                    meuIframe.src = "https://playertv.net/e/?v=espn4";
                }
                else if (botao === 'CAM5') {
                    meuIframe.src = "https://playertv.net/e/?v=espn5";
                }
        }
        else if(d === "Canais Sport TV") {
            if(botao === 'CAM1') {    
                meuIframe.src = "https://playertv.net/e/?v=spt1";
                }
                else if (botao === 'CAM2') {
                    meuIframe.src = "https://playertv.net/e/?v=spt2";
                }
                else if (botao === 'CAM3') {
                    meuIframe.src = "https://playertv.net/e/?v=spt3";
                }
                
                else if (botao === 'CAM4') {
                    meuIframe.src = "https://playertv.net/e/?v=spt4";
                }
                
                else if (botao === 'CAM5') {
                    meuIframe.src = "https://playertv.net/e/?v=spt5";
                }
        }
        
        else if(d === "Canais Telecine") {
            if(botao === 'CAM1') {    
                meuIframe.src = "https://playertv.net/e/?v=tnt";
                }
                else if (botao === 'CAM2') {
                    meuIframe.src = "https://embedflix.online/tv/telecine-pipoca-hd";
                }
                else if (botao === 'CAM3') {
                    meuIframe.src = "https://embedflix.online/tv/telecine-action-hd";
                }
                else if (botao === 'CAM4') {
                    meuIframe.src = "https://reidoscanais.com/embed/?id=telecinetouch";
                }
                else if (botao === 'CAM5') {
                    meuIframe.src = "https://embedflix.online/tv/telecine-fun-hd";
                }
                else if (botao === 'CAM6') {
                    meuIframe.src = "https://reidoscanais.com/embed/?id=telecinecult";
                }
        }

        else if(d === "Canais HBO MAX") {
            if(botao === 'CAM1') {    
                meuIframe.src = "https://playertv.net/e/?v=max";
                }
                else if (botao === 'CAM2') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-max-2";
                }
                else if (botao === 'CAM3') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-max-3";
                }
                else if (botao === 'CAM4') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-max-4";
                }
                else if (botao === 'CAM5') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-max-5";
                }
                else if (botao === 'CAM6') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-xtreme";
                }
                
                else if (botao === 'CAM7') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-family";
                }
                else if (botao === 'CAM8') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-mundi";
                }
                
                else if (botao === 'CAM9') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-plus";
                }
                else if (botao === 'CAM10') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-2";
                }
                
                else if (botao === 'CAM11') {
                    meuIframe.src = "https://embedflix.online/tv/hbo-pop";
                }
        }
        console.log(d)
      
    }  

    useEffect(() =>{
       let f = canal;
        if(f === 'Canais Prime'){
            setCam1('Prime Video')
            setCam2('Prime Video 2')
            setCam3('Prime Video 3')
            setCam4('Prime Video 4')
    
       }
       else if(f === 'Canais Globo'){
            setCam1('Globo São Paulo')
            setCam2('Globo Rio de Janeiro')
            setCam3('Globo Minas Gerais')
            setCam4('Globo Bahia')
            setCam5('Globo Brasília ')
     
       }
       else if(f === 'Canais Premiere'){
        setCam1('Premiere Clubes')
        setCam2('Premiere 2')
        setCam3('Premiere 3')
        setCam4('Premiere 4')
        setCam5('Premiere 5')
        setCam6('Premiere 6')
        setCam7('Premiere 7')
        setCam8('Premiere 8')
   }
    else if(f === 'Canais ESPN'){
        setCam1('Canal ESPN1')
        setCam2('Canal ESPN2')
        setCam3('Canal ESPN3')
        setCam4('Canal ESPN4')
        setCam5('Canal ESPN(Extra)')

        }

    else if(f === 'Canais Sport TV'){
        setCam1('Canal Sport TV')
        setCam2('Canal Sport TV2')
        setCam3('Canal Sport TV3')

        }
    else if(f === 'Canais Telecine'){
            setCam1('Telecine Premium')
            setCam2('Telecine Pipoca')
            setCam3('Telecine Action')
            setCam4('Telecine Touch')
            setCam5('Telecine Fun')
            setCam6('Telecine Cult')      
        }
        else if(f === 'Canais HBO MAX'){
            setCam1('HBO MAX')
            setCam2('HBO MAX 2')
            setCam3('HBO MAX 3')
            setCam4('HBO MAX 4')
            setCam5('HBO MAX 5')
            setCam6('HBO XTREME')
            setCam7('HBO FAMILY')   
            setCam8('HBO MUNDI')
            setCam9('HBO PLUS')
            setCam10('HBO 2')
            setCam11('HBO POP')


        }



     
    }, [canal])

    return (
        <div className="containerPlayer1">
            <Header />
        <div className="containerPlayer">
            <iframe  title="UniqueTitle" name="Player"   id="meuIframe" src={iframeSrc} frameborder="0" height="550" scrolling="no" width="80%" allow="encrypted-media" allowFullScreen />              
            <div class="container text-center" id="con">

                <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
                    <div class="col1">
                    <div class="p-3" id="bloc1" onClick={() => {Mudar('CAM1'); MudarCor('CAM1')}}>{cam1}</div>
                    </div>
                    <div class="col1">
                    <div class="p-3"  id="bloc2" onClick={() =>{ Mudar('CAM2') ; MudarCor('CAM2')}}>{cam2}</div>
                    </div>
                    <div class="col1" style={cam3 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3"  id="bloc3" onClick={() => {Mudar('CAM3'); MudarCor('CAM3')}}>{cam3}</div>
                    </div>
                    <div class="col1" style={cam4 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3"  id="bloc4" onClick={() => {Mudar('CAM4'); MudarCor('CAM4')}}>{cam4}</div>
                    </div>
                    <div class="col1" style={cam5 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3" id="bloc5" onClick={() => {Mudar('CAM5'); MudarCor('CAM5')}}>{cam5}</div>
                    </div>
                    <div class="col1" style={cam6 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3" id="bloc6" onClick={() => {Mudar('CAM6'); MudarCor('CAM6')}}>{cam6}</div>
                    </div>
                    <div class="col1" style={cam7 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3" id="bloc7"  onClick={() => {Mudar('CAM7'); MudarCor('CAM7')}}>{cam7}</div>
                    </div>
                    <div class="col1" style={cam8 === '' ? { display: 'none' } : { backgroundColor: 'initial' }}  >
                    <div class="p-3" id="bloc8"  onClick={() => {Mudar('CAM8'); MudarCor('CAM8')}}>{cam8}</div>
                    </div>
                    <div class="col1" style={cam9 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3"id="bloc9"  onClick={() => {Mudar('CAM9'); MudarCor('CAM9')}}>{cam9}</div>
                    </div>
                    <div class="col1" style={cam10 === '' ? { display: 'none' } : { backgroundColor: 'initial' }} >
                    <div class="p-3" id="bloc10"  onClick={() => {Mudar('CAM10'); MudarCor('CAM10')}}>{cam10}</div>
                    </div>
                    <div class="col1"style={cam11 === '' ? { display: 'none' } : { backgroundColor: 'initial' }}  >
                    <div class="p-3" id="bloc11"  onClick={() =>{Mudar('CAM11'); MudarCor('CAM11')}}> {cam11}</div>
                    </div>
                </div>
            </div> 
        </div>
        <Footer />
        </div>

    )
}