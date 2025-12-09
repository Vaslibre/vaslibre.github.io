---
title: "Wine 1.2 soporta aplicaciones 64 bits
"
excerpt: "Ha sido liberada la segunda versi&oacute;n estable en toda la historia de Wine, se trata de la esperada versi&oacute;n 1.2 que trae como una de sus notas m&aacute;s resonantes el ansiado y demandado soporte para aplicaciones de 64 bits."
coverImage: "/images/vaslibre-og.png"
date: "2010-07-18T10:38:04.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

_Loading and running 64-bit Windows applications is now supported on x86-64 processors._

_There are now two flavors of Wine prefixes, 32-bit and 64-bit. 32-bit prefixes only support 32-bit applications, while 64-bit prefixes support both 32-bit and 64-bit applications. The prefix flavor is set at prefix creation time and cannot be changed afterwards, since all the files and registry entries are in different locations. Backwards compatibility is ensured by considering all prefixes created with older Wine versions to be 32-bit._

![WINE](http://elsoftwarelibre.files.wordpress.com/2009/12/winehq_logo_glass.png)

Es importante destacar que esta versión cuenta con más de 23.000 cambios y más de 3.000 errores corregidos con un nuevo set de iconos basados en Tango. Podemos ver mayores detalles en este enlace.

Desde su centro de descarga podremos hacernos de los paquetes para nuestra distribución. Para versiones de Ubuntu sin autenticación automática de key, seguir instrucciones en este enlace.

Ubuntu con autenticación automática de key, seguir estas instrucciones:

Abrimos la terminal y pegamos estos comandos, sin perjuicio de poder hacerlo vía GUI siguiendo estas instrucciones.

_**sudo add-apt-repository ppa:ubuntu-wine/ppa && sudo apt-get update  
sudo apt-get dist-upgrade**_

En caso de que no hayas instalado nunca Wine, el último comando debes sustituirlo por sudo apt-get install wine

Sitio Web:[http://www.winehq.org/](http://www.winehq.org/)  

Fuente Original:  
[http://elsoftwarelibre.wordpress.com](http://elsoftwarelibre.wordpress.com)

Fuente:  
http://www.xombra.com
