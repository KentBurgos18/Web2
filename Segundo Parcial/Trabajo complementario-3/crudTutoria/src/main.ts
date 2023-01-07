import './style.css'
import axios from 'axios'
import { IResTutoria, Tutoria } from './interfaces/ITutoria';
const httpAxios =  axios.create({
  baseURL:'http://localhost:8000',
})



const app = document.querySelector<HTMLDivElement>('#app')!
//#region mapa de elementos
const etiqueta = document.createElement("label")
etiqueta.textContent="ID"
const input = document.createElement("input");
input.id="id"
etiqueta.htmlFor="id"
app.appendChild(etiqueta);
app.appendChild(input);
app.innerHTML += `
<label for ="asignatura">asignatura</label><input id="asignatura"/>
<label for ="numhoras">numhoras</label><input id="numhoras"/>
<label for ="fecha">fecha</label><input id="fecha"/>
<label for ="hora">hora</label><input id="hora"/>
<button id="new" >New</button>
<button id="save" >Save</button>
<button id="query" >Query</button>
<div id="body"/>
`
const newb = document.querySelector<HTMLButtonElement>('#new')!
const save = document.querySelector<HTMLButtonElement>('#save')!
const query = document.querySelector<HTMLButtonElement>('#query')!

const id = document.querySelector<HTMLInputElement>('#id')!
const asignatura = document.querySelector<HTMLInputElement>('#asignatura')!
const status = document.querySelector<HTMLInputElement>('#status')!
const numhoras = document.querySelector<HTMLInputElement>('#numhoras')!
const fecha = document.querySelector<HTMLInputElement>('#fecha')!
const hora = document.querySelector<HTMLInputElement>('#hora')!
const stock = document.querySelector<HTMLInputElement>('#stock')!
const body = document.querySelector<HTMLDivElement>('#body')!
//#endregion


newb.addEventListener('click',()=>{
  asignatura.value=""
  numhoras.value=""
  fecha.value=""
  hora.value=""
  id.value=""
})
query.addEventListener('click', async ()=>{
  const respTutorias:IResTutoria 
  =  await (await httpAxios.get<IResTutoria>('tutoria')).data;

    const tabla   = document.createElement("table")
    tabla.id="tabla"
    tabla.border="1"


    const { tutorias } = respTutorias;
    console.log(respTutorias)
    for (const tutoria of tutorias)
    {
      const row = tabla.insertRow()
      const celda =  row.insertCell()
      celda.innerHTML=` <button class="boton" value="${tutoria._id}" >${tutoria.asignatura}</button>`
      const celda2= row.insertCell()
      celda2.innerHTML=`${tutoria.numhoras}`
    }
    body.innerHTML=``
    body.appendChild(tabla)
    document.querySelectorAll('.boton').forEach((ele:Element)=>{
      ele.addEventListener('click', async ()=>{
          const idx= (ele as HTMLButtonElement).value;
          const tutoria:Tutoria 
          =  await (await httpAxios.get<Tutoria>(`tutoria/${idx}`)).data;
          asignatura.value= tutoria.asignatura;          
          numhoras.value= tutoria.numhoras;  
          fecha.value= tutoria.fecha;   
          hora.value= tutoria.hora;   
          id.value= tutoria._id!;  
           
      })
    })

  

    

  

})
save.addEventListener('click',async ()=>{
  const data:Tutoria = {
    asignatura:asignatura.value,
    numhoras: numhoras.value,
    fecha:  fecha.value,
    hora:  hora.value,
  }
  // console.log(data);

  if (id.value.trim().length>0 )
  {
    //        
    const resp: Tutoria = await (await httpAxios.put<Tutoria>(`tutoria/${id.value}`, data)).data
    console.log(resp)
    console.log(`La tutoria ${resp.asignatura} fue modificado con éxito`);
    
    return;
  }
  try {
    const resp: Tutoria =  await (await httpAxios.post<Tutoria>(`tutoria`, data)).data
    console.log(`La tutoria ${resp.asignatura} fue grabado con éxito`);
  } catch (error) {
    if ( axios.isAxiosError(error)  )
    {
      console.log(error );
      
    }
    
  }
  
  
})