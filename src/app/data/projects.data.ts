import { ProjectCategory } from "../interface/project.interface";

export const PROJECTS_DATA: ProjectCategory[] = [
    {
      title: 'Angular',
      iconsrc: '/icons/angular.png',
      projects: [
        {
            image: 'https://www.bdksistemas.com.mx/build/img/BDKREST/LOGO_BCO.avif',
            title: 'WebApp Envios a Domicilio - BDK',
          description: 'Sistema de comandas para restaurantes con gestión de mesas, pedidos y comunicación en tiempo real.',
          details: `Plataforma web interna diseñada para optimizar la gestión de comandas en restaurantes. Permite a los meseros enviar y administrar pedidos de manera eficiente, además de ofrecer comunicación en tiempo real con los clientes a través de un chat basado en WebSockets.
  
          El sistema se integra con el MENÚ DIGITAL mediante una arquitectura de microservicios. Está desarrollado con **Angular v19** para el frontend y **PHP/Laravel v11** para el backend. Utiliza un servidor local con **XAMPP** y un **Dockerfile** para su implementación en contenedores, además de un microservicio en **.NET 8** con WebSockets para la comunicación en tiempo real.`,
          website: '',
            imgbg: 'black',
            tabletMode: 0,
            phoneMode: 13,
            desktopMode: [],
            folerPictures: 'ENVIO_DOMICILIO'
          },
          
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKREST/LOGO_BCO.avif',
          title: 'Comandeo Meseros - BDK',
        description: 'Sistema de comandas para restaurantes con gestión de mesas, pedidos y comunicación en tiempo real.',
        details: `Plataforma web interna diseñada para optimizar la gestión de comandas en restaurantes. Permite a los meseros enviar y administrar pedidos de manera eficiente, además de ofrecer comunicación en tiempo real con los clientes a través de un chat basado en WebSockets.

        El sistema se integra con el MENÚ DIGITAL mediante una arquitectura de microservicios. Está desarrollado con **Angular v19** para el frontend y **PHP/Laravel v11** para el backend. Utiliza un servidor local con **XAMPP** y un **Dockerfile** para su implementación en contenedores, además de un microservicio en **.NET 8** con WebSockets para la comunicación en tiempo real.`,
        website: '',
          imgbg: 'black',
          tabletMode: 13,
          phoneMode: 11,
          desktopMode: [],
          folerPictures: 'MODULO_MESEROS_BDKREST'

        },
        
        {
          image: 'https://www.ujed.mx/img/header/logo-ujed.2.png',
          title: 'Registro Aspirantes - UJED',
          description:
            'Sistema para la gestión de solicitudes de aspirantes universitarios dentro de la facultad  incluyendo las carreras (Medicina, Psicologia, Nutricion).',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://citas.facsa.ujed.mx/auth/login',
          imgbg: 'red',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKREST/LOGO_BCO.avif',
          title: 'Concentrador Web BDKREST',
          description:
            'El CW permite monitorear en tiempo real las transacciones diarias de restaurantes, incluyendo ventas, inventarios y asistencia, accesible desde cualquier dispositivo.',
          details: `Este concentrador ofrece una visión integral de las operaciones en restaurantes, permitiendo a los gerentes revisar ventas, cortes de caja, y existencias desde cualquier ubicación. Con soporte para múltiples sucursales, se puede filtrar información por localización, y los datos se gestionan en una base de datos propia alojada en el servidor VPS con sistema operativo Linux.`,
          website: 'https://cw.bdkrest.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKGYM/LOGO_BCO.avif',
          title: 'Concentrador Web BDKGYM',
          description:
            'El CW permite a los administradores de gimnasios monitorear membresías, asistencias, y ventas en tiempo real desde cualquier dispositivo.',
          details: `Este concentrador optimiza la administración de gimnasios al permitir monitoreo de múltiples sucursales con filtros por localización. Los datos se gestionan en una base de datos propia ubicada en VPS de Linux, asegurando autonomía y control total sobre la información desde cualquier dispositivo.`,
          website: 'https://cw.bdkgym.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKSPA/LOGO_BCO.avif',
          title: 'Concentrador Web BDKSPA',
          description:
            'El CW permite a los spas gestionar citas, ventas de servicios, y control de inventario en tiempo real, accesible desde cualquier dispositivo.',
          details: `Especializado para spas, este concentrador permite administración remota de citas, ventas y control de inventario, con la opción de filtrar por sucursal en negocios con múltiples locaciones. Los datos se gestionan en una base de datos propia en VPS de Linux, ofreciendo independencia y acceso en tiempo real desde cualquier dispositivo.`,
          website: 'https://cw.bdkspa.com/login',
          imgbg: 'black',
        },
        {
          image: 'https://www.bdksistemas.com.mx/build/img/BDKTINT/LOGO_BCO.avif',
          title: 'Concentrador Web BDKTINT',
          description:
            'El CW permite monitorear la operación en tintorerías, desde la recepción y entrega de prendas hasta el control de ventas y reportes.',
          details: `Diseñado para el sector de tintorerías, este concentrador permite una administración remota completa, con capacidad para filtrar por sucursal en negocios con múltiples ubicaciones. La base de datos se gestiona en un VPS propio con Linux, proporcionando un control autónomo y acceso seguro a la información desde cualquier dispositivo.`,
          website: 'https://cw.bdktint.com/login',
          imgbg: 'black',
        },
        
        
        
        
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Monitor Cabildo - MUNICIPIO DE CD. LERDO',
          description:
            'El Monitor del Cabildo es impulsado por el Ayuntamiento de Lerdo con la finalidad de conocer las actividades y el desempeño de la máxima autoridad del municipio: el Cabildo.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://lerdocabildotransparente.mx/cabildo/inicio',
          imgbg: 'white',
        },
        {
          image: 'https://web.grupoapd.mx/logo.35207d01f78757a7.png',
          title: ' GRUPO APD',
          description:
            'Pagina con contenido estatico y animado para mostrar los servicios que el cliente ofrece en su pagina, esta pagina tiene como proposito mostrar un panorama del giro de la empresa.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://web.grupoapd.mx/',
          imgbg: 'white',
        },
      ],
    },
    {
      'title': 'Ionic',
      'iconsrc': '/icons/ionic.png',
      'projects': [
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Vialidad - MUNICIPIO DE CD. LERDO',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de multas para los agentes de Tránsito y Vialidad.',
          details: `Este sistema permite a los agentes gestionar multas en tiempo real, capturar evidencias fotográficas y generar tickets impresos mediante conexión con impresoras Zebra. Utiliza SQLite para almacenamiento local de datos, los cuales se sincronizan con servidores en Azure, asegurando actualización en la plataforma de pagos virtual. Desarrollado en Ionic Angular, con una API en C# y conectividad robusta, proporciona una experiencia integral y confiable.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Parquímetros - MUNICIPIO DE CD. LERDO',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de multas de parquímetros en la ciudad de Lerdo.',
          details: `Con esta app, los oficiales pueden gestionar multas de parquímetros, capturar evidencias y emitir tickets impresos en el lugar mediante impresoras Zebra conectadas. Utiliza SQLite para almacenamiento local y sincroniza datos en tiempo real con Azure para reflejar los cobros en la plataforma de pagos virtual. Desarrollada en Ionic Angular y respaldada por una API en C#, optimiza el flujo de trabajo de los oficiales en campo.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        {
          image: 'https://lerdodigital.mx/assets/logo-L.png',
          title: 'Plazas y Mercados - MUNICIPIO DE CD. LERDO',
          description:
            'Aplicación móvil para Android enfocada en la captura de datos, gestión de cortes de caja y reportes de ventas en las plazas y mercados de la ciudad de Lerdo.',
          details: `Esta plataforma permite la captura de datos de ventas, gestión de cortes de caja y emisión de tickets impresos en el sitio a través de impresoras Zebra, con soporte para evidencias fotográficas de las transacciones. Con SQLite para almacenamiento local y sincronización en la nube mediante Azure, facilita la administración de plazas y mercados, reflejando las transacciones en la plataforma de pagos. Desarrollado en Ionic Angular y con una API en C#, es una herramienta robusta para la gestión comercial.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        
        
        {
          image: 'https://web.grupoapd.mx/logo.35207d01f78757a7.png',
          title: 'OCR CNOP - APD',
          description:
            'Aplicación móvil para Android enfocada en la captura y procesamiento de credenciales, con integración de API de IA Butler para la extracción de datos y sincronización en SQL Azure.',
          details: `Esta aplicación permite la digitalización de credenciales mediante el uso de inteligencia artificial, extrayendo datos con la API de IA Butler y sincronizándolos en SQL Azure. Desarrollada originalmente con Express y renovada a NestJS para mayor escalabilidad, está diseñada para manejar más de 300 usuarios y sincronizar información con más de cuatro servidores locales y foráneos. Azure garantiza una entrega rápida y almacenamiento seguro, optimizando la gestión de datos para una experiencia de usuario fluida y confiable.`,
          website: 'https://web.grupoapd.mx/',
          imgbg: 'white',
        },
        
      ]
    },
    {
      'title': 'ASP.NET',
      'iconsrc': '/icons/dotnet.png',
      'projects': [
        {
          image: '/icons/dotnet.png',
          title: 'V380 CAMERA ',
          description:
            'Aplicacion OpenSource para capturar la imagenes de las camaras de seguridad IP locales y remotas, con la finalidad de tener un control de las camaras de seguridad.',
          details: `Esta aplicacion abre la posibilidad para crear un sistema de seguridad con camaras IP, permitiendo la visualizacion de las camaras en tiempo real, ademas de poder capturar imagenes y grabar videos de las camaras de seguridad. De esta forma se creara un API para poder controlar las camaras de seguridad y una aplicacion con IONIC.`,  
          website: 'https://github.com/AlanMelendez/V380PRO_CAMERA_CSHARP',
          imgbg: 'white',
        },
        {
          image: '/icons/dotnet.png',
          title: 'Vialidad - MUNICIPIO DE CD. LERDO',
          description:
            'API en C# para la gestión de multas de tránsito, permitiendo a los agentes capturar infracciones y evidencias en tiempo real.',
          details: `Esta API facilita el registro de multas de tránsito y captura de evidencias, con generación de tickets y sincronización en una plataforma de pagos. Proporciona acceso a reportes en tiempo real, optimizando la labor de los agentes en campo.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        {
          image: '/icons/dotnet.png',
          title: 'Parquímetros - MUNICIPIO DE CD. LERDO',
          description:
            'API en C# para la administración de multas de parquímetros, permitiendo el registro y actualización de infracciones.',
          details: `Con esta API, los oficiales pueden gestionar infracciones de parquímetros, capturar evidencia y emitir tickets en tiempo real. La sincronización con la plataforma de pagos permite a los usuarios realizar pagos desde cualquier dispositivo.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        },
        {
          image: '/icons/dotnet.png',
          title: 'Plazas y Mercados - MUNICIPIO DE CD. LERDO',
          description:
            'API en C# para la gestión de ventas e inventarios en plazas y mercados, facilitando el control de transacciones y reportes.',
          details: `Esta API permite registrar ventas, gestionar inventarios y realizar cortes de caja en tiempo real. Sincroniza la información con la plataforma de pagos del municipio, facilitando el monitoreo y administración de cada sucursal.`,
          website: 'https://www.lerdo.gob.mx/ldop/',
          imgbg: 'white',
        }
      ]
    },
    {
      'title': 'Laravel',
      'iconsrc': '/icons/laravel.png',
      'projects': [
        {
          image: 'https://www.lerdo.tecnm.mx/templates/tec19/images/logo_itsl.png',
          title: 'SILAB - TECNM Campus Lerdo',
          description:
            'Sistema escolar interno para el control de prestamos en laboratorios dentro de la institucion. Dentro de este sistema se pueden ver, crear y liberar adeudos para distintos tramites dentro de la institucion.',
          details: `Este proyecto es una plataforma web que permite a los estudiantes enviar 
                    y rastrear solicitudes de admisión, y a los administradores gestionar estas 
                    solicitudes de manera eficiente. Desarrollado con Angular para el frontend y 
                    PHP/Laravel para el backend, incluye autenticación segura, roles de usuario, 
                    y notificaciones por correo electrónico.`,
          website: 'https://www.lerdo.tecnm.mx/',
          imgbg: 'white',
        },
        
        {
          image: '/icons/laravel.png',
          title: 'Concentrador Web BDKREST',
          description:
            'API en Laravel para gestionar y monitorear las transacciones en restaurantes, incluyendo ventas, inventarios y asistencia en tiempo real.',
          details: `Esta API permite registrar transacciones, controlar inventarios y generar reportes por sucursal en tiempo real. Almacenado en un VPS con Linux, ofrece una solución autónoma y segura para los datos de cada restaurante.`,
          website: 'https://cw.bdkrest.com/login',
          imgbg: 'white',
        },
        {
          image: '/icons/laravel.png',
          title: 'Concentrador Web BDKGYM',
          description:
            'API en Laravel para administración de gimnasios, permitiendo monitorear membresías, asistencias y ventas de productos y servicios.',
          details: `Esta API gestiona membresías, control de asistencia y ventas de productos en gimnasios, con la opción de filtrar por sucursal. Cada gimnasio utiliza un VPS Linux para almacenamiento seguro de datos, accesible en tiempo real desde cualquier dispositivo.`,
          website: 'https://cw.bdkgym.com/login',
          imgbg: 'white',
        },
        {
          image: '/icons/laravel.png',
          title: 'Concentrador Web BDKSPA',
          description:
            'API en Laravel para la gestión de spas, permitiendo la administración de citas, ventas y control de inventario de productos y servicios.',
          details: `Esta API administra citas y servicios, control de inventario y reportes financieros en spas, con acceso remoto y filtros por sucursal. Cada negocio utiliza un VPS Linux para su base de datos, proporcionando seguridad y disponibilidad.`,
          website: 'https://cw.bdkspa.com/login',
          imgbg: 'white',
        },
        {
          image: '/icons/laravel.png',
          title: 'Concentrador Web BDKTINT',
          description:
            'API en Laravel para monitoreo de operaciones en tintorerías, gestionando la recepción y entrega de prendas, ventas y reportes.',
          details: `API para control de servicios en tintorerías, permitiendo gestionar la recepción de prendas, actualización del estado, y facturación en tiempo real. Los datos se almacenan en un VPS Linux de cada negocio, permitiendo un monitoreo completo de las operaciones.`,
          website: 'https://cw.bdktint.com/login',
          imgbg: 'white',
        }
       
      ],

    },
    {
      'title': 'NestJS',
      'iconsrc': '/icons/nest.png',
      'projects': [
        {
          image: '/icons/nest.png',
          title: 'API OCR CNOP - APD',
          description:
            'API para captura y procesamiento de credenciales con IA, usando Butler para extracción de datos y sincronización en SQL Azure.',
          details: `Esta API permite la digitalización de credenciales mediante inteligencia artificial, extrayendo datos y almacenándolos en SQL Azure para acceso seguro y sincronización en más de cuatro servidores. Soporta un alto volumen de usuarios y operaciones distribuidas.`,
          website: 'https://web.grupoapd.mx/',
          imgbg: 'white',
        }
      ]
    }
  ];