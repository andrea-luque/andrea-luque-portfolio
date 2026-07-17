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
  cvPdf: "Andrea-Luque-Martin-cv.pdf",

  content: {

    /* ------------------------------------------------------------------ */
    en: {
      langLabel: "EN",
      role: "Cultural Manager and Curator",

      nav: {
        home: "Home",
        about: "About Me",
        curatorial: "Curatorial Work",
        practice: "Practice",
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
          "I enjoy translating ideas into projects, accompanying them from the initial concept through to production and delivery. I collaborate with artists, institutions and independent spaces to build thoughtful, well-organised cultural experiences that bring people together through creativity.",
          "Across my work, I’m particularly interested in themes of transformation, memory, identity and belonging. These ideas shape the projects I develop, whether through exhibitions, concerts or public programmes, always with the aim of creating meaningful encounters between people, artistic practices and cultural contexts.",
          "While my recent work has centred on contemporary art and music, I’m increasingly interested in interdisciplinary programming that brings together different disciplines, communities and ways of experiencing culture."
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
              "The Space In Between is a group exhibition that encourages you to pause and notice the small, delicate moments of change that shape our lives. In a world that rarely slows down, these in-between spaces, such as those between the digital and the physical, presence and absence, or noise and silence, can feel uncertain but also meaningful.",
              "The works in this show explore what it means to live with changing identities and ongoing transformation. They consider how our experiences are shaped by technology, movement, and our relationships, often mixing what is real with what is imagined.",
              "Here, you will find pieces that reflect the tension of moving between different worlds and the surprising beauty that can appear when you slow down and find some quiet.",
              "The Space In Between isn’t just about uncertainty, it’s about possibility. This exhibition offers a gentle space for reflection, for feeling, and maybe even for rediscovering yourself in the moments where everything slows down and new meanings can take shape."
            ],
            images: [
              { src: "images/curatorial/space-in-between-1.jpg", alt: "Installation view", caption: "Artist Name One — installation view, 2025" },
              { src: "images/curatorial/space-in-between-2.jpg", alt: "Installation view, detail", caption: "Artist Name Two — detail, 2025" },
              { src: "images/curatorial/space-in-between-3.jpg", alt: "Installation view, wide", caption: "Artist Name Three — wide shot, 2025" }
            ],
            artists: ["Ingrato", "Jana Smetanina", "Johanna Grotzke", "Johanna Dreyer", "Koko Meister", "Lesia", "Liisi Hint", "Maria Ladapoulos", "Pascual Candel", "Sadie Weis"]
          },
          {
            slug: "the-stretch-of-becoming",
            title: "The Stretch of Becoming",
            venue: "Pandora Art Gallery, Berlin",
            date: "7–9 November 2025",
            summary: "A curatorial reading of transformation, body and process.",
            body: [
              "The Stretch of Becoming explores the continual need and urge to stretch as a means of expansion, transformation, connection, and the ongoing construction of our lives. Stretching is never neutral — it holds both fear and fascination, both expansion and reduction. The inevitable ruptures and changes that emerge through this process define who we become, shaping identity, memory, and belonging in perpetual cycles of construction and reconstruction.",
              "The artists embrace transformation across personal, political, and spiritual dimensions. They reflect lived experiences of queerness, femininity, migration, racism, and neurodivergence — revealing the body, memory, and identity as elastic sites where fragility, endurance, and resilience coexist.",
              "Stretching here is both rupture and repair, comfort and discomfort, survival and imagination. The exhibition amplifies the elastic nature of human existence — where expansion carries both terror and wonder, and where becoming is never complete. It is a testament to endurance, reminding us that transformation is not a single act but an ongoing state of being."
            ],
            artists: ["Michalina Marta Cap", "Pascual Candel", "Carina Chang", "Onyx Chladilova", "Eva Fomitski", "Yunsun Noh", "Aduni Ogunsun", "Lesia", "Mariam Salah", "Isabella Sherwani Keeling", "Zoe Spehr", "Julieta Tetelbaum", "Hannah Wilder"]
          },
          {
            slug: "as-the-light-fades",
            title: "As the Light Fades",
            venue: "Rossmann Culterim, Berlin",
            date: "27–29 March 2026",
            summary: "A proposal around time, light and disappearance.",
            body: [
              "What happens when light disappears? What happens when the cables are cut, and darkness encroaches? The interruption of light can cause contrasting emotional and physical reactions. Sometimes distress and fear of the things unseen, and other times serenity and calmness.",
              "In science, the Ganzfeld Effect answers this as the brain’s reaction to sensory deprivation: when visual input collapses, the mind begins to generate its own images, movements, and internal landscapes. The absence of light does not create emptiness, rather it activates a different mode of seeing.",
              "This immediate interruption from the loss of light can cause distress but can also create calmness, prompting the brain to generate new movements — new forms of creation. In the exhibition, we aim to investigate these movements psychologically, physically, and artistically. How does this shift impact our perceptions, our memory, and our sense of the present? What does light change — and what does it create?",
              "Light activates latent memories and reshapes the way we observe what surrounds us. Through the artistic exploration of this concept — often through the use of reflections, shadows, or subtle shifts of brightness — As the Light Fades suggests that to look is also to remember. And that every change in light rewrites what we think we have already seen."
            ],
            artists: ["Serafima Bresles", "Théo Guézennec", "Jamal Khalili", "Angelina Lambrikht", "Mariia Lutsak", "Rory Malone", "robin c wolf", "p0brediabla"]
          },
          {
            slug: "where-the-memory-got-tangled",
            title: "Where the Memory Got Tangled",
            venue: "Studio4000, Berlin",
            date: "26–28 June 2026",
            summary: "An exhibition inquiry into memory, trace and affect.",
            body: [
              "There, Where Memory Became Entangled explores the intersection of two concepts that are central to the artistic practice of Raquel González Obregón: rootedness and memory.",
              "To understand rootedness is to understand how individuals remain tethered to a place, a history, and a people, even as both shift and evolve over time. Drawing on thinkers such as Simone Weil, rootedness is understood as a fundamental human need that connects us to a community through shared relationships, stories, and knowledge. It is shaped by what we inherit and what we continue to practice: everyday rituals, celebrations, and traditions passed down from one generation to the next. It is within these spaces that memory remains alive and finds new ways to manifest itself.",
              "The exhibition approaches memory from an intimate perspective, understanding it as one of the materials through which we construct our sense of self. Yet every personal memory also carries traces of familial, territorial, and collective histories that shape and inform it.",
              "At the meeting point of memory and rootedness emerges the net, the exhibition’s central element. Present both as metaphor and material object, it speaks to the bonds that sustain us: emotional connections, social fabrics, processes of transmission, and forms of mutual care. At the same time, it evokes the maritime landscapes and fishing traditions that form part of the artist’s inherited memory and that of her hometown, Santander. The net thus becomes an image of the visible and invisible structures that connect us to one another, to the places we inhabit, and to the histories that precede us.",
              "There, Where Memory Became Entangled seeks to make visible the threads that connect individual experience to collective memory, inviting reflection on the ways memories are transmitted, transformed, and continue to inhabit us."
            ],
            artists: ["Raquel González Obregón"]
          }
        ]
      },

      practice: {
        heading: "Practice",
        groups: [
          {
            label: "Curatorial practice",
            items: ["Exhibition concept & development", "Artist selection and liaison", "Installation & production management", "Exhibition texts and public programming"]
          },
          {
            label: "Production & management",
            items: ["Artist & booking management", "Event production and logistics", "Venue and stakeholder communication", "Budgeting and administrative coordination", "Set design & spatial coordination"]
          },
          {
            label: "Communication",
            items: ["Digital and social media strategy", "Audience development", "Full Proficiency Working: Spanish, Catalan, English", "Written and editorial content"]
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
        intro: "Open to cultural management, curatorial and production opportunities. Get in touch to discuss collaborations, projects or new ideas.",
        location: "Berlin / Barcelona",
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
        practice: "Áreas",
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
          "Disfruto transformando ideas en proyectos y acompañándolos desde la primera conversación hasta su realización. Colaboro con artistas, instituciones y espacios independientes para dar forma a experiencias culturales cuidadas, bien articuladas y pensadas para conectar a las personas a través de la cultura.",
          "Mi práctica está especialmente vinculada a cuestiones como la transformación, la memoria, la identidad y el arraigo. Estos temas atraviesan los proyectos que desarrollo, ya sean exposiciones, conciertos o programas públicos, buscando siempre generar nuevas conexiones entre las personas, las prácticas artísticas y los contextos culturales.",
          "Aunque mi trabajo reciente se ha centrado en el arte contemporáneo y la música, cada vez me interesa más desarrollar programas culturales multidisciplinares que reúnan diferentes disciplinas, comunidades y formas de experimentar la cultura."
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
              "El tramo del devenir explora la necesidad y el impulso constantes de estirarse como forma de expansión, transformación, conexión y construcción continua de nuestras vidas. Estirarse nunca es neutral: contiene a la vez miedo y fascinación, expansión y reducción. Las rupturas y los cambios inevitables que surgen de este proceso definen en quién nos convertimos, dando forma a la identidad, la memoria y el arraigo en ciclos perpetuos de construcción y reconstrucción.",
              "Los artistas abrazan la transformación en sus dimensiones personal, política y espiritual. Reflejan experiencias vividas de disidencia sexual, feminidad, migración, racismo y neurodivergencia, revelando el cuerpo, la memoria y la identidad como espacios elásticos donde conviven la fragilidad, la resistencia y la capacidad de recuperación.",
              "Aquí, estirarse es a la vez ruptura y reparación, comodidad e incomodidad, supervivencia e imaginación. La exposición amplifica la naturaleza elástica de la existencia humana, donde la expansión conlleva tanto terror como asombro, y donde el devenir nunca se completa. Es un testimonio de resistencia, que nos recuerda que la transformación no es un acto único, sino un estado continuo del ser."
            ],
            artists: ["Michalina Marta Cap", "Pascual Candel", "Carina Chang", "Onyx Chladilova", "Eva Fomitski", "Yunsun Noh", "Aduni Ogunsun", "Lesia", "Mariam Salah", "Isabella Sherwani Keeling", "Zoe Spehr", "Julieta Tetelbaum", "Hannah Wilder"]
          },
          {
            slug: "as-the-light-fades",
            title: "Mientras la luz se apaga",
            venue: "Rossmann Culterim, Berlín",
            date: "27–29 de marzo de 2026",
            summary: "Una propuesta sobre el tiempo, la luz y la desaparición.",
            body: [
              "¿Qué ocurre cuando la luz desaparece? ¿Qué ocurre cuando se cortan los cables y la oscuridad se abre paso? La interrupción de la luz puede provocar reacciones emocionales y físicas contrapuestas. A veces angustia y miedo a lo que no se ve, y otras veces serenidad y calma.",
              "En el ámbito científico, el efecto Ganzfeld explica esto como la reacción del cerebro a la privación sensorial: cuando el estímulo visual desaparece, la mente empieza a generar sus propias imágenes, movimientos y paisajes internos. La ausencia de luz no crea un vacío, sino que activa un modo distinto de ver.",
              "Esta interrupción repentina provocada por la pérdida de luz puede generar angustia, pero también calma, impulsando al cerebro a generar nuevos movimientos, nuevas formas de creación. En esta exposición nos proponemos investigar estos movimientos desde lo psicológico, lo físico y lo artístico. ¿Cómo afecta este cambio a nuestra percepción, a nuestra memoria y a nuestro sentido del presente? ¿Qué transforma la luz, y qué crea?",
              "La luz activa memorias latentes y transforma la manera en que observamos lo que nos rodea. A través de la exploración artística de este concepto —a menudo mediante reflejos, sombras o sutiles variaciones de luminosidad— Mientras la luz se apaga sugiere que mirar es también recordar. Y que cada cambio de luz reescribe aquello que creíamos haber visto ya."
            ],
            artists: ["Serafima Bresles", "Théo Guézennec", "Jamal Khalili", "Angelina Lambrikht", "Mariia Lutsak", "Rory Malone", "robin c wolf", "p0brediabla"]
          },
          {
            slug: "where-the-memory-got-tangled",
            title: "Allí donde se enredó la memoria",
            venue: "Studio4000, Berlín",
            date: "26–28 de junio de 2026",
            summary: "Una exposición que indaga en la memoria, la huella y el afecto.",
            body: [
              "Allí donde se enredó la memoria explora la intersección de dos conceptos centrales en la práctica artística de Raquel González Obregón: el arraigo y la memoria.",
              "Comprender el arraigo es comprender cómo las personas permanecen vinculadas a un lugar, una historia y una comunidad, incluso cuando ambos cambian y evolucionan con el tiempo. Inspirándose en pensadoras como Simone Weil, el arraigo se entiende como una necesidad humana fundamental que nos conecta con una comunidad a través de relaciones, historias y saberes compartidos. Se conforma a partir de lo que heredamos y de lo que seguimos practicando: rituales cotidianos, celebraciones y tradiciones transmitidas de generación en generación. Es en estos espacios donde la memoria permanece viva y encuentra nuevas formas de manifestarse.",
              "La exposición aborda la memoria desde una perspectiva íntima, entendiéndola como uno de los materiales con los que construimos nuestro sentido de identidad. Sin embargo, cada memoria personal lleva también huellas de historias familiares, territoriales y colectivas que la moldean.",
              "En el punto de encuentro entre memoria y arraigo surge la red, elemento central de la exposición. Presente tanto como metáfora como objeto material, habla de los vínculos que nos sostienen: conexiones emocionales, tejidos sociales, procesos de transmisión y formas de cuidado mutuo. Al mismo tiempo, evoca los paisajes marítimos y las tradiciones pesqueras que forman parte de la memoria heredada de la artista y de su ciudad natal, Santander. La red se convierte así en una imagen de las estructuras visibles e invisibles que nos conectan entre nosotros, con los lugares que habitamos y con las historias que nos preceden.",
              "Allí donde se enredó la memoria busca hacer visibles los hilos que conectan la experiencia individual con la memoria colectiva, invitando a reflexionar sobre las formas en que los recuerdos se transmiten, se transforman y siguen habitándonos."
            ],
            artists: ["Raquel González Obregón"]
          }
        ]
      },

      practice: {
        heading: "Áreas",
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
            items: ["Estrategia digital y redes sociales", "Desarrollo de públicos", "Competencia profesional completa: Castellano, Catalán e Inglés", "Contenido escrito y editorial"]
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
        intro: "Abierta a oportunidades de gestión cultural, comisariado y producción. Ponte en contacto para hablar de colaboraciones, proyectos o nuevas ideas.",
        location: "Berlín / Barcelona",
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
        practice: "Àrees",
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
          "M’agrada transformar idees en projectes i acompanyar-los des de la primera conversa fins a la seva realització. Col·laboro amb artistes, institucions i espais independents per donar forma a experiències culturals cuidades, ben articulades i pensades per connectar les persones a través de la cultura.",
          "La meva pràctica està especialment vinculada a qüestions com la transformació, la memòria, la identitat i l’arrelament. Aquests temes travessen els projectes que desenvolupo, ja siguin exposicions, concerts o programes públics, amb la voluntat de generar noves connexions entre les persones, les pràctiques artístiques i els contextos culturals.",
          "Tot i que la meva feina recent s’ha centrat en l’art contemporani i la música, cada vegada m’interessa més desenvolupar programes culturals multidisciplinaris que facin dialogar diferents disciplines, comunitats i maneres de viure la cultura."
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
              "El tram de l'esdevenir explora la necessitat i l'impuls constants d'estirar-se com a forma d'expansió, transformació, connexió i construcció contínua de les nostres vides. Estirar-se mai no és neutral: conté alhora por i fascinació, expansió i reducció. Les ruptures i els canvis inevitables que sorgeixen d'aquest procés defineixen en qui ens convertim, donant forma a la identitat, la memòria i l'arrelament en cicles perpetus de construcció i reconstrucció.",
              "Els artistes abracen la transformació en les seves dimensions personal, política i espiritual. Reflecteixen experiències viscudes de dissidència sexual, feminitat, migració, racisme i neurodivergència, revelant el cos, la memòria i la identitat com a espais elàstics on conviuen la fragilitat, la resistència i la capacitat de recuperació.",
              "Aquí, estirar-se és alhora ruptura i reparació, comoditat i incomoditat, supervivència i imaginació. L'exposició amplifica la naturalesa elàstica de l'existència humana, on l'expansió comporta tant terror com meravella, i on l'esdevenir no és mai complet. És un testimoni de resistència, que ens recorda que la transformació no és un acte únic, sinó un estat continu de l'ésser."
            ],
            artists: ["Michalina Marta Cap", "Pascual Candel", "Carina Chang", "Onyx Chladilova", "Eva Fomitski", "Yunsun Noh", "Aduni Ogunsun", "Lesia", "Mariam Salah", "Isabella Sherwani Keeling", "Zoe Spehr", "Julieta Tetelbaum", "Hannah Wilder"]
          },
          {
            slug: "as-the-light-fades",
            title: "Mentre la llum s'apaga",
            venue: "Rossmann Culterim, Berlín",
            date: "27–29 de març de 2026",
            summary: "Una proposta sobre el temps, la llum i la desaparició.",
            body: [
              "Què passa quan la llum desapareix? Què passa quan es tallen els cables i la foscor s'obre pas? La interrupció de la llum pot provocar reaccions emocionals i físiques contraposades. De vegades angoixa i por d'allò que no es veu, i d'altres serenitat i calma.",
              "En l'àmbit científic, l'efecte Ganzfeld explica això com la reacció del cervell a la privació sensorial: quan l'estímul visual desapareix, la ment comença a generar les seves pròpies imatges, moviments i paisatges interns. L'absència de llum no crea un buit, sinó que activa una manera diferent de veure.",
              "Aquesta interrupció sobtada provocada per la pèrdua de llum pot generar angoixa, però també calma, impulsant el cervell a generar nous moviments, noves formes de creació. En aquesta exposició ens proposem investigar aquests moviments des del vessant psicològic, físic i artístic. Com afecta aquest canvi la nostra percepció, la nostra memòria i el nostre sentit del present? Què transforma la llum, i què crea?",
              "La llum activa memòries latents i transforma la manera com observem allò que ens envolta. A través de l'exploració artística d'aquest concepte —sovint mitjançant reflexos, ombres o subtils variacions de lluminositat— Mentre la llum s'apaga suggereix que mirar és també recordar. I que cada canvi de llum reescriu allò que crèiem haver vist ja."
            ],
            artists: ["Serafima Bresles", "Théo Guézennec", "Jamal Khalili", "Angelina Lambrikht", "Mariia Lutsak", "Rory Malone", "robin c wolf", "p0brediabla"]
          },
          {
            slug: "where-the-memory-got-tangled",
            title: "Allà on es va enredar la memòria",
            venue: "Studio4000, Berlín",
            date: "26–28 de juny de 2026",
            summary: "Una exposició que indaga en la memòria, l'empremta i l'afecte.",
            body: [
              "Allà on es va enredar la memòria explora la intersecció de dos conceptes centrals en la pràctica artística de Raquel González Obregón: l'arrelament i la memòria.",
              "Comprendre l'arrelament és comprendre com les persones romanen vinculades a un lloc, una història i una comunitat, fins i tot quan tots dos canvien i evolucionen amb el temps. Inspirant-se en pensadores com Simone Weil, l'arrelament s'entén com una necessitat humana fonamental que ens connecta amb una comunitat a través de relacions, històries i sabers compartits. Es conforma a partir del que heretem i del que continuem practicant: rituals quotidians, celebracions i tradicions transmeses de generació en generació. És en aquests espais on la memòria roman viva i troba noves maneres de manifestar-se.",
              "L'exposició aborda la memòria des d'una perspectiva íntima, entenent-la com un dels materials amb què construïm el nostre sentit d'identitat. Tanmateix, cada memòria personal porta també empremtes d'històries familiars, territorials i col·lectives que la modelen.",
              "En el punt de trobada entre memòria i arrelament sorgeix la xarxa, element central de l'exposició. Present tant com a metàfora com a objecte material, parla dels vincles que ens sostenen: connexions emocionals, teixits socials, processos de transmissió i formes de cura mútua. Alhora, evoca els paisatges marítims i les tradicions pesqueres que formen part de la memòria heretada de l'artista i de la seva ciutat natal, Santander. La xarxa esdevé així una imatge de les estructures visibles i invisibles que ens connecten entre nosaltres, amb els llocs que habitem i amb les històries que ens precedeixen.",
              "Allà on es va enredar la memòria busca fer visibles els fils que connecten l'experiència individual amb la memòria col·lectiva, tot convidant a reflexionar sobre les maneres en què els records es transmeten, es transformen i continuen habitant-nos."
            ],
            artists: ["Raquel González Obregón"]
          }
        ]
      },

      practice: {
        heading: "Àrees",
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
            items: ["Estratègia digital i xarxes socials", "Desenvolupament de públics", "Competència professional completa: castellà, català i anglès", "Contingut escrit i editorial"]
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
        intro: "Oberta a oportunitats de gestió cultural, comissariat i producció. Posa't en contacte per parlar de col·laboracions, projectes o noves idees.",
        location: "Berlín / Barcelona",
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
