/* ── CONFIGURACIÓN DE DATOS COMPLETA ── */
const dataTalleres = [
  {
    titulo: "Noticias de Interés General",
    categoria: "Información",
    sede: "paloquemao",
    color: "#39A900",
    imagen: "IMG/1.jpeg", 
    horario: "Infórmate sobre todos los talleres",
    link: "https://chat.whatsapp.com/DickSKFJERoD8q3OvwV38C",
    estado: "abierto"
  },
  {
    titulo: "Grupo Teatro Paloquemao",
    categoria: "Teatro",
    sede: "paloquemao",
    color: "#728156",
    imagen: "IMG/TEATRO.png",
    horario: "Lunes y miércoles de 12 a 2 pm",
    link: "https://chat.whatsapp.com/JlCkML2D0o8ESwYIMf7yhe",
    estado: "abierto"
  },
  {
    titulo: "Improvisación Teatral",
    categoria: "Teatro",
    sede: "paloquemao",
    color: "#88976C",
    imagen: "IMG/Improvisación Teatral.png",
    horario: "Viernes de 9 am a 11 am",
    link: "https://chat.whatsapp.com/LcFBjaaHYuKAzRbaDB5GQq",
    estado: "abierto"
  },
  {
    titulo: "Yoga",
    categoria: "Bienestar",
    sede: "paloquemao",
    color: "#728156",
    imagen: "IMG/Poster club de yogaadasdasdasd.png",
    horario: "Martes de 9 am a 11 am",
    link: "https://chat.whatsapp.com/L3aNUCYH1X59o9L7ZJhO9Q",
    estado: "abierto"
  },
  {
    titulo: "Marionetas y Teatro Físico",
    categoria: "Teatro · Títeres",
    sede: "paloquemao",
    color: "#88976C",
    imagen: "IMG/Teatro fisico.png",
    horario: "Martes y jueves de 4 pm a 6 pm",
    link: "https://chat.whatsapp.com/Bjo0dRyTV6SGrJjRtiS3H3",
    estado: "abierto"
  },
  {
    titulo: "Marionetas",
    categoria: "Títeres",
    sede: "unihorizonte",
    color: "#728156",
    imagen: "IMG/Marionetas.png",
    horario: "Lunes y miércoles de 5 pm a 6 pm",
    link: "https://chat.whatsapp.com/G9GgIQqdK1IIKQjaa1cJ1Z",
    estado: "abierto"
  },
  {
    titulo: "Cine y Audiovisuales",
    categoria: "Cine · Audiovisual",
    sede: "unihorizonte",
    color: "#88976C",
    imagen: "IMG/Cine y Audiovisuales.png",
    horario: "Lunes y miércoles de 1 pm a 3 pm",
    link: "https://chat.whatsapp.com/LLZ66wgDsi6Boo2Jr4Zyiq",
    estado: "abierto"
  },
  {
    titulo: "Danza Urbana",
    categoria: "Danza",
    sede: "paloquemao",
    color: "#728156",
    imagen: "IMG/Danza Urbana.png",
    horario: "Martes, jueves y viernes de 2 a 5 pm",
    link: "#",
    estado: "proximamente"
  },
  {
    titulo: "Danza Folclórica",
    categoria: "Danza",
    sede: "paloquemao",
    color: "#88976C",
    imagen: "IMG/Danza Folclórica.png",
    horario: "Miércoles de 2 a 3 pm",
    link: "#",
    estado: "proximamente"
  },
  {
    titulo: "Escritura Creativa",
    categoria: "Escritura",
    sede: "virtual",
    color: "#728156",
    imagen: "IMG/Escritura Creativa.png",
    horario: "Martes y jueves de 9 am a 11 am",
    link: "#",
    estado: "proximamente"
  },
/*
Nuevo taller solo sobre escribe los datos que va a llevar el nuevo taller, añade el link de whatsapp y indica que imaguen le vas a poner , recuerda que la imaguen primero la tienes que subir a la carpeta img y ya eso seria todo
  {
    titulo: "Nombre del Taller",
    categoria: "Deporte",
    sede: "unihorizonte",
    color: "#728156",
    imagen: "IMG/nombre-de-tu-imagen.png",
    horario: "Viernes de 4 pm a 6 pm",
    link: "https://chat.whatsapp.com/TuLinkDeInvitacion",
    estado: "abierto"
  },
  */
];

/* ── RENDERIZADO LÓGICO ── */
function renderizarTalleres() {
  const grid = document.getElementById('cardsGrid');
  if (!grid) return;
  
  grid.innerHTML = ''; 

  dataTalleres.forEach(taller => {
    const card = document.createElement('article');
    card.className = 'card visible'; 
    card.dataset.sede = taller.sede;
    card.style.setProperty('--card-color', taller.color);

    const esProximamente = taller.estado === 'proximamente';
    
    // Estructura del botón según estado
    const btnHtml = esProximamente 
      ? `<button class="btn-inscripcion btn-pending" disabled>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
          Próximamente
         </button>`
      : `<a href="${taller.link}" target="_blank" rel="noopener noreferrer" class="btn-inscripcion btn-wa">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.532 5.859L.057 23.03a.75.75 0 0 0 .914.914l5.17-1.475A11.943 11.943 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.713 9.713 0 0 1-4.951-1.355l-.355-.212-3.677 1.05 1.068-3.565-.232-.367A9.718 9.718 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/></svg>
          Inscribirse por WhatsApp
         </a>`;

    card.innerHTML = `
      <div class="card-image-slot">
        ${taller.imagen ? `<img src="${taller.imagen}" alt="${taller.titulo}" class="card-img" style="display:block;">` : ''}
        <div class="card-image-placeholder" style="${taller.imagen ? 'display:none;' : ''}">
          <span>${taller.categoria}</span>
        </div>
      </div>
      <div class="card-accent"></div>
      <div class="card-body">
        <div class="card-category">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8 2 5 5 5 9c0 5 7 13 7 13s7-8 7-13c0-4-3-7-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"/></svg>
          ${taller.categoria}
        </div>
        <h2>${taller.titulo}</h2>
        <div class="card-meta">
          <div class="meta-row">
            <div class="meta-icon"><svg viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg></div>
            <span><span class="meta-label">Horario:</span>${taller.horario}</span>
          </div>
          <div class="meta-row">
            <div class="meta-icon"><svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
            <span><span class="meta-label">Sede/Modalidad:</span>${taller.sede.charAt(0).toUpperCase() + taller.sede.slice(1)}</span>
          </div>
        </div>
        ${btnHtml}
      </div>
    `;
    grid.appendChild(card);
  });
}

/* ── INICIALIZACIÓN ── */
document.addEventListener('DOMContentLoaded', () => {
  renderizarTalleres();
  
  // Filtros
  const filterBtns = document.querySelectorAll('.filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filtro = btn.dataset.filter;
      
      document.querySelectorAll('.card').forEach(card => {
        const coincide = filtro === 'all' || card.dataset.sede === filtro;
        card.style.display = coincide ? 'flex' : 'none';
      });
    });
  });
});
