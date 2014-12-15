var less = require('less') // less modülünü çağır
var fs = require('fs'); // file system modülünü çağır

var lessFile = fs.readFileSync('./less/style.less', 'utf8');

//console.log(less.data.colors.aliceblue); // aliceblue renginin hex kodunu verir

// less.render('@renk: #069; a {color: @renk;}', function(hata, sonuc){
//   if(hata) {
//     console.log(hata);
//   } else {
//     console.log(sonuc.css);
//   }
// });

// less.render(lessFile, function(hata, sonuc){
//   if(hata) {
//     console.log(hata);
//   } else {
//     console.log(sonuc.css);
//   }
// });

less.render(lessFile, function (hata, sonuc) {
  if (hata) {
    console.log(hata.line + '. Satırda "' + hata.message + '" Hatası var');
  } else {
    fs.exists(__dirname + '/css', function (varmi) {
      if (varmi !== true) {
        fs.mkdir(__dirname + '/css');
      }
      fs.writeFile(__dirname + '/css/style.css', sonuc.css, function (err) {
        if (err) {
          console.log('Bir Hata Oluştu :' + err);
        } else {
          console.log('işlem başarılı');
        }
      });
    });
  }
});
