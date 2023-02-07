const sharp = require('sharp');
const fs = require('fs');
const path = require('path');


const processImage = (target, destination) => {
  if (!fs.existsSync(destination)) {
    fs.mkdirSync(destination);
  }

  fs.readdirSync(target)
    .forEach(image => {
      console.log(image)
      if(image.includes('.jpg')){
        // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
        sharp(`${target}/${image}`)
          .resize(800)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.jpg`),
          );
    
        // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
        sharp(`${target}/${image}`)
          .resize(480)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.jpg`),
          );
      }else if(image.includes('.png')){
        // mengubah ukuran gambar dengan lebar 800px, dengan prefix -large.jpg
        sharp(`${target}/${image}`)
          .resize(800)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-large.png`),
          );
    
        // mengubah ukuran gambar dengan lebar 480px, dengan prefix -small.jpg
        sharp(`${target}/${image}`)
          .resize(480)
          .toFile(path.resolve(
              __dirname,
              `${destination}/${image.split('.').slice(0, -1).join('.')}-small.png`),
          );
      }
    });
}

processImage(path.resolve(__dirname, 'src/public/images/heros'), path.resolve(__dirname, 'dist/images/heros'))
processImage(path.resolve(__dirname, 'src/public/images/logos'), path.resolve(__dirname, 'dist/images/logos'))