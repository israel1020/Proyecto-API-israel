<template>
    
    <div class="container" >
        <div v-if="seleccionado" style="text-align:center; background-color:yellow">
            <img :src="seleccionado.img" class="card-img-top" style="width:30%"/>
            <div class="card-body">
                <h5 class="card-title">{{seleccionado.name}}</h5>
                <p class="card-text">{{seleccionado.descripcion}}</p>
                <p class="card-text">Edad: {{seleccionado.age}}</p>
                
            </div>
        </div>
        <div class="card" v-for="cantante in cantantes" 
        v-bind:key="cantante.id" style="width:18rem;" >
            <img :src="cantante.img" class="card-img-top"/>
            <div class="card-body">
                <h5 class="card-title">{{cantante.name}}</h5>
                <p class="card-text">{{cantante.descripcion}}</p>
                <p class="card-text">Edad: {{cantante.age}}</p>
                <button v-on:click="eliminarCantante(cantante.id)">Eliminar</button>
                <button v-on:click="mostrarCantante(cantante.id)">Detalles</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'


export default {
    name:"Cantantes",

    methods:{
        getCantantes(){
            axios.get('http://localhost/api/cantantes').then(response => (this.cantantes = response.data))
        },
        eliminarCantante(id){
            axios.delete('http://localhost/api/cantantes/' + id).then((res)=>{
                this.cantantes=res.data;
                console.log(this.cantantes)
                this.getCantantes();
            })
        },
        mostrarCantante(id){
            axios.get('http://localhost/api/cantantes/' + id).then(res=>{
                this.seleccionado=res.data;
                console.log(this.seleccionado);
            })
        }
        
    }, data(){
        return{
            cantantes: {},
            seleccionado: null
        }
    }, mounted(){
        this.getCantantes();
    }
}
</script>