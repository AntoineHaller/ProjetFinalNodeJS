<template>
    <div class="homeComponent">
        <div>
            <p>Nombre de {{type}}: {{nombre}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'homeComponent',
        props:{
            type: String,
            nombre: Number
        }
    }
</script>