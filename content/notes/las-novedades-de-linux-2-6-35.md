---
title: "Las novedades de Linux 2.6.35"
excerpt: "Linus ha anunciado la versi&oacute;n 2.6.35, como siempre aqu&iacute; est&aacute; la traducci&oacute;n castellana de las novedades principales. A vista de p&aacute;jaro, esta versi&oacute;n a&ntilde;ade soporte para repartir autom&aacute;ticamente la carga de red entrante entre varias CPUs, soporte de Direct I/O para Btrfs, un modo de journaling alternativo para XFS, inclusi&oacute;n de la interfaz del depurador KDB, varias mejoras de perf, aceleraci&oacute;n de v&iacute;deo H.264 y VC1 en hardware Intel G45+, soporte del futuro Intel Cougarpoint, un sistema de defragmentaci&oacute;n de la memoria, soporte de L2TP versi&oacute;n 3 (RFC 3931), varios drivers y muchas peque&ntilde;as mejoras m&aacute;s."
coverImage: "/images/vaslibre-og.png"
date: "2010-08-02T11:52:33.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

![LinuxKernel](http://kernelnewbies.org/moin/kn-icon.png)

· Reparto automático entre varias CPUs del tráfico de red de entrada: Las tarjetas de red actuales han mejorado su rendimiento hasta el punto de que para una sola CPU moderna es cada vez más difícil mantener el ancho de banda de recepción al máximo. Dos nuevas características, contribuidas por Google, ayudan a repartir automáticamente la carga de los paquetes de red entrantes entre varias CPUs (los salientes ya se reparten por si solos). El procesado de protocolos(IP, TCP) se ha modificado para que pueda hacerse en paralelo. Cada dispositivo de red utiliza diferentes heurísticas para decidir en qué CPU se procesará el paquete (hash de la cabecera del paquete, afinidad con la CPU en la que se está ejecutando la aplicación que lo va a recibir). Esta característica emula por software lo que una tarjeta de red multiqueue hace en hardware. Un benchmark de 500 instancias del test netperf TCP\_RR con 1 byte de petición y respuesta en una e1000e montada en un servidor con CPU Intel de 8 cores ascienden de 104K tps a 303K tps. Un test RPC con 100 threads en cada host, va de 103K tps a 223K, y con menos latencia.

· Mejoras Btrfs: Direct I/O y -ENOSPC completo. Direct I/O es una técnica utilizada para saltarse el caché a la hora de escribir. Esto daña el rendimiento (es como montar un sistema de archivos en modo "sync"), pero es utilizado extensivamente en grandes bases de datos a las que les gusta implementar su propio cache optimizado. -ENOSPC completo: Linux 2.6.32 ya tenía soporte de -ENOSPC para el uso común del sistema de archivos, pero existían varios casos raros en ciertas operaciones complejas, como operaciones de gestión de volumenes, en los que podía haber fallos. El código -ENOSPC de esta versión maneja correctamente todos los casos: balanceo de espacio libre, gestión de discos, logging de fsync y otros.

· XFS delayed logging: Esta versión añade un nuevo modo de journaling para ZFS llamado "delayed logging", que ha sido modelado según los sistemas de journaling de Ext3/4 y reiserfs. Permite acumular múltiples transacciones asíncronas en memoria. La reducción del ancho de banda utilizado para el log decrece en gran medida, y las cargas que hacen un uso intensivo de los metadatos aumentan su rendimiento en la misma proporción. El formato de disco del journal no ha cambiado, solo las estructuras en memoria y el código. Esta característica es aun experimental, asi que no está recomendada excepto para pruebas. Puede activarse con la opción "-o delaylog"

· Frontend del depurador KDB: Linux ha tenido un depurador desde 2.6.26, llamado Kgdb. Pero desde hace años existen dos depuradores para Linux, Kgdb y KDB. La diferencia entre ambos siempre fue que Kgdb requiere un ordenador adicional en el que ejecutar una instancia de gdb, que permite una depuración profunda. KDB, en cambio, puede utilizarse en el mismo ordenador, pero sus características de depurado son más simples. En esta versión se ha incluido también el depurador KDB, pero modificado para funcionar sobre los mecanismos internos de KGDB.

· Mejoras de perf:  
\- Modo "live" perf-inject: Hasta ahora, los usuarios tenían que ejecutar "perf record" y "perf report" en dos comandos diferentes. Perf-inject introduce un modo "live", que permite grabar y reportar en un solo comando, como por ejemplo perf record -o - ./hackbench 10 | perf inject -v -b | perf report -v -i - . Pero esto es demasiado complejo, asi que se ha añadido soporte para invocar automáticamente el modo live si no se especifica record/report. Por ejemplo: perf trace rwtop 5. Cualquiera de los scripts listados en 'perf trace -l' pueden utilizarse directamente el modo live.  
\- perf kvm: Una herramienta para monitorizar el rendimiento de las VMs desde el host.  
\- perf probe: Soporte para acceder a miembros de las estructuras de datos. Con est, perf-probe acepta miembros de estructuras (es decir, acepta los operadores punto '.' y flecha '->') como argumentos. Ejemplos: # perf probe --add 'schedule:44 rq->curr'. O # perf probe --add 'vfs\_read file->f\_op->read file->f\_path.dentry'  
\- Mejorar --list: para mostrar las sondas existentes con número de línea y nombre de archivo. Esto permite comprobar fácilmente qué linea está "sondeada". Por ejemplo:  
\# perf probe --list  
probe:vfs\_read (on vfs\_read:8@linux-2.6-tip/fs/read\_write.c)  
\- Implementación de una UI en la consola con newt.

· Mejoras gráficas: i915: Soporte de aceleración para vídeo H.264 y VC1 en hardware G45+, soporte del futuro Intel Cougarpoint, monitorización de energía y autorefresco de memoria en hardware Ironlake. Radeon: Trabajo inicial para la gestión de energía, simplificación y mejora del reseteo de GPU, implementación varias partes importantes para soportar chips Evergreen, permitir el uso de VRAM no mapeable, soporta para cuando no hay salidas de vídeo conectadas.

· Compactación de memoria: Este es un mecanismo que trata de reducir la fragmentación externa de la memoria que intenta agrupar las páginas utilizadas y las libres en un gran bloque de páginas usadas y un gran bloque de páginas libres, lo que permite hacer asignaciones de memoria grandes que no son posibles si hay fragmentación. La implementación consiste en dos escanners, uno de páginas a migrar, que empieza a buscar páginas utilizadas por el principio de la zona de memoria, y otro de páginas libres, que empieza a buscar páginas libres por el final. Cuando ambos escanners se encuentran en el medio de la zona, se mueven las páginas utilizadas al lugar de las libres. Las pruebas han mostrado que la cantidad de I/O requerido para satisfacer una gran asignación disminuye drásticamente. La compactación puede activarse de tres modos diferentes: manualmente, escribiendo algún valor a /proc/sys/vm/compact\_memory. Puede activarse manualmente, pero para una sola zona determinada, escribiendo algún valor a /sys/devices/system/node/nodeN/compact. Y también se activa automáticamente cuando no se consigue asignar una gran porción de memoria.

· Soporte para múltiples tablas de ruta multicast: normalmente, un router multicast ejecuta un demonio en espacio de usuario que decide con un paquete fijándose en las direcciones de origen y destino. Esta característica añade soporte para múltiples tablas de rutas multicast, así el kernel es capaz de tomar las interfaces y las marcas de los paquetes y ejecutar múltiples demonios en espacio de usuario simultaneamente, cada uno manejando una sola tabla.

· Soporte de L2TP versión 3 (RFC 3931): Esta versión añade soporte para Layer 2 Tunneling Protocol (L2TP) version 3, RFC 3931.

· Protocolo CAIF: Se trata de un protocolo utilizado por módems ST-Ericsson.

· ACPI Platform Error Interface: Soporte para la ACPI Platform Error Interface (APEI). Este sistema mejora especialmente la gestión de NMI (interrupciones no enmascarables). Además, soporta una tabla para guardar errores MCE en flash.  

Esto viene a ser todo. Como siempre, aquí está la lista completa.

Enlace:

[http://lkml.org/lkml/2010/8/1/188](http://lkml.org/lkml/2010/8/1/188)

[http://kernelnewbies.org/Linux\_2\_6\_35](http://kernelnewbies.org/Linux_2_6_35)

Fuente:  
Por Diego Calleja  
[http://diegocg.blogspot.com/](http://diegocg.blogspot.com/)
