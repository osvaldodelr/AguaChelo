// Selecciona el contenedor donde mostrarás los datos
const datosContainer = document.getElementById('datos-container');

// URL del archivo JSON
const jsonURL = '../src/database/post.json';

// Realiza una solicitud HTTP para obtener el JSON
fetch(jsonURL)
 .then(response => response.json())
 .then(data => {
   // Itera a través de los datos y crea elementos HTML para mostrarlos
   data.datos.forEach(item => {
     // Crea elementos HTML para la estructura de la tarjeta
     
     const cardDiv = document.createElement('div'); //<div class="card mb-3">
     cardDiv.classList.add('card', 'mb-3');

     const rowDiv = document.createElement('div'); //<div class="row g-0">
     rowDiv.classList.add('row', 'g-0');

     const imgDiv = document.createElement('div'); //<div class="col-md-3">
     imgDiv.classList.add('col-md-3');

     const img = document.createElement('img'); //<img src=
     img.src = item.imagen; // Reemplaza 'item.imagen' con la URL de la imagen correspondiente
     img.classList.add('img-fluid', 'rounded-start', 'postContainer');
     img.alt = 'Imagen adaptable';

     const colDiv = document.createElement('div');
     colDiv.classList.add('col-md-8');

     const cardBodyDiv = document.createElement('div');
     cardBodyDiv.classList.add('card-body');

     // Crea y configura los elementos HTML con los datos del JSON
     const h3 = document.createElement('h3');
     h3.classList.add('card-title', 'card-title-h3');
     h3.textContent = item.titulo;

     const p = document.createElement('p');
     p.classList.add('card-text', 'txt-parrafo');
     p.textContent = item.parrafo;

     const a = document.createElement('a');
     a.classList.add('text-dark');
     a.href = item.url;
     a.target = '_blank';
     a.textContent = 'leer más';

     const small = document.createElement('small');
     small.classList.add('text-body-secondary');
     small.textContent = item.fecha;


     const footer = document.createElement('footer');
     footer.classList.add('blockquote-footer');
     const cite = document.createElement('cite');
     cite.title = 'Source Title';
     cite.textContent = item.autor;
     footer.textContent = 'por ';
     //footer.appendChild(document.createTextNode('por '));
     footer.appendChild(cite);

     // Adjunta los elementos HTML en la jerarquía correcta
     imgDiv.appendChild(img);
     colDiv.appendChild(cardBodyDiv);
     cardBodyDiv.appendChild(h3);
     cardBodyDiv.appendChild(p);
     p.appendChild(document.createElement('br')); // Salto de línea
     p.appendChild(a);
     cardBodyDiv.appendChild(small);
     cardBodyDiv.appendChild(footer);

     rowDiv.appendChild(imgDiv); //<div class="col-md-3">
     rowDiv.appendChild(colDiv); //<div class="col-md-3">

     cardDiv.appendChild(rowDiv); //<div class="row g-0">

     // Agrega la tarjeta al contenedor principal
     datosContainer.appendChild(cardDiv); //<div class="card mb-3">
   });
 })
 .catch(error => console.error('Error al cargar el JSON:', error));