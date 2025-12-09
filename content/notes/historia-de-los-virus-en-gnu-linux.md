---
title: "Historia de los virus en GNU/Linux"
excerpt: "Dadas las estrictas medidas de seguridad integrado en Linux, es dif&iacute;cil de tomar ventaja de una vulnerabilidad en el equipo, pero algunos programadores han encontrado formas de evadir las medidas de seguridad. Hay varias opciones gratuitas de anti-virus en Linux que realmente deber&iacute;as usar, aunque no siempre se est&aacute;n ejecutando - un an&aacute;lisis semanal o mensual no hace da&ntilde;o. Las soluciones antivirus m&aacute;s comunes son: ClamAV , AVG , Avast y F-Prot."
coverImage: "/images/vaslibre-og.png"
date: "2010-11-29T15:25:40.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

**1996:** El grupo cracker VLAD escribió el primer virus de Linux llamado Staog. El virus se aprovechó de un fallo en el [kernel](http://es.wikipedia.org/wiki/Kernel_de_Linux) que le permitió permanecer residente en la máquina y esperaba por un archivo binario para ser ejecutado. Una vez ejecutado el virus se adhería a ese archivo. Poco después de que el virus fue descubierto el error fue corregido y el virus rápidamente se extinguió. Vlad fue también responsable de escribir el virus conocido Boza, inicialmente para Windows 95.1997: El virus informático Bliss hizo su salida al medio. El virus podía unirse a los ejecutables en el sistema y evitar que se ejecuten. Un usuario tenía que tener acceso de root para que el virus surtiera efecto, y aún estos días [Debian](http://es.wikipedia.org/wiki/Debian) sigue siendo vulnerable a este virus. La amenaza a Debian es mínimo, ya que los usuarios no suelen ejecutarse como root.

**1999**: No tiene ningún virus significativos se registraron este año, pero por extraño que parezca un mensaje de broma andaba diciendo que era un virus que amenazaba con instalar Linux en su computadora. En el momento el virus Melissa asolaba PCs en todo el mundo y el 1 de abril de 1999 (Día de los Inocentes) salió un mensaje de advertencia de que un virus llamado Tuxissa fue ejecutado en secreto para instalar Linux en los ordenadores desprevenidos.

**2000:** Un virus más inofensivo, Virus.Linux.Winter.341, se presentó y se inserta a sí mismo en archivos [ELF](http://es.wikipedia.org/wiki/Executable_and_Linkable_Format); los archivos ELF son los archivos ejecutables de Linux. El virus era muy pequeño, sólo 341 bytes, e insertaba Lotek by Wintermute en la sección de Notas de un archivo ELF. El virus también debía cambiar el nombre del equipo a Wintermute pero nunca obtuvo el control de una máquina para efectuar el cambio.

**2001**: Este fue un año lleno de acontecimientos para los virus de Linux, el primero fue el ZipWorm, un virus inofensivo que simplemente se adhería a cualquier archivo zip que se encontrara en el mismo directorio que fue ejecutado. A continuación fue el virus Satyr que también era un virus inofensivo, simplemente se adhería a los archivos ELF para añadir la cadena unix.satyr version 1.0 (c)oded jan-2001 by Shitdown \[MIONS\], http://shitdown.sf.\*\*(edited as URL causes Avast to block page). También fue liberado un virus llamado Ramen que reemplazaba los archivos index.html con su propia versión para mostrar Ramen Crew en la parte superior y un paquete Ramen Noodles en la parte inferior. Más tarde, un gusano con el nombre de Cheese salió, que en realidad cerró la puerta trasera creada por el virus de Ramen. Hubo varios otros virus lanzado este año, que eran relativamente inofensivos.

**2002**: Existía una vulnerabilidad en [Apache](http://es.wikipedia.org/wiki/Apache_Software_Foundation) que llevó a la creación y difusión del gusano Mighty. El gusano podría explotar una vulnerabilidad en la interfaz de Apache SSL, entonces infectar la computadora de víctimas desprevenidas. Una vez en el equipo crearía una conexión secreta a un servidor [IRC](http://es.wikipedia.org/wiki/IRC) y unirse a un canal para esperar que los comandos se enviaran a la misma.

**2003**: Otro virus inofensivo se presentó, fue llamado el virus de Rike. El virus, que fue escrito en lenguaje ensamblador, se adhería a sí mismo a un archivo ELF. Una vez conectado se ampliaría el espacio del archivo que desee y escribir Rike en ese espacio libre.

**2004**: Al igual que el virus del año anterior, el virus Binom simplemente ampliaba el tamaño del archivo y escriba la cadena \[Cyneox/DCA en el espacio libre. El virus se transmite por la ejecución de un archivo infectado.

**2005**: El gusano Lupper comenzó a propagarse a los grupos vulnerables de servidores web Linux. El gusano alcanzó un servidor web en busca de una dirección URL específica, entonces habría de intentar aprovechar una vulnerabilidad en [PHP](http://es.wikipedia.org/wiki/PHP)/[CGI](http://es.wikipedia.org/wiki/Common_Gateway_Interface). El servidor entonces permitía la ejecución remota de comandos shell y descargas de archivos, que llegaría a ser infectado y comenzar a buscar otro servidor para infectar.

**2006**: Una variante del gusano Mighty del 2002 llamado Kaiten nació. Este abría una conexión a un canal IRC y espera órdenes para ser enviado y ejecutado.

**2007**: Una brecha de seguridad en OpenOffice llevó a la propagación de un virus llamado BadBunny. Este virus podía infectar a Windows, Mac y Linux. El virus crea un archivo llamado badbunny.py como un guión [XChat](http://es.wikipedia.org/wiki/XChat) y crea badbunny.pl, un virus Perl para infectar otros archivos Perl. Hubo también un caballo de Troya liberado por el nombre de Rexob. Una vez en la máquina, se abriría una puerta trasera que permitía la ejecución remota de código.

2009: Un sitio web para los usuarios de [GNOME](http://es.wikipedia.org/wiki/GNOME) para descargar protectores de pantalla y otras piezas de aspecto visual organizó un protector de pantalla malicioso llamado Cascada sin saberlo. Una vez instalado en la máquina se abriría una puerta trasera que, al ejecutarse causaría que la máquina iniciara un ataque de denegación de servicio (DDoS). El ataque de [DDOS](http://es.wikipedia.org/wiki/Ddos) era orientado a un sitio web específico, MMOwned.com.

**2010**: El virus Koobface, un virus que se propaga a través de los sitios de redes sociales con los objetivos de Windows, Mac y, en una variante más reciente, los ordenadores Linux. Una vez infectado, el virus intenta recopilar información de acceso a [FTP](http://es.wikipedia.org/wiki/File_Transfer_Protocol) y sitios de redes sociales. Una vez que su contraseña ha sido comprometida el virus enviará un mensaje infectado a todos tus amigos en su red social.

Esta no es una lista completa de los virus de Linux, pero sí a los más importantes. También señala que la mayoría de los virus que se encuentran en Linux son bastante inofensivos. Sin embargo, eso no quiere decir que no existen. Asegúrate de mantener un ojo en lo que descargas y donde vas en Internet y lo más probable es que estarás libre de virus. Un escaneo de virus de vez en cuando no vendría mal tampoco.

Fuente Original: [Neowin](http://www.neowin.net/news/a-history-of-viruses-on-linux)

Otro enlace: [http://www.freerepublic.com/](http://www.freerepublic.com/focus/f-chat/2634313/posts)

Fuente:  
Por Claudio Concepción Certad  
[http://es.globedia.com/](http://es.globedia.com/historia-virus-gnu-linux)

Leído en: [http://www.xombra.com/](http://www.xombra.com/go_news.php?nota=5211)
