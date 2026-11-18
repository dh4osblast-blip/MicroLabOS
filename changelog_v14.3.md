## v14.3 — Fonte de bancada: layout com Opções aberto (sem corte, proteções alinhadas) — 17/11
Só layout. Nenhuma lógica Modbus, escala, mapa de registradores ou trava de segurança foi alterada. Esta versão substitui a v14.2.
- Corrigido: **corte na parte inferior** com Opções aberto no computador. O cartão da Fonte tinha altura fixa (`100vh − 64 px`) e espremia gráficos, botões giratórios, V-SET/I-SET e "Ligar saída". Com Opções aberto, o cartão agora cresce com o conteúdo (`height:auto`) e a página rola normalmente. Fechado, continua em tela única sem rolagem.
- Corrigido: **painel "Proteções da fonte"** em grade uniforme (gap 14 × 16 px, campos de mesma largura e altura): 7 colunas quando cabe, 4 colunas em largura média e 2 no celular. Grupo de memória e Unidade do OTP não ficam mais colados.
- Corrigido: **espaçamento do bloco "Ligar saída / Tempo ligada"** e da mensagem de status, sem sobreposição.
- Alterado: rótulo do grupo "M0 (padrão ao ligar)" encurtado para "M0 (padrão)", para caber no campo.
- Alterado: `sw.js` cache `microlab-os-v14.3`. Ajustes mostra "Versão 14.3". Arquivos: `index.html`, `sw.js` e `changelog_v14.3.md`.
- Testes (Chromium headless, America/Bahia, Opções fechado e aberto, em 1366×768, 1920×1080, 1000×700 e 390×844): nenhum elemento fora do cartão, nenhuma sobreposição entre Ligar saída, status e Tempo ligada, campos das proteções com largura igual; 21 telas abrem sem erro de JavaScript. Na v14.2 o mesmo teste acusava elementos para fora do cartão a 1366×768 (aberto) e sobreposição a 1000×700.
- **Não testado:** fonte conectada (Bluetooth/USB), celular real e Brave. Este ambiente não tem fonte; a gravação das proteções continua não testada na fonte real.
- Peça um backup em Ajustes antes de trocar os arquivos (esta versão não mexe nos dados).
