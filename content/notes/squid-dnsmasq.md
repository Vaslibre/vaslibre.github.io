---
title: "Squid + DNSMasq"
excerpt: "Necesitabamos compartir una señal wifi por medio de esa misma tarjeta wifi donde estaba conectado a otra red, ya que tenia una tarjeta integrada de red lo que hicimos fue lo siguiente..."
coverImage: "/images/vaslibre-og.png"
date: "2012-01-29T21:54:46.000-04:30"
author:
  name: "Angel Cruz (abr4xas)"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

![Squid+DNSMasq](http://i43.tinypic.com/qq3lhu.jpg)

**Squid+DNSMasq=WIFI**

PROBLEM?

Para poder usar el Squid obviamente lo instalamos, en cualquier distro basada en Debian:

_**sudo apt-get install squid**_

Ahora el DNSMasq:

_**sudo apt-get install dnsmasq**_

Ok bueno,

Imaginemos lo siguiente...  

Tenemos la nube, que ira conectada a nuestra tarjeta wifi y la salida (_bridge_) de esa conexión será por _eth0_ hacia nuestro router y de ahi tendremos wifi.

Ok, _eth0_ tendra la IP (_en nuestro caso_) **_192.168.0.10/24_** el router (**_TP-Link_**) tendrá la IP **_192.168.0.11/24_** a partir de aquí los rangos de IP serán:

**192.168.1.100 ---> 149  
192.168.1.150 ---> gateway**

_**192.168.0.10 ---> DNS 1  
8.8.8.8 ---> DNS 2  
8.8.4.4 ---> DNS 3**_

_\*\*\* Que podemos usar OpenDNS (208.67.222.222) o los de COMODO (8.26.56.26), para una "mayor seguridad"._ Los rangos de IP pueden cambiar según nuestras necesidades. \*\*\*

**PROXY (_Squid_)**

El proxy tendrá la IP _**192.168.0.10**_ (**_si, la de eth0_**) con el puerto _**3128**_ (**_default squid_**) y por DNS:

**192.168.0.10  
8.8.8.8  
8.8.4.4**

Ver la configuración del squid.conf en este [enlace](http://vaslibre.org.ve/publicaciones/squid.conf "Enlace de descarga para el squid.conf") o editalo usando:

_**sudo gedit /etc/squid/squid.conf**_

Ahora, las reglas para la IPTables:  
Esto en la consola, claro!! ;)

**_iptables -t nat -A POSTROUTING -s 192.168.0.0/24 -o wlan0 -j MASQUERADE  
echo 1 > /proc/sys/net/ipv4/ip\_forward  
iptable-save_**

Despúes, levantamos el squid:

**_/etc/init.d/squid start_**

A medida de que vayas navegando se notará el cambio de velocidad en las páginas que más visitas, debido a que estaran "cacheadas" en dos directorios del disco duro se puede cambiar la configuración del squid para que use un pendrive de 2gb para acelerar el tiempo de respuesta del proxy.

Luego les digo como cambiar eso ;)

Y chan, chan!! :D

Más información:  
[http://www.squid-cache.org/](http://www.squid-cache.org/ "Sitio oficial de Squid")  
[http://www.thekelleys.org.uk/](http://www.thekelleys.org.uk/ "Sitio oficial de DNSMasq")  
[http://es.wikipedia.org/wiki/Netfilter/iptables](http://es.wikipedia.org/wiki/Netfilter/iptables "Que es IPTables")  

_**\*\* Nota:**_

Si eres nuevo en esto quizás existan algunas cosas (por no decir todo xD) que no entiendas pero en este caso te explicaré algo que es más notorio que otra cosa:

**192.168.0.10/24** <-- Seguro quedaste con cara de **_o\_O_**  
Bueno, esto quiere decir que la mascara de red será de la siguiente forma:

**255.255.255.0**

Es decir, la IP del router tendrá la misma mascara de red de eth0.  
**Cualquier otra duda, google con eso _xD_**

Gracias a @[Sinfallas](http://twitter.com/sinfallas "Sigue a Sinfallas en twitter") por ayudarnos a configurar todo esto y a @[xombra](http://twitter.com/xombra "Sigue a xombra en twitter") por ponerlo puyuo!! Y obvio, me tienes que seguir a mi!! ¬¬" @[abr4xas](http://twitter.com/abr4xas "Sigue a abr4xas en twitter")

Ahora bien, si sacan cuentas tendremos:  
_1 modem CANTV  
1 tarjeta de red.  
1 tarjeta wifi  
1 router_  
4 mascaras que haran entretenida la noche a cualquiera que quiera entrar sin permiso a su red!!
