<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Herramientas de verificación del servicio

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-8.justify-content-center
          p Para satisfacer las necesidades de los clientes es necesario contar con información sobre sus percepciones, necesidades y expectativas, que se convierten en insumos básicos para determinar el nivel de calidad recibido por los usuarios.
          .bloque-texto-tema2
            .bloque-texto-tema2__texto
              p.mb-0 El cliente consigue productos o servicios con las mismas características e igualdad de precio entre competidores, por ello, la única manera de generar una real diferencia es enfocándose en la calidad, la cual debe superar los niveles de exigencia del usuario. Es necesario medir sus resultados, para lo cual existen diferentes métodos que arrojaran datos importantes para mejorar el servicio y continuar ofreciendo una excelente calidad.              
        .col-lg-4
          figure
            img.mt-3(src='@/assets/curso/temas/tema2/tema2-img1.svg', alt='Texto que describa la imagen').img-animacion4
    
    .row.justify-content-around.align-items-center
      .col-10
        .cajon.color-secundario2.p-4.mt-5
          p Se han realizado varios estudios sobre modelos de medición de la gestión de la calidad y otros modelos de medición de la calidad del servicio. El primero es responsable de la implantación de certificados de calidad como la norma ISO 9001, la eficiencia del modelo EFQM u otros análisis de gestión de la calidad. El segundo tiene como objetivo principal medir el nivel de calidad del servicio y determinar qué características del servicio prestado influyen en las percepciones y expectativas de los clientes que reciben el mismo servicio.
    
    separador

    #t_2_1.titulo-segundo.color-acento-contenido
      h2 2.1 Herramientas de medición del servicio

    .row.justify-content-around.align-items-center
      p Conocer la percepción de los clientes, es la clave para que una organización se desempeñe de manera correcta en el mercado y se enfrente más fácilmente a los cambios constantes de su entorno. 
      p.mt-2 Un cliente insatisfecho rara vez dará una segunda oportunidad a la organización, por ello, es preciso aprender a gestionar la experiencia del cliente como medida para retenerlo y generar una recompra.
      p.mt-2 A continuación, se brindan diferentes herramientas para medir el servicio y la satisfacción de los usuarios:

    .slyderB_bg_01.px-5.py-3.mb-5
      SlyderA(tipo="b")
        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0.py-3
            h3.mt-2 SERVQUAL:
            p es un método que mide la calidad del servicio mediante una encuesta que tiene en cuenta estos 5 elementos:
            .col-sm.mb-5.mb-sm-0
              ol.lista-ul--color
                li 
                  i.fas.fa-check
                  Item Entrega del servicio de manera consistente y confiable.
                li 
                  i.fas.fa-check
                  Item Conocimiento de los empleados con respecto al producto o servicio que ofrecen.
                li 
                  i.fas.fa-check
                  Item Presentación visual que abarca el producto, el establecimiento, el vestuario y la higiene del empleado.
                li 
                  i.fas.fa-check
                  Item Nivel de cortesía y preocupación del empleado por atender las necesidades del cliente.    
                li 
                  i.fas.fa-check
                  Item Capacidad de respuesta ágil del empleado para resolver cualquier requerimiento del cliente.       
          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img2.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Cliente oculto:
            p consiste en contratar a una persona externa a la empresa, que actuará como “cliente encubierto” para corroborar la calidad del servicio. Este agente encubierto se encarga de hacer una evaluación teniendo en cuenta diferentes criterios con la intención de ofrecer un informe final, donde se detallen aspectos como la atención de los empleados, el tipo de servicio que ofrecen, entre otros, y a partir de allí evaluar la calidad del servicio y aplicar correctivos de ser necesario.
          .col-md-6
            figure
             img(src='@/assets/curso/temas/tema2/tema2-img3.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Monitoreo en redes sociales:
            p gracias a la tecnología y al auge que han tenido estas plataformas, este modelo de medición ha tenido mayor aceptación, ya que son un medio de comunicación popular que le permite a los usuarios de diferentes marcas expresar sus frustraciones e inconformidades con relación a un servicio. Esta herramienta se convierte en un medio ideal para evaluar de forma inmediata la calidad percibida por el cliente. 
          .col-md-6
            figure
             img(src='@/assets/curso/temas/tema2/tema2-img4.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Encuestas online:
            p son fáciles de implementar y es posible recolectar una gran cantidad de información de los clientes. Se pueden usar preguntas con opción múltiple de respuesta ya que son fáciles de cuantificar y poder expresar la información a través de gráficos. 
          .col-md-6
            figure
             img(src='@/assets/curso/temas/tema2/tema2-img5.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Grupos focales:
            p son reuniones planificadas donde participan varios clientes con el fin de conocer su percepción frente a un producto o servicio puntual que ya se lanzó al mercado o que está en proceso de planeación o prototipado. Teniendo en cuenta las opiniones recibidas, se realizan cambios y mejoras al producto o servicio. 
          .col-md-6
            figure
             img(src='@/assets/curso/temas/tema2/tema2-img6.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Indicadores de desempeño: 
            p permiten monitorear cuantitativamente la medida en la que la empresa ha logrado los objetivos y con base en ello, tomar acciones para el mejoramiento continuo.
          .col-md-6
            figure
             img(src='@/assets/curso/temas/tema2/tema2-img7.svg', alt='Texto que describa la imagen')

        .row.justify-content-around.align-items-center
          .col-md-6.mb-4.mb-md-0
            h2 Buzón de sugerencias:
            p a través de formularios se invita al usuario a calificar el servicio recibido. Son una excelente herramienta para recibir las quejas o comentarios que ayudarán a mejorar la empresa.
          .col-md-6
            figure
             img(src='@/assets/curso/temas/tema2/tema2-img8.svg', alt='Texto que describa la imagen')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido
      h2 2.2 Normas de Calidad
    
    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-7.justify-content-center
          p La calidad es el resultado del esfuerzo conjunto de un grupo de personas orientadas hacia un fin común mediante la aplicación de sus virtudes, tanto técnicas como personales y administrativas, para lograr la producción de bienes o servicios. Estas dan el máximo de satisfacción de los consumidores al menor costo posible, aplicando las herramientas de control disponibles para este propósito. (Montejano, 2008, p.21).
          .cajon.color-secundario2.p-4
            p Existen muchos autores que han hablado sobre la calidad y sus características, sin embargo, todos coinciden en que el objetivo fundamental de la calidad recae en la satisfacción del cliente. Arellano Díaz, H (2017) menciona que “un cliente queda satisfecho si se le ofrece todo lo que él esperaba encontrar y más. Sin embargo, al estar determinada esta satisfacción por aspectos subjetivos como las expectativas y la percepción, la calidad no siempre se puede cuantificar o definir en términos objetivos, lo que hace necesario a las organizaciones el retroalimentarse en forma constante con la percepción de los clientes respecto a su servicio” (P. 77).
        .col-lg-5
          figure
            img.mt-3(src='@/assets/curso/temas/tema2/tema2-img9.svg', alt='Texto que describa la imagen').img-animacion5

    .row.justify-content-around.aling-items-center.mb-5.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img10.svg')})`}")
        .bloque-texto-g__texto.p-4
          p.mb-0 Cuando una empresa cuenta con un alto nivel de calidad en el servicio que ofrece los beneficios son considerables, se refleja en su participación en el mercado y diferenciación frente a la competencia; así mismo, se obtiene lealtad de clientes, atracción de nuevos y una mayor productividad y motivación del personal por seguir trabajando de buena manera. Como resultado de esto, la gestión de la calidad en el servicio debe ser el foco principal de estrategia de cada empresa, el cliente debe tener la atención de tal manera que el negocio pueda ser percibido por sus dirigentes, desde la perspectiva de sus usuarios.

    .tarjeta.color-adicional-1.mt-5
      .row.justify-content-center
        .col-lg-5
          figure
            img.mt-5(src='@/assets/curso/temas/tema2/tema2-img11.svg', alt='Texto que describa la imagen')        
        .col-lg-7.justify-content-center
          p A este respecto, González, H. (2015) citado por Cervantes, G; Muñoz, G y Alma Delia (2020) menciona que: “el enfoque principal de gestión de la calidad es satisfacer las necesidades del cliente y esforzarse para superar sus expectativas”; dado lo anterior, existen diferentes normas de calidad que buscan mejorar el desempeño de las organizaciones, teniendo como base reglas o directrices que se deben cumplir para los productos o servicios respondan a los requerimientos de los usuarios. Estas normas se pueden enfocar en diferentes aspectos de calidad como el diseño, el uso, el servicio post-venta entre otros; sin embargo, todas están diseñadas para lograr una mayor satisfacción del cliente. Entre sus objetivos se pueden encontrar:
          .col-sm.mb-5.mb-sm-0
            ol.lista-ul--color
              li 
                i.fas.fa-check
                Item Definir las características mínimas de un producto o servicio.
              li 
                i.fas.fa-check
                Item Disminuir costos.
              li 
                i.fas.fa-check
                Item Mejorar la seguridad al utilizar los productos.
              li 
                i.fas.fa-check
                Item Unificar productos para facilitar su comercialización.
              li 
                i.fas.fa-check
                Item CProteger intereses del consumidor.

    .row.justify-content-center
      h2 Normas ISO 9000, 9001, 19011.
      
      .bloque-texto-tema3
        .bloque-texto-tema3__texto
          p.mb-0 Las normas ISO están orientadas a ordenar la gestión de una empresa en sus distintos ámbitos. Aunque su implementación es de carácter voluntario, han ganado gran reconocimiento y aceptación internacional debido a la importancia que ha tomado la figura y la opinión de los consumidores. El Organismo Internacional de Estandarización (ISO) es quien establece las normas ISO que están conformadas por estándares y guías relacionados con sistemas y herramientas específicas de gestión que pueden ser aplicadas en todo tipo de organización.
      
      .col-lg-10.mt-2.md-6
        figure
          img(src='@/assets/curso/temas/tema2/tema2-img12.svg', alt='Texto que describa la imagen')

    .row.justify-content-around.align-items-center
      .cajon.color-secundario2.p-4.mt-5
        p Las normas ISO sirven para asegurar el cumplimiento de los objetivos de calidad de los productos y servicios de una organización. Cuando una empresa está certificada con alguna de estas normas, afianza su posición en el mercado accediendo a nuevos espacios internacionales gracias a la confianza que genera en sus clientes, y logra mejorar la imagen de sus productos y servicios. A nivel interno, la certificación sirve para conocer los puntos de mejora, sostener la eficacia en los procesos, aumentar la motivación del personal y promover el uso eficiente de los recursos.
    
    .row.justify-content-around.align-items-center
      .col-10
        .tarjeta-1.mt-5
          .row.justify-content-center
            .col-lg-3.imgCambio2
            .col-lg-9
              .bloque-texto-tema4
                .bloque-texto-tema4__texto
                  p.mb-0 Existen muchas normas ISO que constantemente se actualizan y paralelamente aparecen otras nuevas. Para una mayor identificación y clasificación, se agrupan por familias o series con una nomenclatura específica, por ejemplo, la familia Gestión de Calidad (serie ISO 9000) son normas cuyo objetivo es homogeneizar los estándares de calidad de los productos o servicios de las organizaciones públicas y privadas, independientemente de su tamaño o actividad.

    .row
      p A continuación, tomando como base la información de Unifikas (2021) en su artículo frente a las diferencias entre las normas ISO 9000, ISO 9001 e ISO 9004, se presentan los enfoques de dichas normas:

    TabsA.color-acento-botones
      .tarjeta.colorTab.p-4(titulo="ISO 9000")
        h4 ISO 9000
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img14.svg', alt='Texto que describa la imagen')
          .col-xl-6
            p La norma ISO 9000:2015 establece los principios básicos y el vocabulario de un sistema de gestión de calidad. Conceptualiza la terminología para evitar dudas a la hora de verificar la calidad de los procesos de las compañías
      .tarjeta.colorTab.p-4(titulo="ISO 9001")
        h4 ISO 9001
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img15.svg', alt='Texto que describa la imagen')
          .col-xl-6
            p La norma ISO 9001:2015 habla de los requisitos mínimos para que un sistema de gestión de la calidad funcione de manera eficiente. Es la norma más importante ya que da cuenta de un mínimo estándar que las organizaciones deben cumplir para verificar la calidad de sus productos o servicios.  Esta norma debe ser respetada tanto para uso externo como interno.
      .tarjeta.colorTab.p-4(titulo="ISO 9004")
        h4 ISO 9004
        .row
          .col-xl-6.mb-4
            figure
              img(src='@/assets/curso/temas/tema2/tema2-img16.svg', alt='Texto que describa la imagen')
          .col-xl-6
            p La norma ISO 9004:2015 se enfoca en mejorar el desempeño en un sistema de gestión de calidad con la intención de hacer que las empresas alcancen un mayor rendimiento y resultados destacables. 

    .tarjeta.tarjeta--gris.mt-3
      p Referencia Nota. Unifikas (2021). ¿Cuáles son las diferencias entre las normas ISO 9000, ISO 9001 e ISO 9004?

    .row.justify-content-around.aling-items-center.mb-5.mt-5
      .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(:style="{'background-image': `url(${require('@/assets/curso/temas/tema2/tema2-img17.svg')})`}")
        .bloque-texto-g__texto.p-3
          p.text-small Adicional a las anteriores, encontramos también la Norma ISO 19011, la cual especifica las directrices para la auditoría de los sistemas de gestión. En el 2018 se crea la tercera versión de esta norma, enfocada en las auditorías internas y aquellas realizadas por las organizaciones a sus proveedores externos y a otras partes interesadas externas. Se busca aplicar este instrumento a un amplio rango de usuarios como lo son auditores, empresas que busquen implementar sistemas de gestión y aquellas organizaciones que necesitan realizar auditorías de sistemas de gestión por razones reglamentarias o contractuales. A pesar del enfoque anterior, este documento también puede ser aplicado para las empresas que desean desarrollar sus propios requisitos relacionados con auditorías.

    .row
      h2 Normas Técnicas de Sostenibilidad NTS-TS

    .tarjeta.color-adicional-1
      .row.justify-content-center
        .col-lg-7.justify-content-center.p-3
          p Las directrices para el desarrollo de unas correctas prácticas de gestión sostenible en el turismo se aplican a todos los destinos y también todos los subsectores que lo componen, incluso el turismo de masas. La sostenibilidad y el turismo están estrechamente relacionados ya que este sector impacta en todas las dimensiones básicas como lo son la económica, social y medioambiental, por ello, sus prácticas deben buscar un equilibrio adecuado entre esas tres dimensiones para asegurar la sostenibilidad en el largo plazo.
          .cajon.color-secundario2.p-3
            p Las normas técnicas de sostenibilidad son, por tanto, instrumentos creados por el ICONTEC (Instituto Colombiano de Normas Técnicas y Certificación) que impulsan el enfoque de desarrollo sostenible y de responsabilidad social en el sector turismo, en aspectos económicos, socioculturales, ambientales y de gestión. La certificación es aplicable a:
        .col-lg-5
          figure
            img.mt-5(src='@/assets/curso/temas/tema2/tema2-img18.svg', alt='Texto que describa la imagen')

    .row.justify-content-center
      SlyderF(columnas="col-lg-6 col-xl-4")
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj1.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-5.text-center Destinos turísticos – Área turística.<br>(NTS TS 001-01)
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj2.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-5.text-center Empresas de transporte terrestre turístico<br>(NTS TS 005)       
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj3.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-5.text-center Agencias de viajes<br>(NTS TS 003)
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj4.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-3.text-center Establecimientos de alojamiento y alojamiento (EAH). (NTS TS 002)<br>El cumplimiento de esta norma permite la obtención del Sello Ambiental Colombiano de conformidad con la reglamentación vigente.
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj5.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-5.text-center Establecimientos gastronómicos<br>(NTS TS 004)
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj6.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-5.text-center Organizadores profesionales y sedes para congresos, ferias y convenciones<br>(NTS TS 006-1 y NTS TS 006-2)
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema2/tema2-tarj7.svg' alt='AvatarTop')
          .tarjeta.color-acento-botones.p-4
            p.mt-5.text-center Empresas comercializadoras de esquemas de tiempo compartido y multipropiedad<br>(NTS TS 007)               

    .row.justify-content-around.align-items-center.mt-5
      p La organización de eventos se considera parte del sector turístico ya que su desarrollo aporta al crecimiento de un destino, mediante la movilización de turistas y visitantes, sin perder de vista que muchos eventos se constituyen en sí mismos como un atractivo turístico, como es el caso del Carnaval de barranquilla, la feria de las flores, entre otros ejemplos a nivel nacional.
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption VIDEO

    .row.justify-content-around.align-items-center
      .col-10
        .cajon.cajon.color-secundario3.p-4.mt-5
          p Para un estudio completo del tema, recuerde explorar todos los recursos que se encuentran disponibles en este componente formativo, y que encuentra en el menú principal, tales como material complementario, actividad didáctica, glosario, entre otros. 

                                 




</template>

<script>
export default {
  name: 'Tema2',
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
