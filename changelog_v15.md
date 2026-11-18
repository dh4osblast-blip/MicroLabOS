# MicroLab OS v15

Cache: `microlab-os-v15` (sw.js). Base: v14.6. Nenhuma função existente foi removida.

## Dados (db) — nenhuma lista nova no nível raiz
O SYNC não mudou: tudo fica em `os[]`, `fin[]` e `cfg{}`. OS antigas **não são alteradas** ao abrir o app; os campos novos só aparecem em uma OS quando você a salva.

| Onde | Propriedade | Para quê |
|---|---|---|
| `cfg.orc` | `{hora:71.43, indireto:19.32, taxaPag:2, reservaGar:5, margem:20}` | Parâmetros do simulador (M1). O motor de precificação atual (`PRauto`) não foi tocado. |
| `cfg.tempCal` | `{idDaLinha: texto}` | "Minha calibração / distância do bocal" (M6) |
| `cfg.cofrePct` | `5` | % da Reserva de Garantia (M7) |
| `cfg.pmicMin` | `3.4` | Tensão mínima de referência do PMIC (M7) |
| `cfg.defeitosExtra` | `[{id,t,p:[…]}]` | Defeitos cadastrados por você (M5) |
| `os.pedForn / pedRastreio / pedPrev / pedChegou` | texto / texto / `AAAA-MM-DD` / 0 ou 1 | Aguardando Peça (M2) |
| `os.tri` | `{imeiSt, apagado, bat, oxi, esd, semImei, impOk}` | Triagem de entrada (M3) |
| `os.sai` | 10 chaves booleanas | Checklist de saída (M3) |
| `os.saiAviso` | texto | Rastreio de quando a OS foi para Pronto/Entregue com saída incompleta |
| `os.laudos` | `[{id,data,defeito,passos:[{t,r}],obs}]` | Diagnósticos salvos pelo assistente (M5) |
| `os.retGar` | id da OS original | Liga um retorno de garantia à OS de origem |
| `fin` | `{t:'s', cat:'Garantia', k:'gar', ref}` | Gasto debitado da Reserva de Garantia (M7) |

## Módulos
1. **Simular Orçamento** (Início, menu Atendimento): custo direto, preço mínimo e sugerido pelas fórmulas pedidas, preço manual com lucro e margem reais ao vivo, texto do WhatsApp e **Converter em OS Agora** (OS nova como Aprovado, com modelo, peça+frete, consumíveis, tempo e preço). Valor exato no detalhamento; destaque e WhatsApp usam o `arred()` atual.
2. **Aguardando Peça**: novo status (entre Aprovado e Em reparo), campos de fornecedor, rastreio e previsão, e banner no Início para chegada hoje ou atrasada, com botão **Chegou** (move para Aprovado). Não ocupa horas da Agenda.
3. **Triagem e saída** na OS: status do IMEI (Regular/Suspeito/Impedido), apagado, bateria inchada, oxidação e ESD com alertas, e checklist de saída com 10 itens. IMEI não consultado, IMEI impedido e saída incompleta pedem **confirmação forte** (sem bloqueio duro). Só perguntam ao mudar de situação, para não incomodar a edição de OS antigas. O checklist atual e o contrato impresso continuam iguais.
4. **Histórico e garantia**: na OS (ao escolher o cliente), em **Clientes & Garantia** e no botão Histórico da ficha do cliente. Badge verde "X dias restantes" ou cinza "Garantia expirada", e botão **Retorno de garantia**.
5. **Assistente de defeitos** (Bancada): 12 defeitos (3 da apostila com número, 7 pelo seu texto e 2 marcados como "(sugestão)"), etapa por etapa (○ ✔ ✖), **Salvar Diagnóstico na OS** e **+ Novo defeito** para você acrescentar os seus. No Defeito 04 a ordem foi ajustada para ir do mais simples ao mais complexo (teste de software antes da fuga de corrente).
6. **Referência de bancada** (Bancada): busca, parâmetros da fonte, simulador de diodo e temperaturas com calibração editável. Leituras entre 0,150 V e 0,300 V e entre 0,750 V e 0,800 V não têm classe na sua tabela: aparecem como "faixa intermediária, compare com placa boa".
7. **Eletrotécnica e cofre**: resistência interna da bateria (alerta com 3,4 V editável), potência em curto (P = V × I) e, no Financeiro, **Reserva de Garantia (5%)** e **Lucro Líquido Disponível** (saldo do caixa menos a reserva). Gastos de garantia saem da reserva e não abatem o lucro duas vezes.

## Observações
- **Permissões:** Simular Orçamento é só do Administrador (mostra custos e margem). Técnico vê Bancada, Defeitos e Garantia; Atendente vê Garantia.
- Os 5% do cofre são independentes da "Reserva de garantia" (3%) usada no motor de precificação em Ajustes.
- O gasto de garantia não é ligado à OS pelo campo `os` de propósito: excluir um lançamento ligado a uma OS ajusta o valor pago dela.
- Laudos salvos não podem ser excluídos pela tela nesta versão.
- Testado em navegador simulado (cálculos, conversão em OS, confirmações, banner, garantia, laudo, diodo, Ohm e cofre). Falta o teste no seu celular.
