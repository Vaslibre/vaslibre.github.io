---
title: "Disponible 2da versión candidata de Canaima GNU/Linux 3.1"
excerpt: "La gente de Canaima GNU/Linux después de varios meses de intensa correcciones de errores, múltiples pruebas y consolidación comunitaria, liberó la 2da versión candidata de su distribución, Canaima Popular 3.1 (3.1~VC2)"
coverImage: "/images/vaslibre-og.png"
date: "2012-07-07T10:28:55.000-04:30"
author:
  name: "Hector A. Mantellini (xombra)"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

![Canaima](http://ciberlatino.files.wordpress.com/2011/07/distributor-logo.jpeg)Como toda versión candidata, la misma es ofrecida a toda la comunidad de usuarios de Canaima GNU/Linux para que pueda probar las nuevas características que serán integradas en la próxima versión estable del sistema operativo. Está especialmente diseñada para aquellos que no quieren esperar mucho tiempo para tener su Canaima GNU/Linux actualizado y por supuesto, deseen participar reportando incidencias, fallas o mejoras de lo que será la versión estable.

La versión 3.1~VC2 de Canaima Popular corrige varios errores presentes en anteriores versiones del sistema operativo, a la vez que implementa nuevas funcionalidades con el propósito de hacer que Canaima GNU/Linux sea cada día más un sistema operativo robusto, confiable y adaptado a las necesidades de sus usuarios y usuarias.

Nuevo esquema de repositorios

El nuevo repositorio, http://paquetes.canaima.softwarelibre.gob.ve/, es un repositorio unificado que fusiona el repositorio de la distribución padre Debian (http://universo.canaima.softwarelibre.gob.ve/) junto con el repositorio de paquetes nativos de Canaima (http://repositorio.canaima.softwarelibre.gob.ve/).

Además, se dividen los paquetes en tres secciones:

*   \* main: Contiene los paquetes de Debian (main) + Canaima.
*   \* aportes: Contiene paquetes de Debian (contrib) + Debian Multimedia.
*   \* no-libres: Contiene paquetes de Debian (non-free).

Así, de ahora en adelante, no es necesario incluir dos líneas de repositorio como siempre se ha acostumbrado. Por ejemplo, para Canaima 3.1, nombre código "**Auyantepui**", esta línea de código es la que debes colocar en tu archivo _**/etc/apt/sources.list**_:

**deb http://paquetes.canaima.softwarelibre.gob.ve/ auyantepui main aportes no-libres**

De todas formas no te preocupes, si estás actualizando desde una versión anterior de Canaima, tu configuración cambiará automáticamente.

Actualizando desde Canaima Popular 3.0 o Canaima Popular 3.1 (_Versión Candidata 1_)

\* (_Con permisos de administrador_) Abre tu archivo **/etc/apt/sources.list** con tu editor de texto favorito, borra todo el archivo y escribe la línea:

**deb http://paquetes.canaima.softwarelibre.gob.ve/ auyantepui main aportes no-libres**

\* Ejecuta el comando "aptitude update"en un terminal de root (_Aplicaciones >Accesorios >Terminal de Root_)

\* Ejecuta el comando "aptitude full-upgrade"en un terminal de root (_Aplicaciones >Accesorios >Terminal de Root_)

\* Espera a que culmine el procedimiento y reinicia tu computadora.

Más información e:  
[http://canaima.softwarelibre.gob.ve/](http://canaima.softwarelibre.gob.ve/)

Leído en: [http://somoslibres.org/](http://somoslibres.org/modules.php?name=News&file=article&sid=5592)
