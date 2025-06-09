// Página de Stephanie
'use strict'

async function getTasks(){
    const url = 'http://localhost:3000/cadastro'
    const response = await fetch(url)
    const tasks = await response.json()
    console.log (tasks)
}