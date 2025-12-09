---
title: "FatELF: binarios universales para Linux"
excerpt: "FatELF es nuevo formato de archivo que permite embeber m&uacute;ltiples archivos binarios ELF (Executable and Linkable Format) para diferentes arquitecturas en un solo archivo mucho m&aacute;s f&aacute;cil de distribuir. B&aacute;sicamente, es el equivalente para Linux de lo que en Mac OS X se conoce como Universal Binary, un archivo ejecutable que incluye las versiones compiladas para PowerPC y x86 de una determinada aplicaci&oacute;n, lo que le permite ejecutar nativamente en ambas arquitecturas sin un impacto negativo en la performance."
coverImage: "/images/vaslibre-og.png"
date: "2009-11-17T07:26:29.000-04:30"
author:
  name: "Hector  A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

Sólo algunos de los [beneficios anunciados](http://icculus.org/fatelf/#benefits) que FatELF traería a Linux incluyen:

> Ya no será necesario que las distribuciones tengan descargas separadas para varias plataformas.  
> Ya no será necesario tener directorios /lib, /lib32 y /lib64 separados.  
> Ya no será necesaria la librería de compatibilidad ia32.  
> Soporte para binarios de 32 y 64 bits en un sólo archivo.  
> Se podrá distribuir un único archivo que funcione en Linux y en FreeBSD.

Y no menos importante, el proyecto de FatELF cree que este concepto podría usarse para facilitar una transición progresiva de la plataforma de 32 bits a la de 64, de una forma similar a como Apple lo hizo muy exitosamente de PowerPC a Intel en todas sus Macs gracias a sus propios binarios universales.

Para demostrar FatELF hay una [imágen ISO de 1.8 Gb](http://icculus.org/fatelf/vm/) de una máquina virtual de VMWare con Ubuntu 9.04, que debería ser capaz de ejecutarse igual de bien con VMWare Workstation, VMWare Player o VMWare Fusion en Linux, Mac OS X o Windows.

Artículo completo en [The H Open Source](http://www.h-online.com/open/news/item/FatELF-to-bring-Universal-binaries-to-Linux-837296.html).

Fuente:  
[http://www.vivalinux.com.ar/](http://www.vivalinux.com.ar/)
