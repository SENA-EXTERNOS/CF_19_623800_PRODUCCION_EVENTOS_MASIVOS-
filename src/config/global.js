export default {
  global: {
    componenteFormativo:
      'Estrategias de evaluación de satisfacción del cliente',
    descripcionCurso:
      'La satisfacción de un cliente no solo se da por la calidad o economía en lo que ofrece, sino por los beneficios y experiencias que engloba la interacción con la marca. Cuando se aplica una evaluación y mejora continua, se crean negocios sostenibles frente a los desafíos que plantea la actividad empresarial.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
      {
        clases: ['banner-principal-decorativo-6'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-6.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicio al cliente',
        desarrolloContenidos: true,
        subMenu: [],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Herramientas de verificación del servicio',
        desarrolloContenidos: true,
        subMenu: [],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema:
        'Evaluación de la calidad en el servicio a través del modelo SERVQUAL en los museos de la ciudad de Puebla, México',
      referencia:
        'Acle Mena, R; Santiesteban López, N; Herrera Guzmán, S; Morales, A (2016). Evaluación de la calidad en el servicio a través del modelo SERVQUAL en los museos de la ciudad de Puebla, México. Revista Interamericana de Medioambiente y Turismo. 12, 1, pp2-16.',
      tipo: 'Artículo',
      link: 'https://dialnet.unirioja.es/servlet/articulo?codigo=5764734',
    },
    {
      tema: 'Norma ISO 19011',
      referencia:
        'ISO (2018). Norma Internacional ISO 19011: Directrices para la auditoría de los sistemas de gestión.',
      tipo: 'Norma',
      link:
        'https://www.cecep.edu.co/documentos/calidad/norma-iso-19011-2018.pdf ',
    },
    {
      tema: 'Norma ISO 9001',
      referencia: 'ISO (2008). Norma Técnica Colombiana ISO 9001.',
      tipo: 'Norma',
      link: 'https://www.cecep.edu.co/documentos/calidad/ISO-9001-2008.pdf ',
    },
    {
      tema: 'Norma ISO 9000',
      referencia:
        'ISO (2015). Norma Internacional ISO 9000: sistemas de gestión de la calidad — Fundamentos y vocabulario.',
      tipo: 'Norma',
      link: 'https://www.iso.org/obp/ui/#iso:std:iso:9000:ed-4:v1:es',
    },
    {
      tema: 'Normas Técnicas de Sostenibilidad NTS-TS 006-2',
      referencia:
        'ICONTEC (2012). Normas Técnicas de Sostenibilidad NTS-TS 006-2.',
      tipo: 'Norma',
      link:
        'https://www.cotelcotolima.com/wp-content/normatividad/sostenibilidad/NTS%20-%20TS%20006-2.pdf ',
    },
    {
      tema: 'Normas Técnicas de Sostenibilidad NTS-TS 006-1',
      referencia:
        'ICONTEC (2012). Normas Técnicas de Sostenibilidad NTS-TS 006-1.',
      tipo: 'Norma',
      link:
        'https://www.cotelcotolima.com/wp-content/normatividad/sostenibilidad/NTS%20-%20TS%20006-1.pdf ',
    },
  ],
  glosario: [
    {
      termino: 'Atención al cliente',
      significado:
        'se centra en resolver los problemas que los clientes han identificado. La clave de la asistencia es proporcionar los medios y los métodos para solucionar el problema o la preocupación en cuestión.',
    },
    {
      termino: 'Ciclo del servicio',
      significado:
        'puntos de contacto a través de los cuales el cliente pasa, desde la interacción inicial hasta convertirse en un consumidor fiel de la marca.',
    },
    {
      termino: 'Cliente',
      significado:
        'Es una persona natural o jurídica que lleva a cabo una o más transacciones comerciales llamadas compras.',
    },
    {
      termino: 'Cultura organizacional',
      significado:
        'patrón general de conducta, creencias y valores compartidos por los miembros de una organización  (Rojas Romero, 2005).',
    },
    {
      termino: 'Eficacia',
      significado:
        'consecución de objetivos; logro de los efectos deseados  (Rojas Romero, 2005).',
    },
    {
      termino: 'Eficiencia',
      significado:
        'logro de los fines con la menor cantidad de recursos; el logro de objetivos al menor costo u otras consecuencias no deseadas (Rojas Romero, 2005).',
    },
    {
      termino: 'Estrategia',
      significado:
        'Son las reglas que buscan una acción óptima para la empresa en cada momento. Normalmente abarca los objetivos, metas, fines, política y programación de la organización.',
    },
    {
      termino: 'Experiencia del cliente',
      significado:
        'Es la suma de todos los contactos, desde el descubrimiento e investigación de un producto hasta su compra, pasando por su uso real y su seguimiento por parte de la marca.',
    },
    {
      termino: 'Norma de calidad',
      significado:
        'Documento que explica las especificaciones o características que debe tener un servicio o un producto para ser garantizado como óptimo dentro de la organización. ',
    },
    {
      termino: 'Servicio al cliente',
      significado:
        'Prevé los problemas que pueden tener los clientes y trata de resolverlos de forma preventiva. Se centra en detectar los problemas desde el principio, evitando que se agraven.',
    },
  ],
  referencias: [
    {
      referencia:
        'Alfonso Yanelys. (2019). Servicio: qué es, características, clasificación y tipos. Recuperado de',
      link:
        'https://www.gestiopolis.com/servicio-que-es-caracteristicas-clasificacion-y-tipos/',
    },
    {
      referencia:
        'Arellano Díaz, H (2017). La calidad en el servicio como ventaja competitiva. Ciencias económicas y empresariales. 3, pp. 72-83',
      link:
        'http://148.202.167.116:8080/jspui/bitstream/123456789/3194/1/Calidad_servicio.pdf',
    },
    {
      referencia:
        'Cervantes, G; Muñoz, G y Alma Delia (2020). El trabajo en equipo y su efecto en la calidad del servicio a clientes. Revista Espacios. 41-14 p 27.',
      link: 'http://ww.revistaespacios.com/a20v41n14/a20v41n14p27.pdf',
    },
    {
      referencia:
        'Hubspot (2021). Momentos de verdad en el servicio al cliente: concepto, tipos y ejemplos.',
      link:
        'https://blog.hubspot.es/service/momentos-de-verdad-servicio-al-cliente',
    },
    {
      referencia: 'ICONTEC (sf). Certificación de Turismo Sostenible.',
      link:
        'https://www.icontec.org/eval_conformidad/certificacion-de-turismo-sostenible/',
    },
    {
      referencia: 'ISO (2015). ¿Qué son las normas ISO y cuál es su finalidad?',
      link:
        'https://www.isotools.org/2015/03/19/que-son-las-normas-iso-y-cual-es-su-finalidad/ ',
    },
    {
      referencia:
        'ISO (2018). Norma Internacional ISO 19011: Directrices para la auditoría de los sistemas de gestión.',
      link:
        'https://www.cecep.edu.co/documentos/calidad/norma-iso-19011-2018.pdf',
    },
    {
      referencia: 'Montejano (2008). Calidad en carne propia.',
      link:
        'https://www.researchgate.net/publication/237038725_Calidad_en_carne_propia',
    },
    {
      referencia:
        'Monsalve y Hernández (2015). Gestión de la calidad del servicio en la Hotelería como elemento clave en el desarrollo de destinos turísticos sostenibles: Caso Bucaramanga. Revista Escuela de Administración de Negocios.',
      link: '',
    },
    {
      referencia:
        'Muñoz Benavides, G (2017). Análisis de la calidad del servicio del hotel perla verde de la ciudad de esmeraldas. Tesis de grado. Pontificia Universidad Católica del Ecuador.',
      link:
        'https://repositorio.pucese.edu.ec/bitstream/123456789/1116/1/MU%c3%91OZ%20BENAVIDES%20GIRA.pdf',
    },
    {
      referencia: 'Oracle (sf). ¿Qué es el servicio al cliente? ',
      link: 'https://www.oracle.com/co/cx/service/what-is-customer-service/',
    },
    {
      referencia:
        'Rojas Romero (2005). Glosario administración de empresas. recuperado de ',
      link:
        'https://www.gestiopolis.com/glosario-de-administracion-de-empresas/#:~:text=Eficiencia%3A%20logro%20de%20los%20fines,u%20otras%20consecuencias%20no%20deseadas.',
    },
    {
      referencia:
        'Unifikas (2021). ¿Cuáles son las diferencias entre las normas ISO 9000, ISO 9001 e ISO 9004?',
      link:
        'https://www.unifikas.com/es/noticias/cuales-son-las-diferencias-entre-las-normas-iso-9000-iso-9001-e-iso-9004#:~:text=Estas%20son%20las%20diferencias%20entre,9004%20de%20la%20mejora%20continua.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
