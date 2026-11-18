## v14.6 — Exclusão completa de OS, consistência de caixa/estoque, histórico da fonte na OS e aviso de nova versão — 17/11
Mexe em dados (OS, caixa, estoque). **Faça um backup em Ajustes antes de trocar os arquivos.** Nenhuma lógica Modbus, escala (÷1000), registrador (0x52 a 0x5C) ou trava de escrita (`LIM`) foi alterada. Esta versão substitui a v14.5.
- Observação: o pedido citava `db.cx` e `db.pecas`; no app esses dados são `db.fin` (caixa) e `db.produtos` (estoque). As correções usam os nomes reais.

**1. Excluir OS (só Administrador)**
- Novo: botão vermelho "Excluir OS" no formulário de edição da OS (não aparece em OS nova nem para Técnico/Atendente).
- Confirmação dupla: janela com o resumo (cliente, aparelho, nº de lançamentos, entradas e saídas, peças a devolver), caixa "Entendo que os lançamentos financeiros vinculados também serão apagados" e **PIN do usuário**.
- Ao confirmar: devolve ao estoque o que a OS baixou (`o.baixa`, usando `o.bx`), apaga de `db.fin` todos os lançamentos ligados à OS (sinal, recebimentos, estorno, devolução) e remove a OS. Lançamentos antigos sem vínculo só são apagados se o texto for exatamente "OS nº N" (OS nº 1 não pega a nº 10).
- Sincronização: a exclusão é enviada à nuvem. Os lançamentos saem em lotes de até 8 por gravação, para não acionar a trava "mais de 10 sumiços de uma vez", que impediria a exclusão na nuvem. O número da OS não é reaproveitado.

**2. Caixa, estoque e relatórios**
- Corrigido: editar OS **Entregue** (trocar a peça principal, adicionar/remover item ou mudar a quantidade) estorna a baixa antiga e dá a nova. Voltar de Entregue para outro status devolve exatamente o que foi baixado.
- Corrigido: `aplicarSinal` nunca estorna mais do que está pago. OS cancelada e já devolvida (`pago = 0`) não gera segundo estorno ao editar. `cancelaOS` ajusta o sinal ao valor que ficou pago.
- Corrigido: Relatório de serviços com "Situação: Todas" não soma as OS Canceladas no rodapé; elas aparecem marcadas "fora da soma" e numa linha informativa. O e-mail do relatório segue a mesma regra. Escolhendo "Cancelado" no filtro, nada muda.
- Alterado: "Condições de execução" e "Condições adicionais" viraram um campo só, **"Condições gerais"** (`condExec`). A migração junta o texto de `cond` ao de `condExec` sem duplicar e apaga `cond` (idempotente, também se `cond` voltar pela nuvem). A impressão mostra um único bloco "CONDIÇÕES GERAIS".

**3. Fonte ZK-SK150C**
- Novo: ao vincular uma OS no Relatório da sessão, o resumo do teste vai para `o.testesFonte` (data/hora, tempo ligada, **corrente de fuga** em mA, **pico de boot** em A, corrente de pico, indícios detectados e notas). Uma entrada por sessão: reabrir, imprimir ou copiar não duplica; trocar ou remover o vínculo move/remove o registro. O histórico aparece na janela da OS ("Testes na fonte de bancada").
- Alterado: botões giratórios com escala **0–48 V** e **0–8,2 A** (iguais a `LIM` e aos campos). Legendas 0/12/24/36/48 V e 0/2/4/6/8 A; o ponteiro chega ao fim da escala em 48 V e 8,2 A.

**4. Sincronização e Service Worker**
- Corrigido: com a tela de login aberta, usuários baixados da nuvem atualizam a lista de usuários na hora (sem apagar PIN digitado; "Primeiro acesso" vira seleção se chegarem usuários).
- `sw.js` (cache `microlab-os-v14.6`): caminhos relativos (`./`, `./index.html`, `./manifest.webmanifest`, `./icon-192.png`, `./icon-512.png`). Só `./` e `./index.html` são obrigatórios; manifest e ícones são opcionais e, se falharem, o cache continua valendo. Offline, a navegação cai em `index.html`.
- Novo: aviso discreto "Nova versão do app pronta · Atualizar" no topo. A versão nova espera até você tocar em Atualizar (pede confirmação se houver janela aberta; respeita a fonte conectada). Verifica atualização ao voltar para a aba e a cada hora. **O aviso passa a valer da v14.6 em diante:** a troca da v14.5 para a v14.6 ainda é automática, por causa do `sw.js` antigo.
- Ajustes mostra "Versão 14.6". Arquivos: `index.html`, `sw.js` e `changelog_v14.6.md`.

**Testes** (Chromium headless, America/Bahia, 1366×768 e 390×844, 54 verificações, sem erro de JavaScript em 23 telas): exclusão com PIN errado e certo (12 lançamentos viram exclusões sincronizáveis, estoque devolvido, legado "OS nº 10" preservado); troca de peça/quantidade em OS Entregue; ausência de segundo estorno; relatório sem canceladas; condições unificadas e impressão; resumo da fonte gravado, movido e removido (sessão simulada com fuga de 50 mA e pico de boot de 0,62 A); ponteiros em 48 V e 8,2 A; login reativo; Service Worker (cache com ícone ausente, aviso, atualização, offline); migração idempotente.
- **Não testado:** fonte ZK-SK150C real (Bluetooth/USB), sincronização real com o Firestore, toque em celular/tablet e Brave. A sobreposição do rodapé da tela da fonte em 1366×768 sem conexão já existia na v14.5 e não foi alterada.
