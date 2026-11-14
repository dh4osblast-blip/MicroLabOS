## v11 — Cálculo de preço e lucro corrigido + política de operação — 14/11
**Preço e hora**
- Alterado: hora técnica e custo indireto agora são **calculados** (modo automático): hora = maior entre a hora mínima (R$ 25) e pró-labore ÷ horas faturáveis; indireto = custos fixos ÷ horas faturáveis. Horas faturáveis = horas de bancada do mês × ocupação (50%). Há botão "Usar valores manuais" para voltar ao modo antigo.
- Alterado: a taxa de 7% foi separada. Hoje a taxa sobre o preço = taxa de pagamento (0%, só Pix e dinheiro) + reserva de garantia (3%).
- Novo: na OS, o preço mostra Piso (lucro zero), Sugerido e Mercado (campo novo no catálogo de serviços, "Preço de mercado em Salvador").
**Lucro**
- Corrigido: o lucro da OS agora considera desconto, receita e custo dos itens adicionais e a sobra da entrega (quando há custo real informado). A taxa incide sobre serviço + itens, não sobre a entrega.
- Novo: aviso de desconto maior que o serviço (recusa) e confirmação quando o desconto leva o lucro abaixo de zero.
- Novo: a OS grava o custo e a taxa do momento; reabrir e salvar sem mudar peça, consumíveis ou horas mantém o custo antigo.
- Alterado: ponto de equilíbrio usa a receita líquida, o custo de itens, mostra quantas OS cabem nas suas horas e usa "ticket médio esperado" e "custo médio esperado" enquanto houver menos de 10 OS entregues.
- Novo: Financeiro mostra "Separar para capital de giro" (10% do faturado no mês, já líquido de devoluções).
**Peças**
- Corrigido: margem de revenda contínua (200% em R$ 0, 100% em R$ 50, 20% em R$ 500, fixa acima). Sem degrau: peça mais cara nunca sai mais barata.
- Novo: arredondamento do preço de venda para cima. Passo de R$ 1 até R$ 30 e de R$ 5 acima. Editável em Ajustes.
- Novo: compras com frete, rateado no custo das peças pelo valor; custo médio ponderado ao receber; preço ajustado à mão é mantido (só atualiza o preço se ele era o automático).
**Política de operação**
- Novo: "Peça fornecida pelo cliente" na OS: zera custo da peça, não baixa estoque e imprime texto próprio (editável em Ajustes) no lugar do termo de garantia. Revisar com advogado.
- Novo: "Peça já comprada para esta OS" e sugestão de sinal mínimo igual ao custo da peça quando ela é sob encomenda.
- Novo: ao marcar Cancelado, o app pergunta se cobra o diagnóstico (R$ 15 = meia hora × hora mínima, arredondada de 5 em 5) e quanto devolver do valor pago (sugestão desconta diagnóstico, entrega e peça comprada). A OS vira cobrança de diagnóstico e o orçamento original fica guardado.
- Novo: aceite do orçamento (data/hora automática ao aprovar e canal), validade do orçamento (7 dias) com etiqueta "Vencido" e botão "Perdido".
- Novo: taxa de entrega = repasse do bairro + margem de segurança (% e mínimo em R$), arredondada para cima; campo "custo real da entrega" para calibrar. Só a volta.
- Corrigido: voltar uma OS de Entregue devolve os itens ao estoque.
- Corrigido: excluir um lançamento do caixa ligado a uma OS ajusta o valor pago da OS.
- Alterado: forma de pagamento sem opção Cartão (configurável em `cfg.formas`). Corrigido o cálculo de 90 dias do giro, que usava UTC.
**Migração**
- Primeira abertura: pró-labore = R$ 200 se estava zerado; carga horária = seg 5, sáb 4, dom 5 se ainda era a padrão antiga; modo automático. Campos novos preenchidos sem apagar nada. OS antigas ficam como estão.
- Arquivos entregues: index.html, sw.js (cache v11). Manifest não mudou.
- Testes: 95 verificações novas e 64 de regressão (jsdom, 11/11/2026, America/Bahia), sem erros: migração a partir de dados da v10, idempotência, parâmetros, curva de margem, lucro, fluxos da OS, estoque, cancelamento, devolução, compras, entrega, equilíbrio, telas e impressão. **Não testado em celular real**, nem a aparência das telas novas, nem os diálogos de devolução (prompt) no Brave/Android.
- Como atualizar: baixe um backup em Ajustes antes. Suba `index.html` e `sw.js` no repositório e abra o app online duas vezes.
- Pendente: backup com senha, sincronização entre aparelhos, preços de mercado e ticket esperado (campos vazios), revisão jurídica dos textos, mínimo em R$ da margem de entrega (hoje 0).
