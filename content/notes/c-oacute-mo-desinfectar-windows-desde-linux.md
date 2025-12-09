---
title: "C&oacute;mo desinfectar Windows desde Linux"
excerpt: "Desde el sitio usemoslinux.blogspot.com infroman una forma sencilla de eliminar esos virus que tanto molestan a MS-Windows, usando un live cd ofrecido por F-Secure"
coverImage: "/images/vaslibre-og.png"
date: "2010-06-06T15:22:47.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

F-Secure ofrece un [live-cd basado en knoppix](http://www.f-secure.com/linux-weblog/) para sacar cualquier malware que puedas tener en tu instalación de windows. Su utilizacion es sencilla, se inserta el live-cd, busca actualizaciones desde un usb o internet y luego procede a analizar la partición/disco con windows.

Pueden descargar el [live cd desde aca](http://www.f-secure.com/en_EMEA/security/tools/rescue-cd) (118 MB). Es un zip, lo descomprimís y dentro esta la imagen ISO.

Luego, grabe la ISO a un cd o un USB usando UnetBootin y booteá.

![fsecure1](http://www.linuxjournal.com/files/linuxjournal.com/ufiles/gliverman-xpvm-2010-04-27-08-37-54.png)

Una vez terminado el booteo aparece esta pantalla de advertencia

![fsecure2](http://www.linuxjournal.com/files/linuxjournal.com/ufiles/gliverman-xpvm-2010-04-27-08-38-48.png)

Ahora intente actualizarse desde internet o desde un pendrive

![FS3](http://www.linuxjournal.com/files/linuxjournal.com/ufiles/gliverman-xpvm-2010-04-27-08-45-48.png)

Una vez finalizada la actualizacion se muestra la lista de particiones a escanear

![FS4](http://www.linuxjournal.com/files/linuxjournal.com/ufiles/gliverman-xpvm-2010-04-27-08-52-41.png)

Cuando ya seleccionó que escanear muestra el progreso

![FS5](http://www.linuxjournal.com/files/linuxjournal.com/ufiles/gliverman-xpvm-2010-04-27-09-29-05.png)

Y por último, muestra el reporte final

![FS6](http://www.linuxjournal.com/files/linuxjournal.com/ufiles/gliverman-xpvm-2010-04-27-09-32-48.png)

Ahi lo tienen, Linux salvando a Windows.

Fuente:  
por Eärendil  
[http://usemoslinux.blogspot.com](http://usemoslinux.blogspot.com)
