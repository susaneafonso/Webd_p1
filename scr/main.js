const weath=document.getElementById("weath")
const city=document.getElementById("city")
const date=document.getElementById("date")
const humidity=document.getElementById("humidity")
const wind_speedy=document.getElementById("wind_speedy")
imgwet=document.getElementById("imgWet")

const url_wea=axios.create({
baseURL:"https://api.hgbrasil.com/weather?format=json-cors&key=18851b12&city_name=BARRA_MANSA,RJ"
})

const imgtp=document.getElementById("imgtp")
const poca=document.getElementById("poca")

async function get_wea(){
   const dat= await url_wea.get()
  
   
   if(dat.status>="200"&& dat.status<="400"){
       console.log("Êxito na conexão")
       weath.innerHTML=dat.data.results.description 
       imgwet.innerHTML=dat.data.results.temp+"°"
       console.log(imgwet)
       city.innerHTML=dat.data.results.city 
       console.log(dat.data,"valor")
       console.log(weath.innerHTML,"teste")
       humidity.innerHTML="Humidade :  "+dat.data.results.humidity
       wind_speedy.innerHTML="Vento :  "+dat.data.results.wind_speedy
       console.log(weath.innerHTML)
       if(weath.innerHTML=="Parcialmente nublado"){
             imgtp.src="/scr/img/weather/dia-nublado.png"
             }
       if(weath.innerHTML.startsWith("Chu") || weath.innerHTML.startsWith("Temp")){
             imgtp.src="/scr/img/weather/trovoada.png"
             }
       if(weath.innerHTML.startsWith("Enso") || weath.innerHTML.startsWith("Sol")){
             imgtp.src="/scr/img/weather/ensolarado.png"
             }
   }
   else{
       console.log("Falha na Conexão")
   }
}
get_wea()

const ip=document.getElementById("ip")
const cit=document.getElementById("cit")
const reg=document.getElementById("reg")
const ctry=document.getElementById("ctry")
const isp=document.getElementById("isp")
const zip=document.getElementById("zip")
const btn_ip=document.getElementById("btn_ip")

const url_ip=axios.create({
    baseURL:"http://ip-api.com/json"
})

async function ipp(){
    data= await url_ip.get()
    console.log(data)
    if(data.status>="200"&& data.status<="400"){
        console.log("Êxito na conexão")
        ip.innerHTML=data.data.query
        cit.innerHTML=" Cidade: "+data.data.city
        reg.innerHTML=" Região: "+data.data.region
        ctry.innerHTML=" País: "+data.data.country
        isp.innerHTML=" Provedor: "+data.data.isp
        zip.innerHTML=" Cep: "+data.data.zip
    }
    else{
       console.log("Falha na Conexão")
    }
}

ipp()

const dic=document.getElementById("dic")
const mdc=document.getElementById("mdc")
var conteudo= ""
const pesq=document.getElementById("pesq")

function limparCampo() {
    document.getElementById("dic_s").value = ""
    }

function get_user_s(event){
     event = event || window.event
   
     if (event) {

      if (event.keyCode === 13 || event.key === "Enter") {
   
       event.preventDefault()
       conteudo= document.getElementById("dic_s").value
       word=conteudo
       console.log(conteudo+'teste')
       console.log(conteudo+'teste1')
         
       const url_dict= axios.create({
         method: 'GET',
         baseURL: 'https://api.dictionaryapi.dev/api/v2/entries/en/'+conteudo
       })

       async function dict(){
         data= await url_dict.get()
         console.log(data)
         pesq.innerHTML="❥"+conteudo
         const mean=document.getElementById("mean")
         mean.innerHTML=data.data[0].meanings[0].definitions[0].definition.slice(0,60)
         const more=document.getElementById("more")
         more.innerHTML="Synonyms▹"+data.data[0].meanings[0].synonyms.slice(0,2)
         const opos=document.getElementById("opos")
         opos.innerHTML="Antonyms▹"+data.data[0].meanings[0].antonyms.slice(0,2)
        }
       dict()
       limparCampo()  
}}}

get_user_s()

const nfact=document.getElementById("nfact")

const url_teste=axios.create({
    baseURL:"http://numbersapi.com/random"
})

async function math(){
    data= await url_teste.get()
    console.log(data.data)
    if(data.status>="200"&& data.status<="400"){
      console.log("Êxito na conexão")
      nfact.innerHTML=data.data
    }
    else{
      console.log("Falha na Conexão")
     }
}


setInterval(math(),60000)



