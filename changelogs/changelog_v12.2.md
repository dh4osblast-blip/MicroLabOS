## v12.2 — Tela da Fonte mais folgada no celular — 15/11
- Alterado (só CSS, só no celular, até 700 px): o painel da Fonte ocupa a largura toda da tela (antes havia três margens acumuladas: página, painel e cartão), com menos espaço interno nos cartões e gráficos um pouco mais baixos. Os números ganham largura.
- Alterado: cabeçalho do painel em grade de 2 colunas (status; Bluetooth | USB; Opções | Cores) em vez de 4 linhas de botões soltos. Textos dos botões: "Conectar Bluetooth" e "Conectar USB".
- Alterado: o chip "Sem conexão" (repetia o status do topo) fica oculto. Chips e caixa de dados secundários mais compactos.
- Sem mudança de dados, de lógica ou das telas do notebook. Cache `microlab-os-v12-2`.
- Testes: as 23 verificações da v12.1 repetidas, sem erros. **Não testado visualmente:** o ajuste é só de CSS e eu não vi a tela depois da mudança.
- Como atualizar: suba `index.html` e `sw.js` e abra o app online duas vezes.
