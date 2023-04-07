<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-5
          figure
            img(src='@/assets/curso/temas/introduccion-img1.png', alt='Texto que describa la imagen')
        .col-lg-7.justify-content-center.mt-3 
          p Apreciado aprendiz, bienvenido a este componente formativo, donde se desarrollarán las habilidades para la prestación del servicio al cliente y las estrategias para medirlo cumpliendo con los requerimientos del usuario. En la organización de eventos todas las personas brindan o reciben un servicio, sin embargo, ¿cuál es su definición, para qué sirve o cómo prestarlo correctamente? 
          p Lo invitamos a explorar el siguiente vídeo como introducción a los temas a abordar, no sin antes desearle éxitos en el desarrollo de esta experiencia de aprendizaje.
      
    .row.mt-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Ke16Wg4oPLw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
