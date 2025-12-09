---
title: "Singularity, un sistema operativo hecho con C#"
excerpt: "Hace poco fue anunciada la liberaci&oacute;n de la versi&oacute;n 2.0 de Singularity RDK (Research Development Kit). Esto a trav&eacute;s de c&oacute;digo fuente y un archivo ISO arrancable. Ahora bien, &iquest;qu&eacute; es Singularity? Es un prototipo de sistema operativo iniciado en 2003 por un equipo de investigaci&oacute;n en Microsoft Research."
coverImage: "/images/vaslibre-og.png"
date: "2010-08-12T14:40:46.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

Los investigadores detrás de Singularity buscan explorar, reexaminar y mejorar la calidad de la decisiones de diseño en la construcción de nuevos sistemas operativos. Puesto que estos están ubicados al fondo de casi cualquier pila de software, sus efectos son profundos.

Alrededor de Singularity también se están creando extensiones a lenguajes de programación, y desarrollando nuevas técnicas y herramientas para especificar y [verificar de manera formal](http://es.wikipedia.org/wiki/Verificación_formal) la conducta de los programas.  

De forma arquitectónica, Singularity tiene tres características:

> Procesos aislados para la protección de programas y servicios del sistema.
> 
> Canales de comunicación basados en contratos —especificaciones bien precisas—.
> 
> Programas basados en [manifiestos](http://en.wikipedia.org/wiki/Manifest_\(.NET_Framework\)) para la verificación de las propiedades del sistema.

De forma sorprendente, el núcleo de Singularity ha sido programado con éxito usando el [lenguaje C#](http://channel9.msdn.com/shows/Going+Deep/Singularity-A-research-OS-written-in-C/). En particular con el extraño lenguaje [#Sing](http://en.wikipedia.org/wiki/Sing_sharp). Naturalmente, las demás partes del sistema fueron escritas en ensamblador, C/C++. Es importante reiterar que se trata de un prototipo, no de un sistema operativo completo que puedas instalar y usar de forma normal en tu equipo de cómputo.

![Arquitectura Singulaity](http://i3.codeplex.com/Project/Download/FileDownload.aspx?ProjectName=singularity&DownloadId=29184)

Puedes conocer los detalles de diseño en [alguno](http://research.microsoft.com/pubs/69431/osr2007_rethinkingsoftwarestack.pdf) de los interesantes artículos de investigación que ha publicado el grupo encargado de Singularity. Por cierto, este sistema operativo es software de código abierto —esto es debatible— gobernado por la [licencia no comercial](http://singularity.codeplex.com/license) sólo para uso académico —E. Park [explica](http://gpl3.blogspot.com/2008_03_01_archive.html) muy bien sus restricciones.

Singularity RDK 2.0 Initial Release (17067) (Descarga)  
[http://singularity.codeplex.com/releases/view/19428](http://singularity.codeplex.com/releases/view/19428)  

Enlaces Importantes:  
Singularity RDK  
[http://singularity.codeplex.com/](http://singularity.codeplex.com/)

Projects Singularity  
[http://research.microsoft.com/en-us/projects/singularity/](http://research.microsoft.com/en-us/projects/singularity/)

Fuente:  
[http://bitelia.com/](http://bitelia.com/2010/08/singularity-un-sistema-operativo-hecho-con-c)
