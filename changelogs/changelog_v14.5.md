## v14.5 — Fonte de bancada: tooltip único nas proteções — 17/11
Só interface. Nenhuma lógica Modbus, escala, registrador ou trava foi alterada. Esta versão substitui a v14.4.
- Corrigido: removido o atributo `title` dos rótulos OVP, OCP, OPP, LVP e OTP, que fazia o tooltip cinza do navegador aparecer por cima do tooltip escuro. Fica só o `data-tooltip` (visual) e o `aria-label` com o mesmo texto (acessibilidade), mais `role="note"` no rótulo.
- Alterado: `sw.js` cache `microlab-os-v14.5`. Ajustes mostra "Versão 14.5". Arquivos: `index.html`, `sw.js` e `changelog_v14.5.md`.
- Testes (Chromium headless, America/Bahia, 1366×768): os 5 rótulos sem `title`, com `data-tooltip` e `aria-label`; tooltip escuro aparece ao passar o mouse; 21 telas sem erro de JavaScript.
- **Não testado:** toque real em celular/tablet, Brave e fonte conectada.
- Peça um backup em Ajustes antes de trocar os arquivos.
