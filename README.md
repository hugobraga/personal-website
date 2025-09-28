# personal-website
Personal website developed in React. It is automatically built and deployed with Vercel (www.vercel.com).

This repository contains a React single-page app (Create React App) with a small site and some static pages. It is automatically built and deployed with Vercel (www.vercel.com).

Node / stack
- Node: target >= 22.x (see `react-website/.nvmrc`)
- React 18 (Create React App / react-scripts)
- CSS preprocessor: Sass (Dart Sass)
- MUI (@mui/material) for UI primitives

Principais mudanças recentes
- `react-website/package.json`: adicionado `engines.node` >= 22 e `overrides` para mitigar vulnerabilidades transitivas.
- `react-website/.nvmrc`: adicionada para facilitar `nvm use`.
- `react-website/DEPENDENCY_UPGRADE_PLAN.md`: plano com as ações recomendadas para corrigir vulnerabilidades restantes e migração futura para Vite.

Estrutura do repositório
- react-website/ — aplicação React (fonte principal)
	- public/ — arquivos estáticos servidos (index.html, imagens, manifest)
	- src/ — código-fonte React (componentes, páginas, estilos)
	- src/pages — páginas específicas (Microblog, Instalinks, etc.)
	- package.json — dependências e scripts do app
	- .nvmrc — versão do Node recomendada (22)

Como rodar localmente
1. Instale a versão adequada do Node (recomendado: nvm):
	 - nvm install 22
	 - nvm use 22

2. No diretório `react-website`:
```bash
cd react-website
npm install
```

3. Rodar em desenvolvimento:
```bash
npm start
```

4. Build de produção:
```bash
npm run build
```

5. Testes (se houver):
```bash
npm test
```

Segurança e dependências
- Após atualização para Node 22 aplicamos `overrides` para mitigar várias vulnerabilidades transitivas; ainda restam algumas (detalhadas em `react-website/DEPENDENCY_UPGRADE_PLAN.md`).
- Recomenda-se revisar PRs de dependências e planejar migração para Vite a médio prazo para reduzir a superfície de dependências.

Passos futuros (curto/médio prazo)
- Corrigir vulnerabilidades restantes conforme `react-website/DEPENDENCY_UPGRADE_PLAN.md` (pequenos upgrades/overrides e PRs de validação).
- Corrigir avisos do ESLint apontados no build (ex.: headings vazios e variáveis não usadas).
- Considerar migrar de Create React App para Vite para simplificar toolchain e reduzir dependências.

Deploy
- O site é hospedado em Vercel. O build de produção (`npm run build`) gera a pasta `build/` que o Vercel consome.

Site ao vivo
My personal website can be visited in https://hugobraga.io
