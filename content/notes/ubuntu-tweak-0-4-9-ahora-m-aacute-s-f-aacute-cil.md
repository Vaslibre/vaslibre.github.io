---
title: "Ubuntu Tweak 0.4.9 Ahora m&aacute;s f&aacute;cil"
excerpt: "Nueva versi&oacute;n 0.4.8 de Ubuntu Tweak, excelente aplicaci&oacute;n para configurar gr&aacute;ficamente muchas opciones de Ubuntu."
coverImage: "/images/vaslibre-og.png"
date: "2009-09-16T12:29:10.000-04:30"
author:
  name: "Hector  A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

Las novedades más importantes son y como ya lo habíamos comentado, el soporte para Karmic y ahora la opción de manejar las fuentes por separado, ideal para quien usa muchas repositorios de teceros, pasando de algo confuso como esto:

![1](http://i243.photobucket.com/albums/ff135/Ubuntips/ubuntu-tweak-049-1-640x402-1.png)

a algo mucho más sencillo para entender de una sola mirada como esto:

![2](http://i243.photobucket.com/albums/ff135/Ubuntips/ubuntu-tweak-049-2-640x402-1.png)

También han sido agregadas un montón de PPAs: aMule, Google Testing Repository, GmChess (Chinese Chess), Smplayer Testing, GIMP Testing, Back In Time (Backup tool), Geany, SpiceBird, Moblin Testing, PlayOnLinux, RedNotebook, Breathe Icon Theme, Qt, Mono, Exaile, Clutter, Ubuntu X Unstable, Gloobus……

Otra característica muy interesante que se ha agregado es la del menú Agregar/Remover que ahora no solo soporta programas, también podemos hacer uso de esta función con temas:

Desde esta versión Ubuntu Tweak trae paquetes separados para 32 y 64 bits.

Puedes instalarlo con el paquete deb correspondiente a tu versión y arquitectura que encontrarás aquí.

O como siempre, agregando su repositorio para estar siempre actualizado:

Primero validamos la clave GPG de Launchpad con:

**sudo apt-key adv --recv-keys --keyserver keyserver.ubuntu.com FE85409EEAB40ECCB65740816AF0E1940624A220**

y luego agregamos el repositorio a nuestra sources.list:

**deb http://ppa.launchpad.net/tualatrix/ppa/ubuntu jaunty main**

para instalarlo con:

**sudo apt-get update  
sudo apt-get install ubuntu-tweak**

Fuente:  
[http://www.ubuntips.com.ar](http://www.ubuntips.com.ar)
