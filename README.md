# Maratona Start

Página de captura independente da Hive, com a logo e o formulário aprovados. A página fica na raiz `/` do domínio configurado na hospedagem.

## Desenvolvimento

Use Node.js 22.12 ou superior.

```sh
npm ci
npm run dev
```

## Publicação na Hostinger

Conecte este repositório como projeto Astro:

- Branch: `main`
- Diretório raiz: `./`
- Node: `22.x` (22.12 ou superior)
- Gerenciador: `npm`
- Build: `npm run build`
- Saída: `dist`
- Arquivo de entrada Node: deixe vazio, pois o build é estático.
- Variáveis de ambiente: nenhuma obrigatória.

Ative a implantação automática para atualizar a hospedagem a cada push em `main`. Criar o repositório não conecta automaticamente um novo domínio à Hostinger.

## Formulário

Coleta nome, e-mail, telefone/WhatsApp e estado. Mantém o webhook existente, com `form_id: maratona_start`, e o evento `FormSubmit` no GTM `GTM-NDPR7DB7`.

O cenário Make `CAMPANHA ENERGY` encaminha esses cadastros para a aba `Inscritos` da planilha Maratona Start. Após a resposta de sucesso do webhook, o visitante é direcionado ao grupo do WhatsApp configurado em `src/lib/maratona-start.ts`.

As UTMs e os parâmetros `conjunto` e `anuncio` são enviados quando presentes na URL. O telefone é normalizado com DDI +55. Falhas no envio exibem uma mensagem e permitem tentar novamente.

O link de privacidade aponta para a política já publicada no site principal, sem duplicar as outras páginas neste projeto.

Configurações: `src/site.config.ts` e `src/lib/maratona-start.ts`.
