---
title: "El milagro de las 200 l&iacute;neas de c&oacute;digo en Kernel Linux"
excerpt: "Interesant&iacute;simo el art&iacute;culo de Phoronix en el que nos explican c&oacute;mo un peque&ntilde;o parche de apenas 200 l&iacute;neas de c&oacute;digo podr&iacute;a suponer una mejora cr&iacute;tica en el rendimiento de nuestros sistemas gracias a un dram&aacute;tico incremento de los tiempos de respuesta a la hora de manejar multitarea."
coverImage: "/images/vaslibre-og.png"
date: "2010-11-16T14:18:13.000-04:30"
author:
  name: "Hector A. Mantellini"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

Esta modificación ha sido creada por Mike Galbraith, y está siendo revisada por Linus Torvalds, que parece realmente alucinado con las mejoras conseguidas gracias a dicha modificación:

Tengo que decir que estoy (agradablemente) sorprendido por lo pequeño que este parche ha acabado siendo, y como no es ni intrusivo ni feo en ningún modo.

También estoy contento con lo que logra hacer con el rendimiento interactivo. Tengo que admitir que mi caso de prueba es realmente trivial (leer email en un navegador web, desplazarme con el scroll un poco, además de hacer un ‘make -j64′ en el núcleo al mismo tiempo), pero es un caso de prueba que es muy relevante para mí. Y la mejora es impresionante.

Es una mejora para cosas como el scroll, pero lo que he descubierto que es más interesante es cómo parece que hace que parezca que las páginas web se carguen mucho más rápido. Puede que eso no debiera ser sorprendente, pero siempre he asociado eso con el rendimiento de la red. Pero está claro que hay carga de CPU cuando cargamos una nueva página web y desde luego mucha más cuando cargamos más de 50 al mismo tiempo, algo que provocará que la CPU se quede sin recursos en el proceso de carga, y que probablemente también provoque que las peticiones HTTP no se procesen lo suficientemente rápido.

Así que creo que este es desde luego uno de esos parches con “mejoras reales”. Buen trabajo. La planificación en grupos se convierte de algo “útil para ciertas cargas específicas en el servidor” a “esta es una característica alucinante”.

La idea es la crear grupos de tareas por TTY en un esfuerzo para mejorar la interactividad del escritorio bajo cargas de trabajo exigente, y en 224 líneas es posible modificar el planificador para que en estos escenarios la mejora de la interactividad sea impresionante.

En Phoronix han probado ambas versiones (con y sin el parche) y han constatado que la mejora es impresionante, y de hecho enlazan a dos vídeos que incluimos a continuación y que demuestran que la diferencia entre activar el parche y no activarlo es sencillamente brutal.

Se espera incluso que el parche se aplique al kernel 2.6.37, pero seguro que podéis currároslo un poco para compilaros el kernel por vosotros mismos con esta modificación. Habrá que buscar información sobre los pasos detallados, pero no parece una tarea demasiado compleja.

Mientras tanto, os dejamos con los vídeos, el primero con la mejora desactivada, y el segundo con la mejora activada.

Enlace:  
[http://www.phoronix.com/scan.php](http://www.phoronix.com/scan.php?page=article&item=linux_2637_video&num=1)

Aquí está el parche:  
[http://lkml.org/lkml/diff/2010/11/15/450/1](http://lkml.org/lkml/diff/2010/11/15/450/1)  

Fuente Original:  
por Picajoso  
[http://www.muylinux.com/](http://www.muylinux.com/2010/11/16/el-milagro-de-las-200-lineas-de-codigo)

Visto en:  
[http://www.xombra.com/](http://www.xombra.com/go_news.php?nota=5183)
