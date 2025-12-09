---
title: "Aplicaciones portables y multi-distribuci&oacute;n en GNU/Linux"
excerpt: "Una de las caracter&iacute;sticas m&aacute;s intersantes de Linux es el abanico de posibilidades con que se encuentran sus usuarios a la hora de tomar una decisi&oacute;n cualquiera. Al instalar una aplicaci&oacute;n por ejemplo, dependiendo de la distribuci&oacute;n en la que estemos, podremos instalarla autom&aacute;ticamente desde un repositorio (encarg&aacute;ndose autom&aacute;ticamente el instalador de las dependencias) o compilarlas a mano, &ldquo;a lo hombre&ldquo;. 
Estamos ahora ante una tercera posibilidad, cortes&iacute;a de Elementary. Se trata de AppImages, iniciativa que tiene como objetivo crear archivos que sean portables y se puedan ejecutar desde cualquier distribuci&oacute;n sin tener que descomprimir ni instalar nada. Descargamos, otorgamos permisos de ejecuci&oacute;n y listo, estemos en Ubuntu, Fedora u openSUSE."
coverImage: "/images/vaslibre-og.png"
date: "2010-07-25T11:13:10.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

[![](http://www.elementary-project.com/wiki/images/c/ce/Logos.png)](http://www.elementary-project.com/wiki/index.php?title=AppImages)  

Algunas de las aplicaciones que pueden ya utilizarse de este modo son:

> Pidgin, programa de mensajería instantánea  
> El cliente de irc XChat  
> Una de las mejores aplicaciones de torrent, Transmission  
> Blender, la alternativa libre para diseño 3D  
> Midori, navegador web que utiliza el motor WebKit

Uno de los aspectos que más me interesó del proyecto es que las aplicaciones no necesitan privilegios de root para ser instaladas, por lo que serán muy seguras, al no poder modificar absolutamente nada del sistema. Y siendo portables, además, podremos ejecutarlas desde un pendrive, sin la necesidad de tenerlas en el disco rígido del ordenador. Lo único que hay que hacer, tras descargas la aplicación, es otorgarle permisos de ejecución: bien podemos haciendo clic derecho y luego Propiedades > Permisos o desde la consola, con **_chmod +x nombreDeArchivo_**

Si les interesa, siguiendo una [pequeña guía](http://www.omgubuntu.co.uk/2010/07/distro-agnostic-packaging-making.html) y utilizando un script (que descargamos del sitio oficial del proyecto), podemos crear nuestras propias aplicaciones portables, de acuerdo a nuestras necesidades. ¿Qué piensan? Creo que es un concepto bastante innovador, similar al utilizado en Mac OS X, en que todo lo necesario para que una aplicación sea ejecutada se encuentra dentro de la propia aplicación pero con el plus de ser además multi-distribución.

Enlace original: [http://www.omgubuntu.co.uk](http://www.omgubuntu.co.uk/2010/07/portable-linux-apps-run-your-favourite.html)

Fuente:  
[http://bitelia.com/](http://bitelia.com/2010/07/aplicaciones-portables-y-multi-distribucion-en-linux)
