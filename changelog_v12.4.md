## v12.4 — Layout de computador e de celular no mesmo código (base + Início + Fonte) — 15/11
- Novo: **layout de computador**. Menu lateral à esquerda no lugar do menu inferior, conteúdo até 1500 px de largura, botão "+" e calculadora nos cantos, Início com atalhos em 6 colunas, listas em colunas automáticas.
- Novo: na **Fonte**, os três quadros ficam lado a lado com a mesma largura, gráficos mais altos e **Memórias e Controle em duas colunas** embaixo.
- Novo: **Ajustes > Layout da tela**: Automático (computador em janelas a partir de 1000 px, acompanha o redimensionamento), Computador ou Celular. Vale só para o aparelho (guardado fora do banco, não entra no backup nem na futura sincronização). Computador só é aplicado a partir de 700 px de largura.
- O layout de celular continua igual ao da v12.3.
- Sem mudança de dados nem de lógica. Cache `microlab-os-v12-4`.
- Testes (jsdom, 1024 px): 30 verificações (as 25 anteriores + layout automático, forçar celular/computador, opção em Ajustes, preferência fora do backup, duas colunas na Fonte) e abertura de todas as rotas sem erro de JavaScript. **Não testado visualmente** (não vi a tela depois da mudança), nem a bateria completa de regressão da v11.
- O menu lateral tem os mesmos 5 itens do menu inferior. Pendente: demais telas (listas, Agenda, Financeiro, formulários) com layout de computador mais elaborado; mais itens no menu lateral.
- Como atualizar: suba `index.html` e `sw.js` e abra o app online duas vezes.
