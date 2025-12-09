---
title: "Wadameka con IPv6 y zona de resolución de nombres inversos"
excerpt: "VaSLibre también pueden ser accesado a través del protocolo IP versión 6, gracias al arduo trabajo que realiza Julio Ortega @roliverio."
coverImage: "/images/vaslibre-og.png"
date: "2011-08-17T09:06:35.000-04:30"
author:
  name: "Hector A. Mantellini (Xombra)"
  picture: "/images/team/generic.png"
ogImage:
  url: "/images/vaslibre-og.png"
---

Con cara a un futuro cercano, nuestro amigo Julio Ortega (@roliverio) actualizó los servicios y además del IPv4 también tenemos disponibles conexión para IPv6 (correo electrónico, Web, Blogs y LDAP)

Proximamente colocaremos en el sitio web un indicador de protocolo de conexión, mostrando al navegante por cual vía está accesando, si es vía IPv4 o IPv6.

También se ha configurados una zona de resolución de nombres inversos delegada desde el proveedor de servicios de Internet de Telecable Onoto (Digitel) tanto para Wadameka (nuestro servidor principal) como para la plataforma pública de internet de nuestros amigos de Telecable Onoto que tienen a bien hacer el hosting, esto debido a que nuestro servidor DNS principal reside en su plataforma.

Es solo una forma de devolver contribuyendo también con lo que ellos nos dan. (_Yo gano tu ganas!!_!)

Y por otro lado, creo que Telecable Onoto y nosotros (por efecto) somos los únicos clientes de digitel que tienen la zona inversa delegada y bien configurada.

Si se preguntan para qué sirve eso, tiene un componente importante, permite autenticar la procedencia de nuestros correos electrónicos hacia afuera de manera que tengan una menor probabilidad de ser considerados SPAM.

Gracias a Julio Ortega (@roliverio) y a Telecable Onoto por su colaboración.
