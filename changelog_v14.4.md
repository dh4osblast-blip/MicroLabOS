## v14.4 — Fonte de bancada: textos justificados e ajuda nos rótulos das proteções — 17/11
Só interface. Nenhuma lógica Modbus, escala (÷1000), registrador (0x52 a 0x5C) ou trava de segurança foi alterada. Esta versão substitui a v14.3.
- Alterado: texto explicativo ao lado de Endereço, Baud e Escala da corrente passa a ocupar toda a largura restante até a borda direita do cartão, com `text-align: justify` e `hyphens: auto`.
- Alterado: nota "Faixas aceitas: OVP 0,5 a 48 V..." ocupa 100% da largura interna do quadro "Proteções da fonte" (sem limite de largura), também justificada e com hifenização.
- Novo: **ajuda (tooltip) em OVP, OCP, OPP, LVP e OTP**, com sublinhado pontilhado e ícone "?". Aparece ao passar o mouse, ao focar com o teclado (Tab) e ao tocar no rótulo no celular/tablet; Esc fecha. O texto também fica no atributo `title` (leitores de tela e dica nativa do navegador).
- Tooltip: fundo escuro, borda sutil, largura máxima de 260 px e `z-index` alto. Posição calculada para não passar da borda direita do cartão nem da tela (no OTP ele recua para a esquerda) e abre para baixo quando não há espaço acima.
- Alterado: lista "Grupo de memória" com fonte 14 px, para o texto "M0 (padrão)" não ser cortado.
- Alterado: `sw.js` cache `microlab-os-v14.4`. Ajustes mostra "Versão 14.4". Arquivos: `index.html`, `sw.js` e `changelog_v14.4.md`.
- Testes (Chromium headless, America/Bahia, 1366×768, 1000×700 e 390×844): textos com a largura interna total do quadro, `text-align: justify` e hifenização ativos, tooltip do OTP deslocado para dentro do cartão, sem erro de JavaScript em 21 telas; reteste de layout da v14.3 (Opções aberto e fechado, 1920×1080 incluído) sem corte nem sobreposição.
- **Não testado:** toque real em celular/tablet, Brave e fonte conectada. A hifenização depende do idioma do navegador (a página está em pt-BR); a gravação das proteções continua não testada na fonte real.
- Peça um backup em Ajustes antes de trocar os arquivos.
