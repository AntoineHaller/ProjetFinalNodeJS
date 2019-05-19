<template>
    <div id="footer">
       <p>© 2019 Copyright Eskander Haller</p>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
}
</script>

<style>
    #footer p{
        padding-top: 20px;
        padding-bottom: 20px;
        color: #FFF;
    }

    #footer {
        width: 100%;
        height: auto;
        background-color: #34495e;
    }
</style>
