## v12.6 — Fonte de bancada em tela única no computador (botões giratórios, memórias com nome) — 15/11
- Novo: **Fonte em uma tela só** no layout de computador, sem rolagem. A altura acompanha a janela (mínimo de 640 px). Topo com título, chips e botões numa linha; três gráficos com os **números grandes e centralizados acima de cada gráfico**; controles embaixo; memórias à direita; faixa inferior com Entrada, Temperatura, Capacidade, Energia, Tempo ligada e Modelo / firmware.
- Novo: **botões giratórios** V-SET (0 a 40 V) e I-SET (0 a 8 A). O arco e o ponteiro são calculados pelo valor do campo. Formas de ajustar: roda do mouse (±0,1 por passo; Shift = 0,01; Ctrl = 1,0), arrastar, teclas de seta (PageUp/PageDown ±1; Home e End vão ao mínimo e ao máximo) e os campos com − e +. O campo e o botão ficam sempre sincronizados.
- Novo: **ponto azul de valor pendente** ao lado de cada campo, quando o valor difere do que está na fonte. Girar não envia nada: só **Aplicar V e I** envia.
- Novo: com o controle bloqueado, os botões giratórios, os campos e os botões Aplicar/Ligar saída ficam apagados e não respondem (e saem da navegação por Tab).
- Novo: **memórias em lista vertical** com **campo de nome**. Se o campo estiver vazio, o Salvar ainda pergunta o nome como antes.
- Novo: em **Ajustes**, o topo mostra "Versão 12.6 · cache microlab-os-v12-6".
- O layout de celular continua igual ao da v12.5: a Fonte não mostra os botões giratórios e o menu inferior de 5 itens segue o mesmo. Única diferença: os chips agora vêm antes do quadro de Opções. **O "apertado" no celular ainda não foi tratado.**
- A trava de escrita **não mudou**: o código aceita até 48 V e 8,2 A (`LIM`). Os botões giratórios só vão até 40 V e 8 A. Pendente decidir se a escrita também passa a ser limitada a 40 V e 8 A.
- Sem mudança de dados nem de lógica de envio. Cache `microlab-os-v12-6`.
- Testes (Chromium sem tela, 1920×1080, 1366×768, 1024×768 e celular 390 px): sem erros de JavaScript; sem rolagem vertical no computador; roda, Shift, setas, Home/End, arrastar, digitar no campo e botão + sincronizando o ponteiro; bloqueio com controle travado; botões giratórios ocultos no celular, sem rolagem lateral. Abertura das 19 telas sem erro (jsdom). **Não testado com a fonte conectada** (Bluetooth/USB): o ponto azul de pendente e os gráficos com leituras reais não foram vistos. Nem a bateria completa de regressão da v11.
- Como atualizar: suba `index.html` e `sw.js` e abra o app online duas vezes. Confirme em Ajustes que aparece a versão 12.6.

## v12.5 — Menu lateral em grupos + versão em Ajustes (base) — 15/11
- Novo: no layout de computador, o **menu lateral** agora tem grupos que abrem e fecham: Atendimento (OS, Agenda, Orçamentos, Clientes, Aniversários), Vendas e estoque (Vendas, Estoque, Compras, Fornecedores, Vendedores), Financeiro (A receber, Financeiro, Custos fixos, Pix, Relatórios, Estatísticas) e Bancada (Fonte de bancada, Técnicos, Catálogo de serviços). Início e Ajustes ficam soltos.
- Só o grupo da tela aberta fica expandido; ao navegar, os outros fecham. Dá para abrir qualquer grupo clicando nele.
- Os itens respeitam o nível de acesso do usuário.
- Novo: **Ajustes** mostra o número da versão no topo.
- Corrigido: o texto "Orçamento antes do serviço." ficava solto e desalinhado no computador; agora fica à esquerda, junto dos atalhos.
- O layout de celular (menu inferior de 5 itens) continua igual ao da v12.4.
- Sem mudança de dados nem de lógica. Cache `microlab-os-v12-5` (substituído na v12.6).
- Testes (jsdom, 1024 px): menu com 4 grupos e 21 itens, grupo da tela aberta expandido, versão em Ajustes e abertura das 19 telas sem erro. **Não testado visualmente.**
- Observação sobre a v12.4: se "Layout da tela" não aparecer em Ajustes, o aparelho ainda está com a versão antiga em cache. Basta desregistrar o service worker e apagar o Cache Storage (sem apagar os dados do site) e recarregar.
