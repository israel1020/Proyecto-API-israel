<template>
    <div class="container" style="width:40%">
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="cantante.name">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Descripcion</label>
            <input type="text" class="form-control" v-model="cantante.descripcion">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Edad</label>
            <input type="number" class="form-control" v-model="cantante.age">
        </div>
        <div class="mb-3">
            <label for="exampleFormControlInput1" class="form-label">Imagen</label>
            <input type="text" class="form-control" v-model="cantante.img">
        </div>
        <button v-on:click="guardarCantante()">Insertar</button>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name:"InsertarCantante",
    mounted(){
        

    },methods:{
        guardarCantante(){
            axios.post('http://localhost/api/cantantes', this.cantante).then(data=>{
                console.log(data);
                this.$router.push('/cantantes');
            })
        }

    },data(){
        return{
            cantante:{
                name: '',
                descripcion: '',
                img:'',
                age:0,
            }
            }
    }
}
</script>