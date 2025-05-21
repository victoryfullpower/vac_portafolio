   // Reproductor de música
        const player = $('#player-audio')[0];
        const tracks = $('.track');
        const musicModal = $('#music-modal');
        let currentTrackIndex = 0;
        let antcurrentTrackIndex = 0;
        let isMusicPlaying = false;
        $(document).ready(function () {
            // Datos de los proyectos
            const projectsData = {
                "bus-tracker": {
                    title: "App bus viaje",
                    client: "Autoridad de Transporte Urbano para Lima y Callao",
                    duration: "1 año",
                    role: "Desarrollador Frontend",
                    image: "assets/images/detallePortada.png",
                    technologies: ["Flutter", "Dart", "Riverpod", "FlutterMap"],
                    description: "App con Mapa interactivo que te permitira calcular tiempos y organizar tu día",
                    media: [


                        {
                            type: "youtube",
                            id: "lTAkX9Af9Nc",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },
                        {
                            type: "youtube",
                            id: "8cQVOzIXFP8",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "youtube",
                            id: "dC5FvScThRo",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },
                        {
                            type: "youtube",
                            id: "hDQr86O6Q2A",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "image",
                            url: "assets/images/estructuracarpetas.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/architecture_diagram.jpeg"
                        },


                    ],
                    features: [
                        "Facilita planear un viaje antes de salir desde un punto A hasta un punto B",
                        "Muestra los paraderos del transporte público concesionado (Metropolitano, corredores y la Línea 1 y 2 del Metro de Lima).",
                        "Incluye versión en inglés para turistas y ciudadanos extranjeros.",
                        "Historial de viajes",
                        "Es compatible con el sistema IOS y Android."
                    ],
                    challenge: "El principal desafío fue optimizar el tiempo de respuesta y consumo de los servicios",
                    solution: "Implementamos un websocket de esta forma el app estaria en modo escucha, integramos un bd interna(en el dispositivo) y su actualizacion atravez de firebase usando feature-flag, finalmente para optimizar el tiempo de respuesta del servicio principal de buses, se implemento un algoritmo del lado de front para balancear el procesamiento logico de back"
                },
                "medi-schedule": {
                    title: "App TuMedico24/7",
                    client: "Auna",
                    duration: "2 años",
                    role: "Desarrollador Frontend Ionic/Angular",
                    image: "assets/images/auna/detallePortada.png",
                    technologies: ["Ionic", "Capacitor", "Stencil", "Storybook", "Aws", "Firebase", "Android Studio", "Xcode"],

                    description: "Plataforma de gestión de citas médicas con opciones de telemedicina. Incluye búsqueda de especialistas, historial médico y recordatorios automáticos.",
                    media: [


                        {
                            type: "youtube",
                            id: "7HrJc4P8_8E",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },
                        {
                            type: "youtube",
                            id: "k1utRHZj3AE",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },


                        {
                            type: "image",
                            url: "assets/images/auna/sample1.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna/sample2.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna/arquitectura.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna/estructuracarpetas.png"
                        },


                    ],
                    features: [
                        "Agendamiento de citas en línea",
                        "Videollamadas integradas",
                        "Historial médico digital",
                        "Recordatorios automáticos por SMS y email",
                        "Prescripciones electrónicas"
                    ],
                    challenge: "Mantener sincronizados los cambios tanto del app como de la web",
                    solution: "Crear una arquitectura clean, aislando la capa de datos, la misma que alimentaba a ambos proyectos App y Web"
                },
                "enterprise-dashboard": {
                    title: "App Viaje Seguro",
                    client: "Sutran",
                    duration: "1 año",
                    role: "Desarrollador Frontend Flutter",
                    image: "assets/images/viaje_seguro/portada.png",
                    technologies: ["Flutter", "Dart", "Riverpod", "FlutterMap"],
                    description: "Aplicativo que te permite buscar Agencias y Terminales autorizados por el MTC.",
                    media: [


                        {
                            type: "youtube",
                            id: "gj019Y6N8s0",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },
                        {
                            type: "youtube",
                            id: "IoCYyhtoguw",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },
                        {
                            type: "youtube",
                            id: "QGa7m1teoU0",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "image",
                            url: "assets/images/viaje_seguro/sample1.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/viaje_seguro/sample2.png"
                        },



                    ],
                    features: [
                        "Monitorea tu viaje",
                        "Ubica puntos de pasajes",
                        "Reporta incidentes(accidentes,robos)",
                        "Mapa interactivo de alertas",
                    ],
                    challenge: "Zonas con mala cobertura pueden causar pérdida de datos de ubicación.",
                    solution: "Almacenamiento offline en el dispositivo y sincronización cuando haya conexión."
                },
                "portal_ciudadano": {
                    title: "Portal Web Ciudadano",
                    client: "Atu",
                    duration: "6 meses",
                    role: "Desarrollador FullStack",
                    image: "assets/images/portal/portadaPortal.png",
                    technologies: ["Angular", "Typescript", "Sass", "SpringBoot", "Postgress"],
                    description: "Plataforma digital da acceso al ciudadano a información y servicios relacionados con el transporte terrestrePermite a los ciudadanos consultar información, realizar trámites, y reportar incidencias relacionadas con el transporte. ",
                    media: [


                        {
                            type: "youtube",
                            id: "cNZAAsTbrZY",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "image",
                            url: "assets/images/portal/portal_back.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/portal/portal_front.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/portal/sisatu_back.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/portal/sisatu_front.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/portal/postgress.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/portal/sample1.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/portal/sample2.png"
                        },



                    ],
                    features: [
                        "Realizar pagos, solicitar información, y presentar reclamaciones.",
                        "Reportar incidencias",
                        "Acceder a información de transparencia",
                        "Consultar récord de infracciones",
                        "Consultar papeletas de infracción por Cinemómetro"
                    ],
                    challenge: "En Reportes se requeria mejoras visuales que el actual plugin no soportaba",
                    solution: "Se requeria subir la version de angular y esto ocasiono imcompatibilidad con otros plugins, lo cual costo tiempo depurar"
                },
                "ibk": {
                    title: "MicroFront Cordinacion entrega Tarjeta",
                    client: "IBK",
                    duration: "6 meses",
                    role: "Arquitecto Frontend",
                    image: "assets/images/ibk/portadaibk.png",
                    technologies: ["Angular", "ngRx", "node", "Stencil", "Tailwind", "Storybook", "Karma"],
                    description: "Microfront Desktop/Mobil Modulo para Coordinar entrega de Tarjeta credito a clientes",
                    media: [


                        {
                            type: "youtube",
                            id: "3XsTH3vYMJg",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "image",
                            url: "assets/images/ibk/sample1.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/ibk/sample4.jpeg"
                        },
                        {
                            type: "image",
                            url: "assets/images/ibk/sample3.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/ibk/sample5.jpeg"
                        },
                        {
                            type: "image",
                            url: "assets/images/ibk/sample6.jpeg"
                        },



                    ],
                    features: [
                        "Registro de contacto respaldo",
                        "Seleccion de fecha y hora de entrega",
                        "Registrar o editar direccion",
                        "Registro de peticion de entrega de tarjeta",

                    ],
                    challenge: "Problemas con el codigo generado por tailwind, hacia conflicto cuando se colocaba en iframe",
                    solution: "Cambiar por simple css, ya que este no genera codigo extra"
                },
                "mibanco": {
                    title: "MicroFront Modulo Pagos y Prestamos",
                    client: "MiBanco",
                    duration: "6 meses",
                    role: "Desarrollador Frontend",
                    image: "assets/images/mibanco/sample5.png",
                    technologies: ["Angular", "ngRx", "node", "Stencil", "Tailwind", "Storybook", "Karma"],
                    description: "Plataforma digital da acceso al ciudadano a información y servicios relacionados con el transporte terrestrePermite a los ciudadanos consultar información, realizar trámites, y reportar incidencias relacionadas con el transporte. ",
                    media: [


                        {
                            type: "youtube",
                            id: "KzLFOsk8VIU",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "image",
                            url: "assets/images/mibanco/sample1.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/mibanco/sample2.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/mibanco/sample3.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/mibanco/sample4.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/mibanco/sample5.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/mibanco/sample6.png"
                        },



                    ],
                    features: [
                        "Consulta de Prestamos",
                        "Consulta de cuotas de Prestamo Pagadas",
                        "Consulta de siguiente cuota",
                        "Formas de Pago",
                        "Consultar cuotas atrasadas"
                    ],
                    challenge: "Necesidad de tener despliegues mas rapidos",
                    solution: "Implementacion de Ci/Cd (Continuous Integration/Continuous Delivery)"
                },
                "aunaWeb": {
                    title: "Portal Web Auna",
                    client: "Auna",
                    duration: "6 meses",
                    role: "Desarrollador Frontend",
                    image: "assets/images/auna_web/portalAunaWeb.png",
                    technologies: ["ReactJs", "Nose", "Sass", "Html", "Strapi"],
                    description: " Este Portal ofrece diversos servicios y programas para el cuidado de la salud, incluyendo teleconsultas, chequeos preventivos, y atención médica en hospitales y clínicas",
                    media: [


                        {
                            type: "youtube",
                            id: "e-IvVjx1CMg",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },
                        {
                            type: "youtube",
                            id: "5PAtd7MVdLI",
                            thumbnail: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
                        },

                        {
                            type: "image",
                            url: "assets/images/auna_web/sample1.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna_web/sample2.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna_web/sample3.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna_web/sample4.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna_web/code_strapi.png"
                        },
                        {
                            type: "image",
                            url: "assets/images/auna_web/code_front.png"
                        },



                    ],
                    features: [
                        "Centros de Bienestar",
                        "Farmauna",
                        "Hospitales y Clínicas",
                        "Laboratorios Auna",
                        "Citas en linea"
                    ],
                    challenge: "En Mobile se necesitaba una Estructura distinta a responsive en muchas partes del Portal",
                    solution: "Refactor de las paginas, en funcion del figma propuesto"
                },

            };

            // Manejar clic en botones "Ver detalles"
            $('.view-detail-btn').on('click', function (e) {
                e.preventDefault();
                const projectId = $(this).closest('.proyecto').data('project-id');
                showProjectDetail(projectId);
            });

            // Función para mostrar el detalle del proyecto
            function showProjectDetail(projectId) {
                const project = projectsData[projectId];
                if (!project) return;

                // Construir el contenido del detalle
                const detailContent = `
        <div class="project-detail-content">
            <!-- Card de información del proyecto -->
            <div class="project-info-card">
                <div class="info-item">
                    <span class="info-label">Cliente:</span>
                    <span>${project.client || 'No especificado'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Duración:</span>
                    <span>${project.duration || 'No especificado'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Rol:</span>
                    <span>${project.role || 'No especificado'}</span>
                </div>
                <div class="info-item">
                    <span class="info-label">Tecnologías:</span>
                    <span>${project.technologies.join(', ')}</span>
                </div>
            </div>
            
            <img src="${project.image}" alt="${project.title}" class="project-detail-image">
            
            <h2>${project.title}</h2>
            
            <p class="project-detail-description">${project.description}</p>
            
            <!-- Galería multimedia -->
            ${project.media && project.media.length > 0 ? `
            <div class="media-section">
                <h3>Galería Multimedia</h3>
                <div class="media-gallery">
                    ${project.media.map(item => `
                        <div class="media-item" data-type="${item.type}" data-src="${item.type === 'youtube' ?
                        `https://www.youtube.com/embed/${item.id}` : item.url}">
                            ${item.type === 'youtube' ? `
                                <img src="https://img.youtube.com/vi/${item.id}/hqdefault.jpg" alt="Video" class="media-thumbnail">
                                <span class="media-type">Video</span>
                            ` : `
                                <img src="${item.thumbnail || item.url}" alt="Imagen" class="media-thumbnail">
                                <span class="media-type">Imagen</span>
                            `}
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
            
            <div class="project-features">
                <h3>Características principales</h3>
                <ul>
                    ${project.features.map(feat => `<li>${feat}</li>`).join('')}
                </ul>
            </div>
            
            <div class="project-challenge">
                <h3>Desafío</h3>
                <p>${project.challenge}</p>
            </div>
            
            <div class="project-solution">
                <h3>Solución implementada</h3>
                <p>${project.solution}</p>
            </div>
        </div>
    `;

                // Insertar el contenido y mostrar la sección
                $('#detail-content').html(detailContent);
                $('#project-detail').addClass('active');

                // Configurar eventos para la galería multimedia
                setupMediaGallery();

                // Desplazar al inicio

            }

            function setupMediaGallery() {
                const mediaModal = $('#media-modal');
                const mediaIframe = $('#media-iframe');
                const mediaImage = $('#media-image');

                $('.media-item').on('click', function () {
                    const type = $(this).data('type');
                    const src = $(this).data('src');

                    if (type === 'youtube') {
                        mediaIframe.attr('src', src).show();
                        mediaImage.hide();
                    } else {
                        mediaImage.attr('src', src).show();
                        mediaIframe.hide();
                    }

                    mediaModal.addClass('active');

                    // Detener cualquier video de perfil que esté reproduciéndose
                    $('.video-perfil').each(function () {
                        this.pause();
                        $(this).removeClass('active');
                    });
                });

                $('.close-media-modal').on('click', function () {
                    mediaModal.removeClass('active');
                    mediaIframe.attr('src', ''); // Detener videos al cerrar
                });

                // Cerrar al hacer clic fuera del contenido
                mediaModal.on('click', function (e) {
                    if ($(e.target).hasClass('media-modal')) {
                        mediaModal.removeClass('active');
                        mediaIframe.attr('src', '');
                    }
                });
            }

            // Manejar clic en botón "Volver"
            $('#close-detail').on('click', function () {
                $('#project-detail').removeClass('active');
                $('main').css('opacity', '1').css('pointer-events', 'auto');
                history.pushState(null, null, ' ');
            });

            // Manejar el botón de retroceso del navegador
            $(window).on('popstate', function (event) {
                if (event.state && event.state.projectId) {
                    showProjectDetail(event.state.projectId);
                } else {
                    $('#project-detail').removeClass('active');
                    $('main').css('opacity', '1').css('pointer-events', 'auto');
                }
            });

            // Cargar proyecto desde hash en URL al inicio
            if (window.location.hash) {
                const projectId = window.location.hash.substring(1);
                if (projectsData[projectId]) {
                    showProjectDetail(projectId);
                }
            }

            // ===== [CÓDIGO EXISTENTE] =====
            // Filtrado de proyectos
            $('.btn-filtro').on('click', function () {
                $('.btn-filtro').removeClass('active');
                $(this).addClass('active');

                const tecnologia = $(this).data('tecnologia');
                $('.proyecto').each(function () {
                    if (tecnologia === 'todas') {
                        $(this).show();
                    } else {
                        const tecnologias = $(this).find('.tecnologia').map(function () {
                            return $(this).text().toLowerCase().replace('.', '').replace(' ', '-');
                        }).get();

                        if (tecnologias.includes(tecnologia)) {
                            $(this).show();
                        } else {
                            $(this).hide();
                        }
                    }
                });
            });

            // ===== [VARIABLES GLOBALES] =====
            let currentLanguage = 'es';
            let audioEnabled = false;
            let currentAudioElement = null;
            let preloadedVideos = [];
            // Inicializar sistemas
            initLanguageSystem();
            initAudioSystem();
            initDarkMode();
            initParticles();
            initLoadingScreen();

            // Inicializar el audio correspondiente al idioma actual
            currentAudioElement = document.getElementById(`audio-${currentLanguage}`);

            // ===== [SISTEMA DE IDIOMAS] =====
            function initLanguageSystem() {
                $('#toggle-language').on('click', toggleLanguage);
                updateLanguageButton();
            }

            function toggleLanguage() {
                const aboutMeAudio = currentLanguage === 'es' ? $('#audio-es')[0] : $('#audio-en')[0];
                const video = $('.video-perfil')[0];
                const musicPlayer = $('#player-audio')[0];

                // 1. Detener audio y video de "sobre mí"
                aboutMeAudio.pause();
                aboutMeAudio.currentTime = 0;
                video.pause();
                $('.video-perfil').removeClass('active');

                // 2. Restaurar estado del audio
                audioEnabled = false;
                updateAudioButton();

                // 3. Manejo específico para iOS
                if (isIOS()) {
                    // Si el playlist estaba pausado (por ser iOS y estar reproduciendo el audio de sobre mí)
                    if (wasMusicPlayingBeforeAboutMe && musicPlayer.paused) {
                        // Necesitamos una interacción del usuario para reanudar en iOS
                        $('body').one('click touchstart', function () {
                            musicPlayer.volume = musicVolumeBeforeAboutMe || 0.5;
                            musicPlayer.play().catch(e => console.log("iOS audio resume error:", e));
                        });
                    }
                } else {
                    // Para otros dispositivos, simplemente reanudamos si estaba reproduciéndose
                    if (wasMusicPlayingBeforeAboutMe) {
                        musicPlayer.volume = musicVolumeBeforeAboutMe || 0.5;
                        musicPlayer.play().catch(e => console.log("Audio resume error:", e));
                    }
                }

                // 4. Cambiar idioma
                currentLanguage = currentLanguage === 'es' ? 'en' : 'es';
                currentAudioElement = document.getElementById(`audio-${currentLanguage}`);

                // 5. Actualizar interfaz
                updateLanguageButton();
                applyLanguage(currentLanguage);
                saveLanguagePreference();
            }

            function updateLanguageButton() {
                const buttonText = currentLanguage === 'es' ? 'EN' : 'ES';
                $('#toggle-language').html(`<i class="fas fa-language"></i> ${buttonText}`).data('lang', currentLanguage);
            }

            function applyLanguage(lang) {
                const translations = {
                    es: {
                        title: "Mi Portafolio Creativo",
                        subtitle: "Diseño • Desarrollo • Innovación",
                        greeting: "¡Hola, soy Victor!",
                        bio1: "Un apasionado Desarrollador Frontend con experiencia en creación de aplicaciones web y móviles dinámicas.",
                        bio2: "A través de este portafolio, quiero compartir mis habilidades y mis capacidades para construir soluciones web innovadoras y personalizadas. Me encantaría conversar sobre lo que podríamos crear juntos.",
                        bio3: "Sin más, ¡Te invito a explorar mis proyectos y a conectar si buscas colaborar o simplemente compartir ideas!",
                        filterAll: "Todas",
                        filterReact: "React js",
                        filterFlutter: "Flutter",
                        filterLaravel: "Angular",
                        filterNode: "Node",
                        cvEs: "CV Español",
                        cvEn: "CV English",
                        readyTitle: "¿Listo para trabajar juntos?",
                        readyText: "Contáctame para nuevos proyectos y colaboraciones",
                        copyright: "© 2025 Portafolio Creativo. Todos los derechos reservados.",
                        backButton: "<i class='fas fa-arrow-left'></i> Volver",
                        viewDetails: "Ver detalles"
                    },
                    en: {
                        title: "My Creative Portfolio",
                        subtitle: "Design • Development • Innovation",
                        greeting: "Hello, I'm Victor!",
                        bio1: "A passionate Frontend Developer with experience in creating dynamic web and mobile applications.",
                        bio2: "Through this portfolio, I want to share my skills and capabilities to build innovative and customized web solutions. I'd love to discuss what we could create together.",
                        bio3: "Without further ado, I invite you to explore my projects and connect if you're looking to collaborate or simply share ideas!",
                        filterAll: "All",
                        filterReact: "React js",
                        filterFlutter: "Flutter",
                        filterLaravel: "Angular",
                        filterNode: "Node",
                        cvEs: "Spanish CV",
                        cvEn: "English CV",
                        readyTitle: "Ready to work together?",
                        readyText: "Contact me for new projects and collaborations",
                        copyright: "© 2025 Creative Portfolio. All rights reserved.",
                        backButton: "<i class='fas fa-arrow-left'></i> Back",
                        viewDetails: "View details"
                    }
                };

                // Actualizar elementos del header
                $('h1').text(translations[lang].title).attr('data-text', translations[lang].title);
                $('.subtitulo').text(translations[lang].subtitle);

                // Actualizar sección "Sobre mí"
                $('#greeting-text').text(translations[lang].greeting);
                const bioParagraphs = $('.bio p');
                bioParagraphs.eq(0).text(translations[lang].bio1);
                bioParagraphs.eq(1).text(translations[lang].bio2);
                bioParagraphs.eq(2).text(translations[lang].bio3);

                // Actualizar botones de filtro
                $('.btn-filtro[data-tecnologia="todas"]').text(translations[lang].filterAll);
                $('.btn-filtro[data-tecnologia="react"]').text(translations[lang].filterReact);
                $('.btn-filtro[data-tecnologia="flutter"]').text(translations[lang].filterFlutter);
                $('.btn-filtro[data-tecnologia="angular"]').text(translations[lang].filterLaravel);
                $('.btn-filtro[data-tecnologia="node"]').text(translations[lang].filterNode);

                // Actualizar botones de CV
                $('#download-cv-es').text(translations[lang].cvEs);
                $('#download-cv-en').text(translations[lang].cvEn);

                // Actualizar footer
                $('footer h2').text(translations[lang].readyTitle);
                $('footer p').eq(0).text(translations[lang].readyText);
                $('footer p').eq(1).text(translations[lang].copyright);

                // Actualizar botones de detalles y volver
                $('.view-detail-btn').text(translations[lang].viewDetails);
                $('#close-detail').html(translations[lang].backButton);

                // Actualizar el texto del botón de idioma
                updateLanguageButton();
            }
            // ===== [DETECCIÓN DE iOS] =====
            function isIOS() {
                return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
            }
            // ===== [SISTEMA DE AUDIO] =====
            function initAudioSystem() {
                $('.speaker-btn').on('click', toggleAudioPlayback);
                $('.reset-btn').on('click', resetAudio);

                // Configurar eventos para cuando termina el audio
                $('#audio-es, #audio-en').on('ended', function () {
                    audioEnabled = false;
                    updateAudioButton();
                    $('.video-perfil').removeClass('active');
                    $('.video-perfil')[0].pause();

                    // Restaurar playlist si estaba reproduciéndose
                    if (wasMusicPlayingBeforeAboutMe) {
                        const musicPlayer = $('#player-audio')[0];
                        musicPlayer.volume = musicVolumeBeforeAboutMe;
                        if (isIOS()) {
                            $('body').one('click touchstart', function () {
                                musicPlayer.play().catch(e => console.log("Error al reanudar playlist:", e));
                            });
                        } else {
                            musicPlayer.play().catch(e => console.log("Error al reanudar playlist:", e));
                        }
                    }
                });
            }
            // Variables para control de estado
            let wasMusicPlayingBeforeAboutMe = false;
            let musicVolumeBeforeAboutMe = 0.5;
            function resumePlaylist() {
                const musicPlayer = $('#player-audio')[0];
                if (musicPlayer) {
                    musicPlayer.volume = musicVolumeBeforeAboutMe;
                    musicPlayer.play().catch(e => console.log("Error al reanudar playlist:", e));
                }
            }

            // ===== [CONTROL DE VOLÚMENES] =====
            let musicVolume = 0.5;

            function lowerMusicVolume() {
                const musicPlayer = $('#player-audio')[0];
                musicVolume = musicPlayer.volume; // Guardamos el volumen actual
                musicPlayer.volume = 0.1; // Reducimos a sólo 10% del volumen (antes era 0.2 - 20%)
            }

            function restoreMusicVolume() {
                const musicPlayer = $('#player-audio')[0];
                if (musicPlayer && musicVolume !== undefined) {
                    musicPlayer.volume = musicVolume; // Restaura el volumen original del playlist
                }
            }

            function toggleAudioPlayback() {
                const aboutMeAudio = currentLanguage === 'es' ? $('#audio-es')[0] : $('#audio-en')[0];
                const video = $('.video-perfil')[0];
                const musicPlayer = $('#player-audio')[0];

                aboutMeAudio.volume = 1.0;

                if (aboutMeAudio.paused) {
                    // Guardar estado del playlist antes de cambiar
                    wasMusicPlayingBeforeAboutMe = !musicPlayer.paused;
                    musicVolumeBeforeAboutMe = musicPlayer.volume;

                    // Mostrar video
                    $('.video-perfil').addClass('active');

                    // Comportamiento específico para iOS
                    if (isIOS()) {
                        // En iOS debemos pausar el playlist completamente
                        if (!musicPlayer.paused) {
                            musicPlayer.pause();
                        }

                        // Reproducir audio y video dentro de un gesto del usuario
                        $('body').one('click touchstart', function () {
                            video.currentTime = 0;
                            video.play().catch(e => console.log("iOS video play error:", e));
                            aboutMeAudio.play()
                                .then(() => {
                                    audioEnabled = true;
                                    updateAudioButton();
                                })
                                .catch(error => {
                                    console.error("iOS audio play error:", error);
                                    $('.video-perfil').removeClass('active');
                                    // Restaurar playlist si falla
                                    if (wasMusicPlayingBeforeAboutMe) {
                                        musicPlayer.volume = musicVolumeBeforeAboutMe;
                                        musicPlayer.play().catch(e => console.log("iOS audio resume error:", e));
                                    }
                                });
                        });
                    } else {
                        // Para otros dispositivos, solo bajar volumen del playlist
                        if (!musicPlayer.paused) {
                            musicPlayer.volume = 0.1;
                        }

                        // Reproducir normalmente
                        video.currentTime = 0;
                        video.play().catch(e => console.log("Video play error:", e));
                        aboutMeAudio.play()
                            .then(() => {
                                audioEnabled = true;
                                updateAudioButton();
                            })
                            .catch(error => {
                                console.error("Audio play error:", error);
                                $('.video-perfil').removeClass('active');
                                // Restaurar playlist si falla
                                if (wasMusicPlayingBeforeAboutMe) {
                                    musicPlayer.volume = musicVolumeBeforeAboutMe;
                                    musicPlayer.play().catch(e => console.log("Audio resume error:", e));
                                }
                            });
                    }
                } else {
                    // Pausar audio de "sobre mí"
                    aboutMeAudio.pause();
                    aboutMeAudio.currentTime = 0;
                    video.pause();
                    $('.video-perfil').removeClass('active');

                    // Restaurar playlist según dispositivo
                    if (wasMusicPlayingBeforeAboutMe) {
                        if (isIOS()) {
                            // En iOS necesitamos interacción del usuario para reanudar
                            $('body').one('click touchstart', function () {
                                musicPlayer.volume = musicVolumeBeforeAboutMe;
                                musicPlayer.play().catch(e => console.log("iOS audio resume error:", e));
                            });
                        } else {
                            // Otros dispositivos pueden reanudar directamente
                            musicPlayer.volume = musicVolumeBeforeAboutMe;
                            musicPlayer.play().catch(e => console.log("Audio resume error:", e));
                        }
                    }

                    audioEnabled = false;
                    updateAudioButton();
                }
            }

            // Añade este evento para cuando termine el audio
            $('#audio-es, #audio-en').on('ended', function () {
                audioEnabled = false;
                updateAudioButton();
                $('.video-perfil').removeClass('active');
                $('.video-perfil')[0].pause();

                // Solo reanudar el playlist si estaba reproduciéndose antes
                if (wasMusicPlayingBeforeAboutMe) {
                    if (isIOS()) {
                        $('body').one('click touchstart', function () {
                            resumePlaylist();
                        });
                    } else {
                        resumePlaylist();
                    }
                }
            });

            function resetAudio() {
                if (!currentAudioElement) return;

                currentAudioElement.currentTime = 0;
                if (!audioEnabled) {
                    // Para iOS, necesitamos asegurarnos de que el reset ocurra dentro de un gesto del usuario
                    if (isIOS()) {
                        $('body').one('click touchstart', function () {
                            currentAudioElement.play()
                                .then(() => {
                                    audioEnabled = true;
                                    updateAudioButton();
                                })
                                .catch(error => {
                                    console.error("Error en iOS al resetear audio:", error);
                                });
                        });
                    } else {
                        currentAudioElement.play()
                            .then(() => {
                                audioEnabled = true;
                                updateAudioButton();
                            });
                    }
                }
                updateAudioButton();
            }

            function handleAudioEnd() {
                audioEnabled = false;
                updateAudioButton();
            }

            function updateAudioButton() {
                $('.speaker-btn').html(audioEnabled ? '<i class="fas fa-pause"></i>' : '<i class="fas fa-volume-up"></i>');
            }

            // ===== [OTRAS FUNCIONALIDADES] =====
            function initDarkMode() {
                $('#toggle-dark-mode').on('click', toggleDarkMode);

                if (localStorage.getItem('darkMode') === 'true') {
                    $('body').addClass('dark-mode');
                    $('#toggle-dark-mode').html('<i class="fas fa-sun"></i>');
                }
            }

            function toggleDarkMode() {
                $('body').toggleClass('dark-mode');
                const isDark = $('body').hasClass('dark-mode');
                $('#toggle-dark-mode').html(isDark ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>');
                localStorage.setItem('darkMode', isDark);
            }

            function initParticles() {
                const container = $('#particles-container');
                for (let i = 0; i < 20; i++) {
                    const particle = $('<div class="particle"></div>');
                    const size = Math.random() * 3 + 2;
                    particle.css({
                        width: `${size}px`,
                        height: `${size}px`,
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        '--move-x': `${(Math.random() - 0.5) * 100}px`,
                        '--move-y': `${(Math.random() - 0.5) * 100}px`,
                        'animation-delay': `${Math.random() * 3}s`
                    });
                    container.append(particle);
                }
            }

            function initLoadingScreen() {
                setTimeout(() => {
                    $('.loading-screen').css('opacity', '0');
                    setTimeout(() => $('.loading-screen').remove(), 1000);
                }, 1500);
            }

            function loadPreferences() {
                const savedLang = localStorage.getItem('portfolioLanguage');
                if (savedLang) {
                    currentLanguage = savedLang;
                    applyLanguage(savedLang);
                }
            }

            function saveLanguagePreference() {
                localStorage.setItem('portfolioLanguage', currentLanguage);
            }



            // Configurar primera canción
            if (tracks.length > 0) {
                player.src = tracks.eq(0).data('src');
                updateTrackDisplay();
            }

            // Mostrar modal de activación
            setTimeout(() => {
                musicModal.addClass('active');
            }, 1000);

            // Control de botones del modal
            $('#activate-music').on('click', function () {
                playCurrentTrack();
                musicModal.removeClass('active');
            });

            $('#decline-music, .close-modal').on('click', function () {
                musicModal.removeClass('active');
            });

            // Funciones principales del reproductor
            function playCurrentTrack() {
                player.play()
                    .then(() => {
                        isMusicPlaying = true;
                        updateTrackDisplay();
                        // No forzar sincronización aquí, ya se maneja en los eventos
                    })
                    .catch(error => {
                        console.error("Error al reproducir:", error);
                    });
            }

            function updateTrackDisplay() {
                tracks.each(function (index) {
                    const btn = $(this).find('.play-btn');
                    if (index === currentTrackIndex && isMusicPlaying) {
                        btn.text('❚❚');
                        $(this).addClass('active');
                    } else {
                        btn.text('▶');
                        $(this).removeClass('active');
                    }
                });
            }

            // Control manual de canciones
            $('.play-btn').on('click', function () {
                const track = $(this).closest('.track');
                const index = track.index();

                if (currentTrackIndex === index) {
                    if (player.paused) {
                        playCurrentTrack();
                    } else {
                        player.pause();
                        isMusicPlaying = false;
                        updateTrackDisplay();
                        updateVideoButtonVisibility(); // Añade esta línea
                    }
                } else {
                    currentTrackIndex = index;
                    player.src = track.data('src');
                    playCurrentTrack();
                }

                console.log("different track")
                $('.playlist-video-container').removeClass('visible');
                videoEnabled = false
                updateVideoButton()



            });

            // Cambio automático al terminar canción
            player.addEventListener('ended', function () {
                $('.playlist-video-container').removeClass('visible');
                videoEnabled = false
                updateVideoButton()
                currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
                player.src = tracks.eq(currentTrackIndex).data('src');
                playCurrentTrack();


            });

            // Si ya estaba activado, intentar reproducción
            if (localStorage.getItem('musicEnabled') === 'true') {
                playCurrentTrack();
            }

            // Cerrar el reproductor al hacer clic fuera
            $(document).on('click', function (e) {
                if (!$(e.target).closest('.music-player').length &&
                    !$(e.target).is('.player-close-btn')) {
                    $('.music-player').css('transform', 'translateX(200px)');
                }
            });

            // Cerrar con el botón X
            $('.player-close-btn').on('click', function () {
                $('.music-player').css('transform', 'translateX(200px)');
            });

            // Mostrar al hacer hover
            $('.music-player').on('mouseenter', function () {
                $(this).css('transform', 'translateX(0)');
            });

            function toggleMusicPlayer(show) {
                const player = document.querySelector('.music-player');
                player.style.transform = show ? 'translateX(0)' : 'translateX(200px)';
            }

            function setupMusicPlayer() {
                const player = $('.music-player');
                const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

                if (!isTouch) {
                    // Comportamiento para desktop (hover)
                    player.on('mouseenter', function () {
                        $(this).css('transform', 'translateX(0)');
                    });

                    player.on('mouseleave', function () {
                        $(this).css('transform', 'translateX(200px)');
                    });
                } else {
                    // Comportamiento para móvil (gestos táctiles)
                    let touchStartX = 0;
                    let playerVisible = false;

                    player.on('touchstart', function (e) {
                        touchStartX = e.originalEvent.touches[0].clientX;
                    }, { passive: true });

                    player.on('touchend', function (e) {
                        const touchEndX = e.originalEvent.changedTouches[0].clientX;

                        // Swipe izquierda (mostrar)
                        if (touchStartX - touchEndX > 50 && !playerVisible) {
                            player.css('transform', 'translateX(0)');
                            playerVisible = true;
                        }
                        // Swipe derecha (ocultar)
                        else if (touchEndX - touchStartX > 50 && playerVisible) {
                            player.css('transform', 'translateX(200px)');
                            playerVisible = false;
                        }
                    }, { passive: true });

                    // Cerrar con el botón X
                    $('.player-close-btn').on('click', function () {
                        player.css('transform', 'translateX(200px)');
                        playerVisible = false;
                    });
                }
            }

            // Inicializar el reproductor
            setupMusicPlayer();

            // Configurar el visualizador de audio

            function setupAudioVisualizer() {
                const visualizer = document.getElementById('audio-visualizer');
                const player = document.getElementById('player-audio');
                const speakers = document.querySelectorAll('.speaker');
                const speakerBodies = document.querySelectorAll('.speaker-body');
                const pulseEffects = document.querySelectorAll('.pulse-effect');

                // Crear 30 barras para el visualizador
                for (let i = 0; i < 30; i++) {
                    const bar = document.createElement('div');
                    bar.className = 'audio-bar';
                    bar.style.height = '2px';
                    visualizer.appendChild(bar);
                }

                const bars = visualizer.querySelectorAll('.audio-bar');

                // Crear contexto de audio
                const AudioContext = window.AudioContext || window.webkitAudioContext;
                const audioContext = new AudioContext();
                const analyser = audioContext.createAnalyser();
                const source = audioContext.createMediaElementSource(player);

                source.connect(analyser);
                analyser.connect(audioContext.destination);
                analyser.fftSize = 256; // Más bandas de frecuencia para mejor detección de bajos

                const bufferLength = analyser.frequencyBinCount;
                const dataArray = new Uint8Array(bufferLength);

                // Variables para seguimiento de bajos
                let bassHistory = [];
                const bassThreshold = 0.6;
                let lastPulseTime = 0;

                function animateBars() {
                    if (player.paused) {
                        // Efecto de "standby" cuando está pausado
                        bars.forEach((bar, i) => {
                            const randomHeight = Math.random() * 5 + 2;
                            bar.style.height = `${randomHeight}px`;
                            bar.style.opacity = '0.6';
                        });

                        // Quitar efectos psicodélicos cuando está pausado
                        speakerBodies.forEach(body => {
                            body.classList.remove('speaker-psycho');
                        });
                    } else {
                        // Animar con los datos del audio
                        analyser.getByteFrequencyData(dataArray);

                        // Calcular niveles de frecuencia (bajos, medios, agudos)
                        const bassStart = 0;
                        const bassEnd = 10;
                        const midStart = 11;
                        const midEnd = 50;
                        const highStart = 51;
                        const highEnd = 100;

                        let bassSum = 0;
                        let midSum = 0;
                        let highSum = 0;

                        for (let i = bassStart; i < bassEnd; i++) {
                            bassSum += dataArray[i];
                        }

                        for (let i = midStart; i < midEnd; i++) {
                            midSum += dataArray[i];
                        }

                        for (let i = highStart; i < highEnd; i++) {
                            highSum += dataArray[i];
                        }

                        const bassAvg = bassSum / (bassEnd - bassStart);
                        const midAvg = midSum / (midEnd - midStart);
                        const highAvg = highSum / (highEnd - highStart);

                        // Normalizar valores (0-100)
                        const bassLevel = bassAvg / 255;
                        const midLevel = midAvg / 255;
                        const highLevel = highAvg / 255;

                        // Añadir a historial de bajos
                        bassHistory.push(bassLevel);
                        if (bassHistory.length > 10) bassHistory.shift();

                        // Calcular promedio de bajos recientes
                        const recentBass = bassHistory.reduce((a, b) => a + b, 0) / bassHistory.length;

                        // Activar efectos psicodélicos cuando hay muchos bajos
                        if (recentBass > bassThreshold) {
                            speakerBodies.forEach(body => {
                                body.classList.add('speaker-psycho');

                                // Cambiar colores aleatorios
                                const hue1 = Math.floor(Math.random() * 360);
                                const hue2 = (hue1 + 120) % 360;
                                body.style.background = `linear-gradient(135deg, hsl(${hue1}, 100%, 50%), hsl(${hue2}, 100%, 50%)`;
                            });
                        } else {
                            speakerBodies.forEach(body => {
                                body.classList.remove('speaker-psycho');
                                body.style.background = `linear-gradient(135deg, var(--color-primario), var(--color-secundario))`;
                            });
                        }

                        // Efecto de pulso en los parlantes con los bajos
                        const currentTime = Date.now();
                        if (bassLevel > 0.7 && currentTime - lastPulseTime > 300) {
                            pulseEffects.forEach(pulse => {
                                pulse.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
                                pulse.classList.add('pulse-active');
                                setTimeout(() => {
                                    pulse.classList.remove('pulse-active');
                                }, 500);
                            });
                            lastPulseTime = currentTime;
                        }

                        // Mover los parlantes con el ritmo
                        speakers.forEach(speaker => {
                            const moveX = (Math.random() - 0.5) * bassLevel * 5;
                            const moveY = (Math.random() - 0.5) * bassLevel * 3;
                            speaker.style.transform = `translate(${moveX}px, ${moveY}px)`;
                        });

                        // Animar las barras del visualizador
                        bars.forEach((bar, i) => {
                            // Distribuir las frecuencias en las barras
                            let value;
                            if (i < 10) {
                                // Primeras 10 barras: bajos
                                value = dataArray[Math.floor(i * 1.5)] / 5 || 2;
                                bar.style.backgroundColor = `hsl(${200 + bassLevel * 60}, 100%, 50%)`;
                            } else if (i < 20) {
                                // Siguientes 10 barras: medios
                                value = dataArray[Math.floor(15 + (i - 10) * 3)] / 4 || 2;
                                bar.style.backgroundColor = `hsl(${100 + midLevel * 80}, 100%, 50%)`;
                            } else {
                                // Últimas 10 barras: agudos
                                value = dataArray[Math.floor(45 + (i - 20) * 5)] / 3 || 2;
                                bar.style.backgroundColor = `hsl(${0 + highLevel * 120}, 100%, 50%)`;
                            }

                            bar.style.height = `${value * 2}px`;
                            bar.style.opacity = '1';
                        });
                    }

                    requestAnimationFrame(animateBars);
                }

                // Iniciar animación
                animateBars();

                // Manejar el contexto de audio al interactuar con el reproductor
                player.addEventListener('play', () => {
                    if (audioContext.state === 'suspended') {
                        audioContext.resume();
                    }
                });


            }


            // Variables para control de video
            let videoEnabled = false;
            const playlistVideos = [
                "assets/videos/video1.webm",
                "assets/videos/video2.webm",
                "assets/videos/video3.webm"
            ];

            // Inicializar el sistema de video
            function initVideoSystem() {
                console.log("inicio")
                const videoToggle = $('#toggle-video-mode');
                const playlistVideo = $('#playlist-video')[0];
                let lastTrackIndex = -1; // Para rastrear la última canción reproducida

                // Configurar evento para el botón de video
                videoToggle.on('click', function () {
                    videoEnabled = !videoEnabled;
                    updateVideoButton();

                    if (videoEnabled) {
                        $('.playlist-video-container').addClass('visible');

                        syncVideoWithTrack(); // Esto ahora sincronizará correctamente el tiempo
                    } else {
                        $('.playlist-video-container').removeClass('visible');
                        playlistVideo.pause();
                    }
                });

                // Actualizar visibilidad del botón según estado del reproductor
                player.addEventListener('play', function () {
                    $('#toggle-video-mode').show();
                    if (videoEnabled) {
                        // Forzar sincronización al iniciar reproducción
                        syncVideoWithTrack();
                    }
                    lastTrackIndex = currentTrackIndex;
                });

                player.addEventListener('pause', function () {
                    if (videoEnabled) {
                        playlistVideo.pause();
                        $('.playlist-video-container').removeClass('visible');
                    }
                });

                // Cambiar video cuando cambia la canción
                // player.addEventListener('ended', function () {
                //     currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
                //     player.src = tracks.eq(currentTrackIndex).data('src');
                //     playCurrentTrack();

                //     if (videoEnabled) {
                //         syncVideoWithTrack();
                //     }
                // });

                // Cambiar video al seleccionar manualmente otra canción

            }
            function updateVideoButtonVisibility() {
                console.log("updateVideoButtonVisibility")
                const videoToggle = $('#toggle-video-mode');
                const playlistVideo = $('#playlist-video')[0];
                let lastTrackIndex = -1;
                if (player.paused || player.ended) {
                    videoToggle.hide();
                    $('.playlist-video-container').removeClass('visible');
                    playlistVideo.pause();
                } else {
                    videoToggle.show();
                    if (videoEnabled) {
                        $('.playlist-video-container').addClass('visible');
                        syncVideoWithTrack();
                    }
                }
            }
            function syncVideoWithTrack() {
                console.log("syncVideoWithTrack")
                const playlistVideo = $('#playlist-video')[0];
                if (currentTrackIndex >= 0 && currentTrackIndex < playlistVideos.length) {
                    // Usar el video pre-cargado
                    const preloadedVideo = preloadedVideos[currentTrackIndex];

                    // Copiar las propiedades del video pre-cargado
                    playlistVideo.src = preloadedVideo.src;
                    playlistVideo.currentTime = (player.currentTime / player.duration) * preloadedVideo.duration;

                    if (videoEnabled) {
                        console.log("pendexo")
                        $('.playlist-video-container').addClass('visible');
                        playlistVideo.play().catch(e => console.log("Video play error:", e));
                    }
                }
            }
            // Agrega esto en la inicialización del reproductor
            player.addEventListener('timeupdate', function () {
                if (videoEnabled && !player.paused) {
                    const playlistVideo = $('#playlist-video')[0];
                    if (playlistVideo.readyState > 0) { // Si el video tiene datos cargados
                        // Sincronizar suavemente el video con el audio
                        const videoPosition = (player.currentTime / player.duration) * playlistVideo.duration;

                        // Solo actualizar si la diferencia es significativa para evitar parpadeo
                        if (Math.abs(playlistVideo.currentTime - videoPosition) > 0.1) {
                            playlistVideo.currentTime = videoPosition;
                        }
                    }
                }
            });
            function updateVideoButton() {
                console.log("toggle-video-mode")
                const btn = $('#toggle-video-mode');
                btn.toggleClass('active', videoEnabled);
                btn.html(videoEnabled ? '<i class="fas fa-video-slash"></i>' : '<i class="fas fa-video"></i>');
            }
            // Agrega esto al inicio de tu código


            function preloadVideos() {
                playlistVideos.forEach((videoSrc, index) => {
                    const video = document.createElement('video');
                    video.src = videoSrc;
                    video.preload = 'auto';
                    preloadedVideos[index] = video;
                });
            }

            setupAudioVisualizer();
            initVideoSystem();
            preloadVideos();
        });
