
async function loadLessons() {
  const listEl = document.getElementById('lessons-list');
  const countEl = document.getElementById('lessons-count');
  const seriesSel = document.getElementById('serie');
  const temaInput = document.getElementById('tema');
  const tagSel = document.getElementById('tag');

  let data = [];
  try {
    const res = await fetch('../data/lessons.json');
    data = await res.json();
  } catch (e) {
    console.error('Erro ao carregar lessons.json', e);
    listEl.innerHTML = '<p>Não foi possível carregar as aulas.</p>';
    return;
  }

  function render() {
    const serie = seriesSel.value;
    const tema = temaInput.value.trim().toLowerCase();
    const tag = tagSel.value;

    const filtered = data.filter(item => {
      const okSerie = (serie === 'todas' || item.serie === serie);
      const okTema = (!tema || (item.titulo + ' ' + item.descricao).toLowerCase().includes(tema));
      const okTag = (tag === 'todas' || item.tags.includes(tag));
      return okSerie && okTema && okTag;
    });

    countEl.textContent = filtered.length;
    listEl.innerHTML = '';
    filtered.forEach(item => {
      const div = document.createElement('div');
      div.className = 'lesson';
      div.innerHTML = `
        <h4 style="margin:0 0 6px 0">${item.titulo}</h4>
        <p style="margin:0 0 8px 0; color: var(--muted)">${item.descricao}</p>
        <div class="tags" style="margin-bottom:8px">
          <span class="tag">${item.serie.toUpperCase()}</span>
          ${item.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="row">
          ${item.recursos.map(r => `<a class="btn" href="${r.url}" target="_blank" rel="noopener">${r.label}</a>`).join('')}
        </div>
      `;
      listEl.appendChild(div);
    });
  }

  seriesSel.addEventListener('change', render);
  temaInput.addEventListener('input', render);
  tagSel.addEventListener('change', render);

  render();
}
document.addEventListener('DOMContentLoaded', loadLessons);
