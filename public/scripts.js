function initForm(){
    getNavbar()
    getTipos()
}
function getTipos(){
    const option = document.getElementById('tipo')
    fetch('http://localhost:3000/tipos')
    .then(res => res.json())
    .then(data => {
        for(i in data){
            let op =`<option value="${data[i].idtipos}">${data[i].designacao}</option>`
            option.innerHTML += op
        }
    })
    .catch((err)=> {
        alert(err)
    })
}

function adicionar(){
    let nome = document.getElementById('nome').value
    console.log(nome)

    let morada = document.getElementById('morada').value
    console.log(morada)

    let n = document.getElementById('n').value
    console.log(n)

    let telemovel = document.getElementById('telemovel').value
    console.log(telemovel)

    let email = document.getElementById('email').value
    console.log(email)

    let data = document.getElementById('data').value
    console.log(data)

    let curso = document.getElementById('curso').value
    console.log(curso)
}

function getNavbar(){
    const nbar = document.getElementById('nbar')
    fetch('http://localhost:3000/navbar.html')
    .then(res => res.text())
    .then((html)=>{
        nbar.innerHTML += html
    })
        

    .catch((err) =>{
        alert('Ocorreu um erro')
    })
}




/*
function getData(){
    fetch('http://localhost:5000/bd')
    .then(res => res.json())
    .then(data => processData(data) )
    .catch(function(err){
        alert('Ocorreu problema')
    })
}

function processData(data){
    const linhaCidades = document.getElementById('cidades')
    linhaCidades.innerHTML=''
    for(let i=0; i < 10; i++){
        let nome = data[i].Name
        let distrito = data[i].District
        let pop = data[i].Population
        let id = data[i].ID
        linhaCidades.innerHTML += ` <tr>
                                        <th>${nome}</th>
                                        <th>${distrito}</th>
                                        <th>${pop}</th>
                                        <td">
                                        <button 
                                        onclick="Delete"
                                        type="button" 
                                        class="btn btn-danger"
                                        style="width:100px;>
                                        Eliminar</button>
                                        <button 
                                        type="button" 
                                        class="btn btn-success"
                                        style="width:100px;>
                                        Editar</button>
                                        <button 
                                        onclick="ShowID(${ID})"
                                        type="button" 
                                        class="btn btn-info"
                                        style="width:100px;>
                                        Ver mais</button>
                                        </td>
                                    </tr>`
    }
}

function showID(ID){
    console.log(ID)

}
*/