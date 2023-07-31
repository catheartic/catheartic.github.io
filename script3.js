var a;
function myfunction() {
         if (navigator.userAgent.match(/Android/i)
         || navigator.userAgent.match(/iPhone/i)
         || navigator.userAgent.match(/iPad/i)
         || navigator.userAgent.match(/iPod/i)
         {
          a = true ;
          window.location.href = '/reader-mobile.html';
         } else {
            a = false ;
         }
