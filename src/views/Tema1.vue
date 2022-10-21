<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicio al cliente

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-7
          p El servicio al cliente consiste en ofrecer toda la asesoría posible al cliente en el antes, durante y después de la compra, con el fin de cumplir con su satisfacción a través de la respuesta a sus solicitudes, preguntas y consultas frente a la organización del evento. Cada interacción del servicio al cliente es una oportunidad para que la organización crezca, ya que cuando se brinda de manera excelente, se convierte en un diferenciador competitivo que impulsa la fidelidad y el reconocimiento de la marca.
          .cajon.color-secundario.p-2
            p El servicio al cliente puede expresarse a través de elementos tangibles, como las comodidades y el ambiente que proporciona un establecimiento, la accesibilidad, la amabilidad de los vendedores, entre otros; y también con elementos intangibles como cuando se habla de una página web o una app móvil, donde se califica su buen funcionamiento, los canales de comunicación, los plazos de entrega y las políticas de devolución, etc.
        .col-lg-5
          figure
            img.mt-3(src='@/assets/curso/temas/tema1/tema1-img1.png', alt='Texto que describa la imagen').img-animacion1
      
      .row.mt-5
        p Así pues, el servicio al cliente es importante desde diferentes perspectivas y teniendo en cuenta los siguientes parámetros:
      .row
        .col-lg-5
          figure
            img.mt-3(src='@/assets/curso/temas/tema1/tema1-img2.svg', alt='Texto que describa la imagen')        
        .col-lg-7  
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
            .row(titulo="Conectar todos los puntos de contacto con el cliente")
              .col-md-12.mb-4.mb-md-0
                p Centros de contacto, canales digitales, e interacciones a lo largo del recorrido del consumidor.
            .row(titulo="Brindar opciones de interacción")
              .col-md-12.mb-4.mb-md-0
                p La idea es que el cliente pueda interactuar con el organizador de eventos bajo una gama amplia de opciones que puedan ser útiles en cualquier lugar y en cualquier momento.
            .row(titulo="Ofrecer experiencias memorables")
              .col-md-12.mb-4.mb-md-0
                p Los empleados que laboren en la organización de eventos deben comprometerse a cumplir las expectativas de los clientes.
            .row(titulo="Brindar respuestas personalizadas")
              .col-md-12.mb-4.mb-md-0
                p Se requiere en este punto una asesoría personalizada de empleados que tengan el suficiente conocimiento para poder brindar la respuesta correcta.
            .row(titulo="Automatizar algunos de los procesos y las interacciones")
              .col-md-12.mb-4.mb-md-0
                p Hacer de la tecnología el mejor aliado en cuanto a #[i software] que disminuyan o mejoren los procesos o equipos que contribuyan a que la interacción con el usuario sea mucho más simple y cómoda.
    separador

    #t_1_1.titulo-segundo.color-acento-contenido
      h2 1.1 El servicio

    .row
      p #[i Un servicio puede ser definido como una actividad que es llevada a cabo por una organización, con el fin de satisfacer un requerimiento o necesidad del cliente. Sus características básicas son:]

    .row.justify-content-around.align-items-center 
      .col-11
        .titulo-sexto.color-acento-contenido.mb-5
          .row.mb-2
            h5 Figura 1
          .row
            span #[i Características del servicio]
        
      .row.justify-content-center
        LineaTiempoD.color-secundario
          .row(numero="1" titulo="Intangibilidad")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img21.svg', alt='Texto que describa la imagen').img_lineaTD
            .col-lg-10  
              p.mt-2 Un servicio no se puede cuantificar, inventariar o verificar su estado con el fin de asegurar su calidad antes de ser brindado al cliente.
          
          .row(numero="2" titulo="Heterogeneidad")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img22.svg', alt='Texto que describa la imagen').img_lineaTD
            .col-lg-10  
              p.mt-2 Todos son diferentes; casi nunca coinciden entre sí ya que generalmente son creados teniendo en cuenta las características de cada cliente. En un servicio no existe la fabricación en masa donde se genera la igualdad, por tanto, cada momento es totalmente diferente y con ello la percepción de un cliente también lo es.

          .row(numero="3" titulo="Inseparabilidad")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img23.svg', alt='Texto que describa la imagen').img_lineaTD
            .col-lg-10  
              p.mt-2 Existe una estrecha relación entre el servicio y quien lo ofrece, por tanto la calidad percibida también dependerá de lo que el cliente reciba en cuanto atención y calidad de la experiencia obtenida.

          .row(numero="4" titulo="Carácter perecedero")
            .col-lg-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img24.svg', alt='Texto que describa la imagen').img_lineaTD
            .col-lg-10  
              p.mt-2 los servicios caducan cuando se entregan, por tanto, no se pueden almacenar para poder brindarlos posteriormente.

        .tarjeta.tarjeta--gris.mt-5
          p Nota. Tomada y adaptada de Alfonso Yanelys. (2019). Servicio: qué es, características, clasificación y tipos. Recuperado de https://www.gestiopolis.com/servicio-que-es-caracteristicas-clasificacion-y-tipos/

    .row.justify-content-around.aling-items-center.mb-5.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/tema1-img3.png')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Una empresa de organización de eventos beneficia de muchas formas cuando se encarga de ofrecer un buen servicio: la lealtad que se obtiene por parte de los clientes hace que estos prefieran a la compañía por encima de otras marcas, por tanto, entre mejor sea la experiencia brindada, más retorno de los clientes quienes se convertirán en embajadores de la marca, replicando sus servicios de boca en boca y bajo sus propias redes sociales.

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-5
          figure
            img.mt-4(src='@/assets/curso/temas/tema1/tema1-img4.png', alt='Texto que describa la imagen')
        .col-lg-7.justify-content-center.mt-5
          p.mt-3 Muchas investigaciones han demostrado que cuando una empresa ofrece un excelente servicio, puede tener repercusión en el aumento de sus ingresos, sin embargo, esto no se logra si no se pone en práctica el continuo mejoramiento de los servicios y productos, así como el aprendizaje de los errores del pasado para lograr generar mayor cantidad de ventas. Esto hará que la compañía se diferencie, gane mayor participación en su entorno y sobresalga entre la competencia. 
    
    separador

    #t_1_2.titulo-segundo.color-acento-contenido
      h2 1.2 Canales del servicio

    .row
      .col-lg-7.mb-5.mb-lg-0
        .bloque-texto-tema1
          .bloque-texto-tema1__texto
            p.mb-0 Con los avances en la tecnología, los clientes y las empresas tienen mayor posibilidad de interactuar, estar conectados entre sí y conocer los requerimientos para la organización de un excelente evento. En la comunicación actual es necesario contar con diferentes tipos de canales que den soporte a las preguntas, comentarios y sugerencias de los clientes, antes, durante y después del evento. Los procesos digitalizados facilitan aprender sobre el producto o servicio a ofrecer y de paso generar relaciones más cercanas.
      .col-lg-5.mb-5.mb-lg-0
        figure
          img.mt-4(src='@/assets/curso/temas/tema1/tema1-img5.svg', alt='Texto que describa la imagen').img-animacion2
    
    .row
      p Adicional a la presencialidad, se usan canales como:

    .row.justify-content-around.align-items-center 
      ImagenInfografica.color-acento-botones
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema1/tema1-img6.png', alt='Texto que describa la imagen').img-animacion3

        .tarjeta.color-acento-botones.p-3(x="36.5%" y="63%" numero="")
          .h5.mb-2 Redes sociales
          p su mayor característica es la atención casi inmediata que puede recibir el cliente a través de plataformas como Instagram, Facebook o Twitter.

        .tarjeta.color-acento-botones.p-3(x="56.5%" y="5.5%" numero="")
          .h5.mb-2 #[i Chatbots]
          p son asistentes virtuales que usan inteligencia artificial para generar conversaciones automatizadas las 24 horas del día. Esta herramienta le permite a los clientes obtener una respuesta rápida frente a sus inquietudes o ser redireccionado a un representante de la marca enfocado al servicio cliente quien acompañe sus requerimientos.

        .tarjeta.color-acento-botones.p-3(x="75.5%" y="55.5%" numero="")
          .h5.mb-2 Soporte de correo electrónico o vía #[i web]
          p los clientes usan este canal para realizar solicitudes más detalladas o reportar inconvenientes con el producto o servicio. No es una forma de comunicación instantánea, pero sí brinda un espacio correcto para que los usuarios manifiesten lo que necesitan de una forma amplia y clara.  
      .col-8        
        .row.justify-content-center.mt-2
          .cajon.color-secundario.p-4
            p Estos canales facilitan la comunicación con el cliente y además permiten:
            .col-sm.mb-5.mb-sm-0
              ol.lista-ol--cuadro
                li 
                  .lista-ol--cuadro__vineta
                    span 1
                  | Presentarle un nuevo producto o servicio.
                li 
                  .lista-ol--cuadro__vineta
                    span 2
                  | Mantener la información actualizada sobre la empresa y lo que ofrece.
                li 
                  .lista-ol--cuadro__vineta
                    span 3
                  | Gestionar eficazmente las preguntas o requerimientos de los usuarios.
                li 
                  .lista-ol--cuadro__vineta
                    span 4
                  | Compartir información, videos, audios que puedan ser de valor para el cliente y que lo puedan acercar a la marca.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido
      h2.mt-3 1.3 Ciclo de servicio

    .tarjeta
      .row.justify-content-center
        .col-lg-5
          figure
            img.mt-2(src='@/assets/curso/temas/tema1/tema1-img7.png', alt='Texto que describa la imagen')
        .col-lg-7.justify-content-center.mt-2
          p El ciclo del servicio hace referencia a los puntos de contacto a través de los cuales el cliente pasa, desde la interacción inicial hasta convertirse en un consumidor fiel de la marca (primer contacto, cierre de venta, servicio postventa). Le permiten a la organización conocer las debilidades y fortalezas percibidas por el cliente, a partir del contacto con la marca e identificar aquello que debe ser mejorado.
          p Muñoz Benavides, G (2017) menciona que el ciclo básico para satisfacer necesidades se ve enriquecido con la inclusión de la filosofía de mejora continua, con la cual se identifica la percepción del cliente con respecto a los aspectos que deben reforzarse en cuanto a la calidad, y con ello tomar las medidas necesarias para fortalecerlos hasta lograr la satisfacción de los requerimientos, necesidades y expectativas del cliente.

    .tarjeta.mt-3
      .row.justify-content-center
        .col-lg-9.justify-content-center
          .cajon.color-acento-contenido.p-3
            p A este respecto, el ciclo debe incluir todas las fases que conforman la prestación de un servicio, desde su inicio hasta la final evaluación de los resultados que se obtienen al cumplir los requerimientos y expectativas de los clientes.
            p La gestión del ciclo del servicio debe omitir las suposiciones subjetivas y, por el contrario, centrarse en el consumidor, sus necesidades y el valor percibido en las diferentes etapas del servicio.
    
    .row 
      p.mt-5 Los pasos a tener en cuenta en el ciclo de servicio son:

    .row.justify-content-center
      .col-lg-4
        figure
          img.mt-3(src='@/assets/curso/temas/tema1/tema1-img9.svg', alt='Texto que describa la imagen')        
      .col-lg-8.mt-4
        AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
          .row(titulo="Identificar los momentos de verdad y los momentos críticos que se dan durante el ciclo")
            .col-lg-2.col-xs-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img10.svg', alt='Texto que describa la imagen').img-acordeontema1
            .col-md-10.mb-4.mb-md-0.col-xs-10
              p Los espacios donde se tiene contacto con el cliente y aquellos donde existen aspectos que puedan afectar negativamente la satisfacción o el humor del mismo.  
          .row(titulo="Requerimientos")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img11.svg', alt='Texto que describa la imagen').img-acordeontema1 
            .col-md-10.mb-4.mb-md-0
              p En este punto se deben conocer las necesidades del cliente para poder mejorar el servicio ofrecido.
          .row(titulo="Planes de acción")
            .col-md-2
              figure
                img(src='@/assets/curso/temas/tema1/tema1-img12.svg', alt='Texto que describa la imagen').img-acordeontema1
            .col-md-10.mb-4.mb-md-0
              p Son las estrategias que se plantean luego de conocer los requerimientos del cliente.
    
    .row.justify-content-center
      .col-8.justify-content-center.mt-5
        .cajon.color-secundario.p-4
          p #[i Dentro de este mismo instrumento cada nivel de servicio se evalúa utilizando una escala distinta. La zona de tolerancia se encuentra entre las expectativas del usuario y el nivel adecuado de servicio y representa el rango de calidad que el consumidor considera aceptable.]

    separador

    #t_1_4.titulo-segundo.color-acento-contenido
      h2.mt-3 1.4 Momentos de verdad 
    
    .row
      .bloque-texto-b
        .bloque-texto-b__texto
          p.mb-0 Son todos los momentos (buenos y malos) en los que el cliente entra en contacto con la organización, obteniendo una percepción frente a esta. La empresa puede recibir la opinión y calificación del usuario con relación al servicio recibido y su calidad para posteriormente actuar de manera ágil frente a cualquier imprevisto; adicionalmente, sirve para mantener actualizadas las estrategias de servicio al cliente enfocadas en la experiencia del usuario. De esta forma, la actitud de los empleados frente a estos momentos de verdad, lo son todo, por ello, cada empresa debe pensar como un cliente y actuar bajo valores como la empatía, la honestidad, la responsabilidad y la buena comunicación. 
    
    .row.mt-5
      p Ejemplo de un momento de verdad en un evento:
    
    .row.justify-content-around.align-items-right.mt-5
      .col-lg-3.zIndexCol.col-xs-10
        figure.imagenRedonda
          img(src='@/assets/curso/temas/tema1/tema1-img13.png', alt='Texto que describa la imagen')
      .col-lg-9
        .tarjeta.colorTab.p-2.md-5
          .row.justify-content-center
            .col-lg-10
              p El ingreso de los asistentes es decisivo, pues genera una percepción de fluidez o de caos en las personas. Desde que el cliente busca la información para asistir al evento, el trato de los empleados debe mostrar atención y cordialidad. La actitud con que se reciba o se registre al usuario durante el evento, marcará su experiencia y con ello la posibilidad de regresar o no a un encuentro de la marca. 
              p Veamos cuáles son las claves de éxito que el organizador de eventos, o cualquier empresa de servicios debe tener en cuenta con respecto a los momentos de verdad.     
      .titulo-sexto.color-acento-contenido.mt-5
        .row.mb-2
          h5 Figura 2
        .row
          span #[i Claves de éxito, momentos de verdad]

    TabsC.color-primario
      .py-3.py-md-4(titulo="Buscar la recomendación de cliente")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img14.svg', alt='Texto que describa la imagen')
          .col-md-6
            h4 Buscar la recomendación de cliente
            p Reforzar lo que más valoran los usuarios, creará clientes felices y un voz a voz que impacte con muchos más resultados.
      .py-3.py-md-4(titulo="Establecer protocolos de atención")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img15.svg', alt='Texto que describa la imagen')
          .col-md-6
            h4 Establecer protocolos de atención
            p Los protocolos sirven para que los empleados estén preparados ante cualquier eventualidad y tengan clara la manera de asesorar al cliente de una manera amable.
      .py-3.py-md-4(titulo="Incluir requerimientos para mejorar la atención")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img16.png', alt='Texto que describa la imagen')
          .col-md-6
            h4 Incluir requerimientos para mejorar la atención
            p Indica a los trabajadores qué recursos pueden emplear, es decir, si están autorizados para ofrecer un descuento o realizar otra acción cuando un momento de verdad es negativo.
      .py-3.py-md-4(titulo="Priorizar las áreas de servicio")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img17.svg', alt='Texto que describa la imagen')
          .col-md-6
            h4 Priorizar las áreas de servicio
            p La empresa debe ofrecer capacitación sobre todo a los empleados de las áreas que tienen mayor contacto con el cliente como área de ventas, recepción, administración de redes sociales, #[i telemarketing] y sitio #[i web], y darles a conocer los procedimientos que transforman un momento malo en uno satisfactorio, para proteger la buena reputación del negocio.
      .py-3.py-md-4(titulo="Medir el nivel de satisfacción")
        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/temas/tema1/tema1-img18.svg', alt='Texto que describa la imagen')
          .col-md-6
            h4 Medir el nivel de satisfacción
            p La idea es comprobar si los clientes se fueron satisfechos con el servicio y para ello se pueden disponer ciertos canales como:
            p.mt-2 buzón de quejas y sugerencias virtual, sesiones de grupo para discutir un producto o servicio, encuestas al personal, aplicar cliente oculto, para saber cómo se comportan los empleados y cómo se dirigen a los clientes y encuesta de satisfacción al cliente.

    .tarjeta.tarjeta--gris.my-2
      p Nota. Tomada y adaptada de: Hubspot (2021). Momentos de verdad en el servicio al cliente: concepto, tipos y ejemplos.

    .row.justify-content-around.align-items-center 
      .col-10
        .tarjeta.color-primario.p-3.mb-5
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/tema1/tema1-img19.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Plantillas para poner al cliente en primer lugar
                  p.text-small Para ampliar el tema por favor 
                .col-sm-auto
                  a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/plantillas-para-poner-al-cliente-en-primer-lugar.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-file-download


</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
