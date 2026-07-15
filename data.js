/* ==========================================================================
   data.js — all site copy, in three languages.
   Edit the text inside the quotes to update the site. Nothing else
   needs to change unless you're adding or removing a whole section.
   ========================================================================== */

const SITE = {

  name: "Andrea Luque Martín",

  /* Sidebar footer */
  email: "andrealuque04@gmail.com",
  instagram: "https://instagram.com/",
  linkedin: "https://linkedin.com/",

  /* Path to a downloadable CV. Drop a PDF at assets/cv/ and point this
     at it (one per language works too, e.g. "assets/cv/cv-en.pdf"). */
  cvPdf: "assets/cv/andrea-luque-martin-cv.pdf",

  content: {

    /* ------------------------------------------------------------------ */
    en: {
      langLabel: "EN",
      role: "Cultural Manager and Curator",

      nav: {
        home: "Home",
        about: "About Me",
        curatorial: "Curatorial Work",
        skills: "Skills",
        cv: "CV / Experience",
        education: "Education",
        contact: "Contact"
      },

      home: {
        tagline: "Developing and coordinating cultural projects.",
        cta: "Berlin / Barcelona.",
        enter: "Enter site"
      },

    about: {
        heading: "About Me",
        body: [
          "I’m a cultural manager and curator based in Berlin, originally from Barcelona. I develop exhibitions and cultural programmes across contemporary art and music, working across curating, cultural production and artist management.",
          "I enjoy translating ideas into projects, accompanying them from the initial concept through to production and delivery. I collaborate with artists, institutions and independent spaces to build thoughtful, well-organised cultural experiences that bring people together through creativity.", "Across my work, I’m particularly interested in themes of transformation, memory, identity and belonging. These ideas shape the projects I develop, whether through exhibitions, concerts or public programmes, always with the aim of creating meaningful encounters between people, artistic practices and cultural contexts.", "While my recent work has centred on contemporary art and music, I’m increasingly interested in interdisciplinary programming that brings together different disciplines, communities and ways of experiencing culture."
        ]
      },

      curatorial: {
        heading: "Curatorial Work",
        intro: "A selection of exhibitions and curatorial projects, from concept to installation.",
        backToList: "Back to Curatorial Work",
        projects: [
           {
            slug: "the-space-in-between",
            title: "The Space in Between",
            venue: "Backhaus Projects, Berlin",
            date: "28 May 2025",
            summary: "An exhibition about thresholds, presence and spatial relations.",
            body: [
              "\"The Space in Between\" gathered a group of artists working across sculpture, installation and photography to examine the threshold — the doorway, the corridor, the pause — as both physical condition and psychological state.",
              "The exhibition was staged to move visitors through a sequence of transitional rooms, treating circulation itself as curatorial material."
            ],
            images: [
              { src: "images/curatorial/space-in-between-1.jpg", alt: "Installation view" },
              { src: "images/curatorial/space-in-between-2.jpg", alt: "Installation view, detail" }
            ],
            artists: ["Artist Name One", "Artist Name Two", "Artist Name Three"]
          },
          },
          {
            slug: "the-stretch-of-becoming",
            title: "The Stretch of Becoming",
            venue: "Pandora Art Gallery, Berlin",
            date: "7–9 November 2025",
            summary: "A curatorial reading of transformation, body and process.",
            body: [
              "\"The Stretch of Becoming\" brought together performance, video and textile-based work to explore transformation as an ongoing, unfinished process rather than a fixed outcome.",
              "The three-day format allowed the exhibition to shift and be re-installed across its run, mirroring the very idea of becoming it set out to address."
            ]
          },
          {
            slug: "as-the-light-fades",
            title: "As the Light Fades",
            venue: "Rossmann Culterim, Berlin",
            date: "27–29 March 2026",
            summary: "A proposal around time, light and disappearance.",
            body: [
              "\"As the Light Fades\" is a proposal built around natural light as a curatorial tool, with works installed to change in character as daylight moved through the space over three days.",
              "The exhibition treated disappearance not as loss but as a legitimate form of an artwork's completion."
            ]
          },
          {
            slug: "where-the-memory-got-tangled",
            title: "Where the Memory Got Tangled",
            venue: "Studio4000, Berlin",
            date: "26–28 June 2026",
            summary: "An exhibition inquiry into memory, trace and affect.",
            body: [
              "This exhibition inquiry into memory, trace and affect brought together artists whose work holds on to what is difficult to hold: a residue, a mark, an emotional register that resists clean narration.",
              "Rather than presenting memory as archive, the show approached it as something actively, imperfectly, remade each time it's revisited."
            ]
          }
        ]
      },

      skills: {
        heading: "Skills",
        groups: [
          {
            label: "Curatorial practice",
            items: ["Exhibition concept & development", "Artist selection and liaison", "Installation & production management", "Exhibition texts and public programming"]
          },
          {
            label: "Production & management",
            items: ["Artist & booking management", "Event production and logistics", "Venue and stakeholder communication", "Budgeting and administrative coordination"]
          },
          {
            label: "Communication",
            items: ["Digital and social media strategy", "Audience development", "Trilingual — English, Spanish, Catalan", "Written and editorial content"]
          }
        ]
      },

      cv: {
        heading: "CV / Experience",
        downloadCv: "Download CV (PDF)",
        entries: [
          { period: "2026 — Present", role: "Artist Manager & Independent Music Management", place: "Berlin", desc: "Artist representation, booking coordination, venue communication, and administrative support for independent musicians." },
          { period: "2025 — Present", role: "Freelance Curator & Cultural Producer", place: "Berlin", desc: "Independent curatorial projects, exhibition development, and event production from concept creation to installation and execution." },
          { period: "2026 (Mar–Jun)", role: "Event Production Intern, PLATTE Berlin", place: "Berlin", desc: "3-month internship focused on the production, logistics, and programming of cultural and fashion events." },
          { period: "2024 (Apr–Jul)", role: "Social Media Manager & Event Assistant, FRAMED Berlin", place: "Berlin", desc: "Event coordination, audience management, digital communication, and stakeholder relations." },
          { period: "2023 (May–Aug)", role: "Production & Event Assistant, La Sur Real Film Festival", place: "Berlin", desc: "Pre-production support and on-site coordination for an independent short film festival." },
          { period: "2022 (Feb–Jun)", role: "Research Assistant, Museo Picasso", place: "Barcelona", desc: "Bibliographic research, content development, and coordination of academic activities." }
        ]
      },

      education: {
        heading: "Education",
        entries: [
          { degree: "BA in Philosophy, specialization in Applied Philosophy", place: "Universitat Autònoma de Barcelona (UAB)", period: "2018–2022" },
          { degree: "MA in Cultural Management", place: "Universitat Oberta de Catalunya (UOC)", period: "2023–2025" }
        ]
      },

      contact: {
        heading: "Contact",
        intro: "Open to curatorial collaborations, exhibition proposals and cultural production roles.",
        location: "Barcelona → Berlin",
        emailLabel: "Email",
        instagramLabel: "Instagram",
        linkedinLabel: "LinkedIn"
      },

      meta: {
        title: "Andrea Luque Martín — Cultural Manager & Curator",
        description: "Portfolio of Andrea Luque Martín, cultural manager and curator based in Berlin. Curatorial work, exhibitions and cultural production between Barcelona and Berlin."
      }
    },

    /* ------------------------------------------------------------------ */
    es: {
      langLabel: "ES",
      role: "Gestora Cultural y Comisaria",

      nav: {
        home: "Inicio",
        about: "Sobre mí",
        curatorial: "Proyectos Curatoriales",
        skills: "Habilidades",
        cv: "CV / Experiencia",
        education: "Formación",
        contact: "Contacto"
      },

      home: {
        tagline: "Desarrollo y coordinación de proyectos culturales",
        cta: "Berlín / Barcelona",
        enter: "Entrar"
      },

      about: {
        heading: "Sobre mí",
        body: [
          "Soy gestora cultural y comisaria en Berlín, nacida en Barcelona. Desarrollo exposiciones y programas culturales en el ámbito del arte contemporáneo y la música, trabajando entre el comisariado, la producción cultural y la gestión de artistas.",
          "Disfruto transformando ideas en proyectos y acompañándolos desde la primera conversación hasta su realización. Colaboro con artistas, instituciones y espacios independientes para dar forma a experiencias culturales cuidadas, bien articuladas y pensadas para conectar a las personas a través de la cultura.", "Mi práctica está especialmente vinculada a cuestiones como la transformación, la memoria, la identidad y el arraigo. Estos temas atraviesan los proyectos que desarrollo, ya sean exposiciones, conciertos o programas públicos, buscando siempre generar nuevas conexiones entre las personas, las prácticas artísticas y los contextos culturales.", "Aunque mi trabajo reciente se ha centrado en el arte contemporáneo y la música, cada vez me interesa más desarrollar programas culturales multidisciplinares que reúnan diferentes disciplinas, comunidades y formas de experimentar la cultura."
        ]
      },

      curatorial: {
        heading: "Proyectos Curatoriales",
        intro: "Una selección de exposiciones y proyectos curatoriales, desde la idea hasta el montaje.",
        backToList: "Volver a Proyectos Curatoriales",
        projects: [
          {
            slug: "the-space-in-between",
            title: "El espacio intermedio",
            venue: "Backhaus Projects, Berlín",
            date: "28 de mayo de 2025",
            summary: "Una exposición sobre umbrales, presencia y relaciones espaciales.",
            body: [
              "«El espacio intermedio» reunió a un grupo de artistas que trabajan la escultura, la instalación y la fotografía para examinar el umbral —la puerta, el pasillo, la pausa— como condición física y también como estado psicológico.",
              "La exposición se planteó para que el visitante atravesara una secuencia de salas de transición, tratando la propia circulación como material curatorial."
            ]
          },
          {
            slug: "the-stretch-of-becoming",
            title: "El tramo del devenir",
            venue: "Pandora Art Gallery, Berlín",
            date: "7–9 de noviembre de 2025",
            summary: "Una lectura curatorial de la transformación, el cuerpo y el proceso.",
            body: [
              "«El tramo del devenir» reunió performance, vídeo y trabajo textil para explorar la transformación como proceso continuo e inacabado, y no como un resultado fijo.",
              "El formato de tres días permitió que la exposición se modificara y reinstalara a lo largo de su duración, reflejando la propia idea de devenir que planteaba."
            ]
          },
          {
            slug: "as-the-light-fades",
            title: "Mientras la luz se apaga",
            venue: "Rossmann Culterim, Berlín",
            date: "27–29 de marzo de 2026",
            summary: "Una propuesta sobre el tiempo, la luz y la desaparición.",
            body: [
              "«Mientras la luz se apaga» es una propuesta construida a partir de la luz natural como herramienta curatorial, con obras que cambiaban de carácter a medida que la luz del día recorría el espacio durante tres jornadas.",
              "La exposición trató la desaparición no como pérdida, sino como una forma legítima de completar una obra."
            ]
          },
          {
            slug: "where-the-memory-got-tangled",
            title: "Allí donde se enredó la memoria",
            venue: "Studio4000, Berlín",
            date: "26–28 de junio de 2026",
            summary: "Una exposición que indaga en la memoria, la huella y el afecto.",
            body: [
              "Esta indagación expositiva en la memoria, la huella y el afecto reunió a artistas cuyo trabajo se aferra a lo difícil de sostener: un residuo, una marca, un registro emocional que resiste la narración ordenada.",
              "En lugar de presentar la memoria como archivo, la muestra la abordó como algo que se rehace, de forma activa e imperfecta, cada vez que se revisita."
            ]
          }
        ]
      },

      skills: {
        heading: "Habilidades",
        groups: [
          {
            label: "Práctica curatorial",
            items: ["Concepto y desarrollo expositivo", "Selección y relación con artistas", "Gestión de montaje y producción", "Textos de sala y programación pública"]
          },
          {
            label: "Producción y gestión",
            items: ["Gestión y booking de artistas", "Producción y logística de eventos", "Comunicación con espacios y stakeholders", "Presupuestos y coordinación administrativa"]
          },
          {
            label: "Comunicación",
            items: ["Estrategia digital y redes sociales", "Desarrollo de públicos", "Trilingüe — inglés, castellano, catalán", "Contenido escrito y editorial"]
          }
        ]
      },

      cv: {
        heading: "CV / Experiencia",
        downloadCv: "Descargar CV (PDF)",
        entries: [
          { period: "2026 — Actualidad", role: "Artist Manager y Gestión Musical Independiente", place: "Berlín", desc: "Representación de artistas, coordinación de booking, comunicación con salas y apoyo administrativo a músicos independientes." },
          { period: "2025 — Actualidad", role: "Comisaria y Productora Cultural Freelance", place: "Berlín", desc: "Proyectos curatoriales independientes, desarrollo expositivo y producción de eventos desde la idea hasta el montaje y ejecución." },
          { period: "2026 (mar–jun)", role: "Becaria de Producción de Eventos, PLATTE Berlin", place: "Berlín", desc: "Prácticas de 3 meses centradas en la producción, logística y programación de eventos culturales y de moda." },
          { period: "2024 (abr–jul)", role: "Social Media Manager y Asistente de Eventos, FRAMED Berlin", place: "Berlín", desc: "Coordinación de eventos, gestión de públicos, comunicación digital y relación con stakeholders." },
          { period: "2023 (may–ago)", role: "Asistente de Producción y Eventos, La Sur Real Film Festival", place: "Berlín", desc: "Apoyo en preproducción y coordinación in situ de un festival de cortometrajes independiente." },
          { period: "2022 (feb–jun)", role: "Auxiliar de Investigación, Museo Picasso", place: "Barcelona", desc: "Investigación bibliográfica, desarrollo de contenidos y coordinación de actividades académicas." }
        ]
      },

      education: {
        heading: "Formación",
        entries: [
          { degree: "Grado en Filosofía, itinerario de Filosofía Aplicada", place: "Universitat Autònoma de Barcelona (UAB)", period: "2018–2022" },
          { degree: "Máster en Gestión Cultural", place: "Universitat Oberta de Catalunya (UOC)", period: "2023–2025" }
        ]
      },

      contact: {
        heading: "Contacto",
        intro: "Abierta a colaboraciones curatoriales, propuestas expositivas y puestos de producción cultural.",
        location: "Barcelona → Berlín",
        emailLabel: "Correo",
        instagramLabel: "Instagram",
        linkedinLabel: "LinkedIn"
      },

      meta: {
        title: "Andrea Luque Martín — Gestora Cultural y Comisaria",
        description: "Portfolio de Andrea Luque Martín, gestora cultural y comisaria afincada en Berlín. Proyectos curatoriales, exposiciones y producción cultural entre Barcelona y Berlín."
      }
    },

    /* ------------------------------------------------------------------ */
    ca: {
      langLabel: "CA",
      role: "Gestora Cultural i Comissària ",

      nav: {
        home: "Inici",
        about: "Sobre mi",
        curatorial: "Projectes Curatorials",
        skills: "Habilitats",
        cv: "CV / Experiència",
        education: "Formació",
        contact: "Contacte"
      },

      home: {
        tagline: "Desenvolupament i coordinació de projectes culturals",
        cta: "Berlin / Barcelona",
        enter: "Entrar"
      },

      about: {
        heading: "Sobre mi",
        body: [
          "Soc gestora cultural i comissària a Berlín, nascuda a Barcelona. Desenvolupo exposicions i programes culturals en l’àmbit de l’art contemporani i la música, treballant entre el comissariat, la producció cultural i la gestió d’artistes.",
          "M’agrada transformar idees en projectes i acompanyar-los des de la primera conversa fins a la seva realització. Col·laboro amb artistes, institucions i espais independents per donar forma a experiències culturals cuidades, ben articulades i pensades per connectar les persones a través de la cultura.", "La meva pràctica està especialment vinculada a qüestions com la transformació, la memòria, la identitat i l’arrelament. Aquests temes travessen els projectes que desenvolupo, ja siguin exposicions, concerts o programes públics, amb la voluntat de generar noves connexions entre les persones, les pràctiques artístiques i els contextos culturals.", "Tot i que la meva feina recent s’ha centrat en l’art contemporani i la música, cada vegada m’interessa més desenvolupar programes culturals multidisciplinaris que facin dialogar diferents disciplines, comunitats i maneres de viure la cultura."
        ]
      },

      curatorial: {
        heading: "Projectes Curatorials",
        intro: "Una selecció d'exposicions i projectes curatorials, des de la idea fins al muntatge.",
        backToList: "Tornar a Projectes Curatorials",
        projects: [
          {
            slug: "the-space-in-between",
            title: "L'espai intermedi",
            venue: "Backhaus Projects, Berlín",
            date: "28 de maig de 2025",
            summary: "Una exposició sobre llindars, presència i relacions espacials.",
            body: [
              "«L'espai intermedi» va reunir un grup d'artistes que treballen l'escultura, la instal·lació i la fotografia per examinar el llindar —la porta, el passadís, la pausa— com a condició física i també com a estat psicològic.",
              "L'exposició es va plantejar perquè el visitant travessés una seqüència de sales de transició, tractant la mateixa circulació com a material curatorial."
            ]
          },
          {
            slug: "the-stretch-of-becoming",
            title: "El tram de l'esdevenir",
            venue: "Pandora Art Gallery, Berlín",
            date: "7–9 de novembre de 2025",
            summary: "Una lectura curatorial de la transformació, el cos i el procés.",
            body: [
              "«El tram de l'esdevenir» va reunir performance, vídeo i treball tèxtil per explorar la transformació com a procés continu i inacabat, i no com un resultat fix.",
              "El format de tres dies va permetre que l'exposició es modifiqués i es reinstal·lés al llarg de la seva durada, reflectint la mateixa idea d'esdevenir que plantejava."
            ]
          },
          {
            slug: "as-the-light-fades",
            title: "Mentre la llum s'apaga",
            venue: "Rossmann Culterim, Berlín",
            date: "27–29 de març de 2026",
            summary: "Una proposta sobre el temps, la llum i la desaparició.",
            body: [
              "«Mentre la llum s'apaga» és una proposta construïda a partir de la llum natural com a eina curatorial, amb obres que canviaven de caràcter a mesura que la llum del dia recorria l'espai durant tres jornades.",
              "L'exposició va tractar la desaparició no com a pèrdua, sinó com una forma legítima de completar una obra."
            ]
          },
          {
            slug: "where-the-memory-got-tangled",
            title: "Allà on es va enredar la memòria",
            venue: "Studio4000, Berlín",
            date: "26–28 de juny de 2026",
            summary: "Una exposició que indaga en la memòria, l'empremta i l'afecte.",
            body: [
              "Aquesta indagació expositiva en la memòria, l'empremta i l'afecte va reunir artistes l'obra dels quals s'aferra a allò difícil de sostenir: un residu, una marca, un registre emocional que resisteix la narració ordenada.",
              "En comptes de presentar la memòria com a arxiu, la mostra la va abordar com quelcom que es refà, de manera activa i imperfecta, cada vegada que es revisita."
            ]
          }
        ]
      },

      skills: {
        heading: "Habilitats",
        groups: [
          {
            label: "Pràctica curatorial",
            items: ["Concepte i desenvolupament expositiu", "Selecció i relació amb artistes", "Gestió de muntatge i producció", "Textos de sala i programació pública"]
          },
          {
            label: "Producció i gestió",
            items: ["Gestió i booking d'artistes", "Producció i logística d'esdeveniments", "Comunicació amb espais i stakeholders", "Pressupostos i coordinació administrativa"]
          },
          {
            label: "Comunicació",
            items: ["Estratègia digital i xarxes socials", "Desenvolupament de públics", "Trilingüe — anglès, castellà, català", "Contingut escrit i editorial"]
          }
        ]
      },

      cv: {
        heading: "CV / Experiència",
        downloadCv: "Descarregar CV (PDF)",
        entries: [
          { period: "2026 — Actualitat", role: "Artist Manager i Gestió Musical Independent", place: "Berlín", desc: "Representació d'artistes, coordinació de booking, comunicació amb sales i suport administratiu a músics independents." },
          { period: "2025 — Actualitat", role: "Comissària i Productora Cultural Freelance", place: "Berlín", desc: "Projectes curatorials independents, desenvolupament expositiu i producció d'esdeveniments des de la idea fins al muntatge i execució." },
          { period: "2026 (mar–jun)", role: "Becària de Producció d'Esdeveniments, PLATTE Berlin", place: "Berlín", desc: "Pràctiques de 3 mesos centrades en la producció, logística i programació d'esdeveniments culturals i de moda." },
          { period: "2024 (abr–jul)", role: "Social Media Manager i Assistent d'Esdeveniments, FRAMED Berlin", place: "Berlín", desc: "Coordinació d'esdeveniments, gestió de públics, comunicació digital i relació amb stakeholders." },
          { period: "2023 (mai–ago)", role: "Assistent de Producció i Esdeveniments, La Sur Real Film Festival", place: "Berlín", desc: "Suport en preproducció i coordinació in situ d'un festival de curtmetratges independent." },
          { period: "2022 (feb–jun)", role: "Auxiliar d'Investigació, Museo Picasso", place: "Barcelona", desc: "Recerca bibliogràfica, desenvolupament de continguts i coordinació d'activitats acadèmiques." }
        ]
      },

      education: {
        heading: "Formació",
        entries: [
          { degree: "Grau en Filosofia, itinerari de Filosofia Aplicada", place: "Universitat Autònoma de Barcelona (UAB)", period: "2018–2022" },
          { degree: "Màster en Gestió Cultural", place: "Universitat Oberta de Catalunya (UOC)", period: "2023–2025" }
        ]
      },

      contact: {
        heading: "Contacte",
        intro: "Oberta a col·laboracions curatorials, propostes expositives i llocs de producció cultural.",
        location: "Barcelona → Berlín",
        emailLabel: "Correu",
        instagramLabel: "Instagram",
        linkedinLabel: "LinkedIn"
      },

      meta: {
        title: "Andrea Luque Martín — Gestora Cultural i Comissària",
        description: "Portfoli d'Andrea Luque Martín, gestora cultural i comissària establerta a Berlín. Projectes curatorials, exposicions i producció cultural entre Barcelona i Berlín."
      }
    }
  }
};
