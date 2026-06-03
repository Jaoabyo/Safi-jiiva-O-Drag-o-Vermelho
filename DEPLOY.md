# Como subir o projeto na Vercel

## Pré-requisitos

- Conta no [GitHub](https://github.com) com o repositório do projeto
- Conta na [Vercel](https://vercel.com) — pode criar gratuitamente com a conta do GitHub

---

## Passo a passo

### 1. Acesse a Vercel

Entre em [vercel.com](https://vercel.com) e clique em **Sign Up** (ou **Log In** se já tiver conta).

Escolha **Continue with GitHub** para conectar as duas contas.

---

### 2. Importe o repositório

Na dashboard da Vercel, clique em **Add New → Project**.

Vai aparecer uma lista com seus repositórios do GitHub.  
Localize **Safi-jiiva-O-Drag-o-Vermelho** e clique em **Import**.

---

### 3. Configure o projeto

Na tela de configuração, deixe tudo como está — a Vercel detecta automaticamente que é um site estático (HTML puro).

- **Framework Preset:** Other
- **Root Directory:** deixe em branco
- **Build Command:** deixe em branco
- **Output Directory:** deixe em branco

Clique em **Deploy**.

---

### 4. Aguarde o deploy

A Vercel vai processar e publicar o site em menos de 1 minuto.

Quando terminar, você recebe um link no formato:
```
https://safi-jiiva-o-drag-o-vermelho.vercel.app
```

Clique no link para ver o site no ar.

---

## Atualizações automáticas

A partir de agora, toda vez que você ou seu amigo fizer um `git push` para o repositório, a Vercel vai atualizar o site automaticamente — sem precisar fazer nada manualmente.

---

## Domínio personalizado (opcional)

Se quiser um endereço próprio (ex: `safijiiva.com`):

1. Na dashboard do projeto na Vercel, vá em **Settings → Domains**
2. Adicione o domínio desejado
3. Siga as instruções para configurar o DNS

---

## Observação sobre o vídeo de fundo

O vídeo `img/MHW Iceborne - Safijiiva Ecology Cutscene.mp4` já está no repositório e será servido normalmente pela Vercel. Nenhuma configuração extra é necessária.
