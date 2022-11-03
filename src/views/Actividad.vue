<template lang="pug">
.curso-main-container.pb-3
  BannerInterno()
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-puzzle-piece
      h1 Actividad didáctica     
    
    .titulo-segundo.color-acento-contenido
      h2 Arrastrar y soltar
    .row.mb-5.justify-content-center.align-items-center.align-items-lg-stretch
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.h-100.d-flex.align-items-center.p-4
          figure
            img(src="@/assets/curso/temas/actividad-img1.svg", alt="Texto que describa la imagen")
      .col-12.col-md-8.col-lg-9
        p.mb-4 La presente actividad tiene como propósito validar la comprensión de los conceptos abordados. Para ello, debe relacionar cada uno de los términos con la definición correspondiente.
        .tarjeta.actividad.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0 Arrastrar y soltar
            .col-auto
              a.boton.boton--b.texto-blanco.color-acento-botones(:href="obtenerLink('/actividades/index.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece
                
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass"></style>
