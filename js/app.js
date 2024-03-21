document.addEventListener('DOMContentLoaded', function() {
  const filtros = document.querySelectorAll('.filtro');
  const proyectos = document.querySelectorAll('.proyecto');

  filtros.forEach(filtro => {
    filtro.addEventListener('click', function() {
      const tipo = filtro.classList[1]; // Obtenemos la segunda clase que indica el tipo
      
      filtros.forEach(f => f.classList.remove('active')); // Quitamos la clase 'active' de todos los filtros
      filtro.classList.add('active'); // Agregamos la clase 'active' al filtro seleccionado
      
      proyectos.forEach(proyecto => {
        if (tipo === 'todos') {
          proyecto.style.display = 'block'; // Mostrar todos los proyectos
        } else {
          proyecto.style.display = 'none'; // Ocultar todos los proyectos
          if (proyecto.classList.contains(tipo)) {
            proyecto.style.display = 'block'; // Mostrar proyectos del tipo seleccionado
          }
        }
      });
    });
  });
});
const boton = document.getElementById('miBoton');
const boton1 = document.getElementById('miBoton1');
const boton2 = document.getElementById('miBoton2');

boton.addEventListener('mouseenter', () => {
  boton.classList.add('animacion');
  boton1.classList.add('animacion');
  boton2.classList.add('animacion');
});

boton.addEventListener('animationend', () => {
  boton.classList.remove('animacion');
  boton1.classList.remove('animacion');
  boton2.classList.remove('animacion');
});





/* Cuando hago CLICK .button, .nav TOGGLE 'activo' */
const button = document.querySelector('.button')
const nav    = document.querySelector('.nav')

button.addEventListener('click',()=>{
    nav.classList.toggle('activo')
})


// Cargar el archivo de traducciones
$.getJSON('/lang/lang.json', function(translations) {
    // Establecer el idioma predeterminado (español)
    var currentLang = 'es';
  
    // Función para cambiar el idioma
    function changeLanguage(lang) {
      $('[data-lang]').each(function() {
        var key = $(this).data('lang');
        if (translations[lang] && translations[lang][key]) {
          $(this).text(translations[lang][key]);
        }
      });
    }
  
    // Cambiar el idioma al cargar la página
    changeLanguage(currentLang);
  
    // Manejar el clic en los botones de cambio de idioma
    $('.translate').click(function() {
      var lang = $(this).attr('id');
      if (lang !== currentLang) {
        changeLanguage(lang);
        currentLang = lang;
      }
    });
  });
  

