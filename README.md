
# Site de Filosofia — Prof. Divino Viana

Modelo pronto para publicar no **GitHub Pages**.

## Publicar no GitHub Pages
1. Crie um repositório chamado `seu-usuario.github.io`.
2. Envie todo o conteúdo desta pasta para o repositório.
3. Em **Settings › Pages**, confirme a publicação (branch `main` / root).
4. Abra `https://seu-usuario.github.io` no navegador.

## Editar conteúdos
- `index.html`: página inicial.
- `pages/spinoza.html`: materiais e estudos sobre Spinoza.
- `pages/aulas.html`: lista aulas a partir de `data/lessons.json`.
- `data/lessons.json`: edite/adicione aulas no formato JSON.
- `assets/css/style.css`: estilos (cores, layout).
- `assets/js/lessons.js`: lógica de filtragem das aulas.
- `pages/professores.html`: guia do professor e links úteis.

## Adicionar aulas
Abra `data/lessons.json` e adicione objetos no formato:
```json
{{
  "titulo": "Nome da aula",
  "descricao": "Resumo curto",
  "serie": "1º ano",
  "tags": ["tema1", "tema2"],
  "recursos": [
    {{"label": "Slides", "url": "https://..."}}
  ]
}}
```

## Adicionar nova página
1. Duplique um arquivo em `pages/`, por exemplo `spinoza.html`.
2. Personalize o conteúdo.
3. Adicione o link no menu (em todos os arquivos que possuem a barra de navegação).

## Formulário de contato
- Substitua `seuemail@exemplo.com` no `pages/contato.html` pelo seu e-mail, ou
- Incorpore um Google Forms: cole o código de incorporação do Forms dentro da página.

---

Feito com carinho para a comunidade escolar do Tocantins. ✨
