Dependency upgrade & remediation plan for react-website

Objetivo
- Documentar as vulnerabilidades restantes, versões alvo para correção e a estratégia segura (PRs sugeridos) para cada item.

Contexto
- Projeto: `react-website` (Create React App, `react-scripts@5.0.1`)
- Node alvo: >=22 (já configurado em `package.json`/`.nvmrc`)
- Estado atual (após overrides): 6 vulnerabilidades remanescentes (3 moderate, 3 high)

Vulnerabilidades remanescentes e plano por pacote

1) body-parser (high)
- Problema: vulnerabilidade de DoS quando urlencoding está habilitado
- Range afetado: < 1.20.3
- Versão alvo: >= 1.20.3
- Impacto: usado por frameworks/serving libs (ex: express)
- Estratégia PR sugerida:
  - Atualizar dependência transitiva se for direta (não é direta neste projeto) ou forçar via `overrides` para `"body-parser": "^1.20.3"` se compatível.
  - Testes: rodar `npm install`, `npm run build`, testes automatizados (se existirem), e testar endpoints de dev server (npm start) para regressões.
  - Commit/PR: "chore(deps): upgrade body-parser to ^1.20.3 (fixes GHSA-qwcr-...)"
  - Rollback: reverter commit se testes falharem.

2) express (high)
- Problema: XSS via response.redirect() (range <4.20.0) e dependências indiretas
- Versão alvo: >=4.20.0
- Estratégia PR sugerida:
  - Se `express` for dependência direta (não é aqui), atualizar diretamente.
  - Caso seja transitiva, preferir forçar `overrides` para `"express": "^4.20.0"` e testar.
  - Testes: executar `npm run build`, e workflows de CI; testar localmente rotas (se aplicável).

3) react-scripts (moderate)
- Problema: várias dependências (webpack-dev-server) com avisos; CRA (`react-scripts`) empacota muitas dependências que estão causando vulnerabilidades.
- Versão alvo: não há uma simples versão menor que resolva todas as issues sem breaking changes; atualizar `react-scripts` pode causar mudanças de comportamento.
- Estratégia PR sugerida (opções):
  A) Manter react-scripts por agora e mitigar com `overrides` para sub-dependências quando possível (o que já fiz parcialmente).
  B) Criar um PR de investigação: `refactor/migrate-from-cra-to-vite` com um plano de migração passo-a-passo (mais seguro a médio prazo).
  C) Se quiser atualizar `react-scripts`, criar branch de teste e executar `npm audit fix --force` em branch isolada, testando tudo e revertendo caso falhe.
- Recomendação: não forçar upgrade de `react-scripts` em produção; planejar migração para Vite.

4) rollup (high)
- Problema: DOM clobbering gadget (XSS) em versões <2.79.2
- Versão alvo: >=2.79.2
- Estratégia PR sugerida:
  - Identificar quais módulos trazem `rollup` como dependência (usualmente build tooling). Se for possível forçar `overrides` para `"rollup": "^2.79.2"`, aplicar e testar.
  - Testes: build e testes automáticos.

5) webpack (moderate)
- Problema: vulnerabilidade em AutoPublicPathRuntimeModule para versões <5.94.0
- Versão alvo: >=5.94.0
- Estratégia PR sugerida:
  - Verificar cadeia: `react-scripts` depende de `webpack` — difícil de atualizar sem mexer em `react-scripts`.
  - Alternativa: mitigar com overrides para `webpack@^5.94.0` em branch de teste, executar build e testes. Se quebrar, considerar migrar para Vite.

6) webpack-dev-server (moderate)
- Problema: segurança do dev server (<=5.2.0)
- Versão alvo: >5.2.0
- Estratégia PR sugerida:
  - `webpack-dev-server` está ligado a `react-scripts` — mitigação via overrides pode funcionar, mas testar é essencial.
  - Alternativa: migrar dev environment para Vite (desafia a compatibilidade, mas melhora segurança a médio prazo).

Cross-cutting plan (passos práticos e de baixo risco)
1. Criar branch para as mudanças de segurança: `chore/security/patch-transitives-node22`
2. Aplicar pequenos `overrides` controlados (já aplicados) em `react-website/package.json` para pacotes com versões disponíveis estáveis.
3. Rodar full local test flow:
   - npm ci (ou npm install)
   - npm run build
   - npm test (se houver)
   - smoke tests manuais no dev server
4. Abrir PR com: título e descrição padronizados, exemplos de comandos para validar e checklist:
   - Branch: chore/security/patch-transitives-node22
   - Commit message exemplo: "chore(deps): apply overrides to fix known vulnerabilities (body-parser, express, rollup, webpack)"
   - Files changed: `react-website/package.json`, `react-website/package-lock.json`
   - Checklist no PR description: "build passes locally", "CI green", "smoke test OK"
5. Se PR causar regressão, reverter e preparar um PR alternativo com menos mudanças.

Se não for aceitável forçar mais updates
- Estratégia conservadora: manter CRA e react-scripts e apenas mitigar onde for seguro via `overrides`. Planejar migração para Vite no médio prazo.

Migração recomendada para médio prazo (Vite)
- Motivo: Vite tem dependências menos pesadas e é mais simples de manter; migração reduz chance de vulnerabilidades herdadas por CRA.
- Passos de alto nível:
  1. Criar branch `refactor/migrate-to-vite`.
  2. Instalar Vite e plugins React: `npm create vite@latest` (ou manualmente adicionar `vite`, `@vitejs/plugin-react`), remover `react-scripts` e ajustar scripts em `package.json`.
  3. Ajustar imports estáticos, CSS/asset handling, environment variables (`VITE_` prefix), publicar e testar.
  4. Atualizar CI (Vercel geralmente suporta Vite) e pipelines.
- Posso gerar um plano detalhado de migração e PR se desejar.

Testes e CI
- Recomendo adicionar um job de CI que execute:
  - `nvm install 22` / `nvm use 22`
  - `npm ci`
  - `npm run build`
  - `npm run test`
- PRs de segurança devem incluir evidência do build e, se possível, snapshot testing.

Rollback
- Se uma atualização causar breakage, reverter PR (git revert) e abrir issue para investigação manual.

Observações finais
- Já aplicamos um conjunto de `overrides` que reduziu as vulnerabilidades de 27 para 6 (bom progresso).
- Os problemas restantes estão fortemente ligados ao ecosistema do CRA. A migração para Vite é o caminho mais sustentável; a intervenção direta em `react-scripts` é arriscada.

---

Se quiser, eu posso:
- Gerar os PRs automáticos para cada mudança sugerida (criar branch, aplicar override/upgrade, rodar testes e abrir PR).  
- Ou apenas gerar os diffs e o texto do PR para que você revise antes de aplicar.

Indique a alternativa preferida (gerar PRs automáticos / gerar diffs e textos do PR).