## v12.3 — Dica ao passar o mouse nos gráficos + correção do layout no computador — 15/11
- Novo: ao passar o mouse (ou tocar) sobre os gráficos de tensão, corrente e potência aparece uma linha vertical, um ponto e uma caixa com o valor e o tempo (ex.: "12,00 V · -3,5 s"). O tempo vem do relógio de cada leitura.
- Corrigido: no computador, o cartão de Potência caía sozinho para a linha de baixo e deixava um buraco ao lado dos outros dois. Causa: a classe `.w` do painel era a mesma de uma regra do OS (ocupar a linha toda). Renomeada para `.pw`.
- Corrigido: o cabeçalho de cada cartão herdava uma margem do OS (`.hd`), deixando espaço sobrando.
- Sem mudança de dados nem de lógica. Cache `microlab-os-v12-3`.
- Testes (jsdom): 25 verificações (as 23 anteriores + hover desenhando o texto + classe do cartão de potência), sem erros. **Não testado visualmente** (não vi a tela depois da mudança).
- Como atualizar: suba `index.html` e `sw.js` e abra o app online duas vezes.
