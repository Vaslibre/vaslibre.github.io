---
title: "IPCop, la Distro Firewall"
excerpt: "IPCop es una distribuci&oacute;n Linux que implementa un cortafuegos (o firewall) y proporciona una simple interfaz web de administraci&oacute;n bas&aacute;ndose en una computadora personal. Originalmente naci&oacute; como una extensi&oacute;n (fork) de la distribuci&oacute;n SmoothWall."
coverImage: "/images/vaslibre-og.png"
date: "2010-06-24T13:35:14.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

IPCop tiene como objetivos ser un cortafuegos sencillo, con pocos requerimientos hardware orientado a usuarios domésticos o a pequeñas empresas (SOHO), administrado a través de una interfaz web, con funcionalidades basicas y avanzadas, yendo (a manera de ejemplo) desde el simple filtrado de paquetes hasta la asignación de ancho de banda fijo a cada puesto de trabajo o la configuración de redes virtuales VPN. IPCop se actualiza desde el Interfaz Web de manera muy sencilla, incluyendo actualizaciones del Kernel.

IPCop está capado y solo tiene instaladas las herramientas justas para su función como firewall, limitando el daño que podría hacer un intruso que comprometiera el sistema. Si se desea ampliar la funcionalidad existen extensiones, comunes con SmoothWall, que permiten instalar todo tipo de utilidades como por ejemplo instalar Nmap para escanear IPs.

Su interfase de usuario es totalmente web; aunque permite también acceso por SSH.

Requiere de un hardware dedicado y permite gestionar el acceso a Internet, la seguridad y la interacción de hasta cuatro redes distintas que, en la jerga del IPCop, se denominan GREEN, BLUE, ORANGE y RED. Las mismas tienen las siguientes características:

**GREEN**: Esta es la interfase de red de nuestra LAN o red de área local. Aquí es donde conectaremos todos nuestros equipos que necesiten mayor protección, como servidores que no tengan que tener presencia en Internet y puestos de trabajo. Los dispositivos que se encuentren conectados a esta interfase tendrán acceso irrestricto a las interfases RED, BLUE y ORANGE, o sea que podrán salir a Internet (y conectarse a los equipos que se encuentren en cualquiera de estas otras tres redes) por cualquier puerto, pero a su vez los equipos de la interfase RED (equipos en Internet) no pueden iniciar conexiones a ningún equipo que se encuentre en las interfases GREEN, BLUE y ORANGE. En otras palabras, estarán protegidos del exterior, en el sentido que no son accesibles desde Internet.

**BLUE**: Es la interfase que se asigna normalmente para conectar un access point de modo que se puedan conectar dispositivos inalámbricos. De todas maneras sirve para conectar  
cualquier otra red que se necesite sea esta inalámbrica o no. Los dispositivos que se encuentren en esta red, no podrán iniciar una conexión a los dispositivos que se encuentren en la interfase GREEN, pero salvo esta excepción, contarán con el mismo nivel de acceso y protección que cuentan los dispositivos conectados a la interfase GREEN. No es necesario activar esta interfase en una instalación de IPCop si no se cuenta con más de una red, o no se va a utilizar un router inalámbrico(\*).

**ORANGE**: Esta es la interfase que se utilizará para montar una DMZ o zona desmilitarizada. Principalmente se utiliza para montar servidores web, de correo, de ftp, etc. que deban tener presencia en Internet; o sea que sean accesibles desde Internet, pero que en el caso que se produzca alguna intrusión a algún equipo de esta red, eso no comprometa la seguridad de nuestra red interna (GREEN). Los equipos que formen parte de la red ORANGE no podrán  
iniciar conexiones a ninguno de los dispositivos que se encuentren en las interfases GREEN y BLUE. No es necesario activar esta interfase en una instalación de IPCop si no se piensa utilizar una DMZ.

**RED**: Es la interfase de red que nos conectará directamente a nuestro proveedor de Internet. Puede ser una conexión ADSL, cablemodem, una línea dedicada o hasta inclusive un modem telefónico común. Obviamente que por razones de ancho de banda esta última opción es desaconsejable, pero es perfectamente factible tenerla configurada para una contingencia en la cual nuestro proveedor de Internet tenga inconvenientes para brindarnos nuestro vínculo habitual, pero si este operativo el acceso dialup. Cualquier instalación de IPCop contará con esta interfase habilitada. (Soporta tanto dispositivos ethernet como USB) Como aclaración cabe destacar que los equipos que están en la misma red, ya sea esta GREEN, BLUE u ORANGE, tienen la posiañlbilidad de iniciar conexiones entre ellos.  
(\*) En el caso de contar con un router wifi, si bien es conveniente, no es obligatorio que este conectado a la interfase blue, ya que se podrá conectar sin problemas a la interfase GREEN.

![IPcop](http://static.howtoforge.com/images/ipcop/example_ipcop_network.png)

En resumen de colores:  
Las diferentes zonas las divide en colores, siendo:  
Roja (Red) = zona de Internet,  
Verde (Green) = Red de Área Local (LAN) cableada,  
Naranja (Orange) = zona desmilitarizada (DMZ, para la granja de servidores),  
Azul (Blue) = zona inalámbrica (Wireless).

Vídeo:

IPCop - Firewall / Content Filter / Block Porn / Web Proxy Cache - Copfilter / AdvProxy / URL Filter

Para ver otros vídeos en Youtube.com click [aqui](http://www.youtube.com/results?search_query=ipcop&aq=f)

Sitio Web: [http://sourceforge.net/projects/ipcop/](http://sourceforge.net/projects/ipcop/)

Documentación:  
[http://sourceforge.net/apps/trac/ipcop/wiki/Documentation](http://sourceforge.net/apps/trac/ipcop/wiki/Documentation)

Manual de administración: [http://hivelocity.dl.sourceforge.net](http://hivelocity.dl.sourceforge.net/project/ipcop/IPCop%20Documentation/1.4.21/ipcop-admin-en-1.4.21.pdf)

Fuentes consultadas:  

. [http://es.wikipedia.org](http://es.wikipedia.org/wiki/IPCop)  
. [http://www.taringa.net](http://www.taringa.net/posts/linux/1348427/Conociendo-e-Instalando-IPCOP.html)  
. [http://www.kriptopolis.org](http://www.kriptopolis.org/construye-tu-propio-cortafuegos-ii-ipcop)  
. [http://www.howtoforge.net](http://www.howtoforge.net/perfect_linux_firewall_ipcop)
