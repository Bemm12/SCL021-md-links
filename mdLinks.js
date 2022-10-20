const chalk = require('chalk');
const fs = require('fs');// fs es el módulo del sistema de archivos Node.js le permite trabajar con el sistema de archivos en su computadora.
const path = require('path');//El path módulo proporciona utilidades para trabajar con rutas de archivos y directorios.
const mdLinks = (pathDocument) => new Promise((resolve, err) => {
// Métodos de path que devuelven una ruta absoluta
  const toAbsolutePath = path.resolve(pathDocument);// Absoluta
  const docExtension = path.extname(toAbsolutePath);//obtener la extensión de la ruta de un archivo.
  const linksRegExp = /\[((.+?))\]\((http|https|ftp|ftps).+?\)/g;
  const hrefRegExp = /\((http|https|ftp|ftps).+?\)/g;
  const textLinksRegExp = /\[.+?\]/g;

  if (docExtension === '.md') {

    const docMdToString = fs.readFileSync(toAbsolutePath).toString();
    const linksMatchInMd = docMdToString.match(linksRegExp);
 
    const arrayLinksMd = [];

    for (let i in linksMatchInMd) {

      let textLinksMd = linksMatchInMd[i].match(textLinksRegExp)[0];
    
      let urlsLinksMd = linksMatchInMd[i].match(hrefRegExp)[0];
      
      arrayLinksMd.push({
        href: urlsLinksMd.substring(1, urlsLinksMd.length - 1),
        text: textLinksMd.substring(1, textLinksMd.length - 1).slice(0,49),
        file: pathDocument
      });

    }
    resolve(arrayLinksMd);
  } else {
    console.log (chalk.bgRed('La Extensión del archivo ingresado no es: ".md" Por favor verificalo!'));
  }
});
module.exports = mdLinks;
