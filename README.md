# VChat - WebApp de Chat em Tempo Real

**VChat** é um aplicativo web de chat desenvolvido com **Vue.js** e integrado ao **Firebase Realtime Database** para comunicação em tempo real. O projeto foi projetado para oferecer uma experiência de usuário intuitiva, segura e responsiva, possibilitando a criação de salas de bate-papo e troca de mensagens em tempo real.

---

## 🚀 Deploy  
Acesse o VChat em: [https://appvchat.netlify.app/](https://appvchat.netlify.app/)  

---

## 🧰 Principais Características  
- **Frontend** desenvolvido com **Vue.js**, proporcionando uma interface moderna e interativa.  
- Integração com **Firebase Realtime Database** para comunicação em tempo real.  
- **Autenticação segura** e fácil de usar, utilizando Firebase Authentication.  
- Design responsivo e intuitivo, otimizado para dispositivos móveis e desktops.  
- Funcionalidades como:
  - Criação de salas de bate-papo.  
  - Envio e recebimento de mensagens em tempo real.  

---

## 💡 Desafios Enfrentados  
- Configuração e integração do **Firebase Realtime Database** para garantir alta performance.  
- Implementação de um fluxo de autenticação simplificado e seguro com **Firebase Authentication**.  
- Desenvolvimento de um **design responsivo**, adaptado para diferentes tipos de dispositivos.  

---

## 🏆 Resultados Alcançados  
- Entrega de um webapp de chat funcional, rápido e com comunicação em tempo real.  
- Integração bem-sucedida de tecnologias modernas, consolidando boas práticas de desenvolvimento web.  
- Melhoria nas habilidades técnicas em **Vue.js**, **Firebase** e design de sistemas interativos.  

---

## 🛠️ Tecnologias Utilizadas  
- **Vue.js**  
- **Firebase Realtime Database**  
- **Firebase Authentication**  
- **CSS Responsivo**  
- **Netlify** para deploy.  

---

## 📖 Como Rodar Localmente  

1. Clone o repositório:  
   ```bash
   git clone https://github.com/mrpunkdasilva/vchat.git
   ```  

2. Acesse o diretório do projeto:  
   ```bash
   cd vchat
   ```  

3. Instale as dependências:  
   ```bash
   npm install
   ```  

4. Configure o Firebase:
   - Crie um projeto no Firebase.  
   - Configure as credenciais em um arquivo `.env` conforme o modelo abaixo:  
     ```env
     VUE_APP_FIREBASE_API_KEY=your_api_key
     VUE_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     VUE_APP_FIREBASE_DATABASE_URL=your_database_url
     VUE_APP_FIREBASE_PROJECT_ID=your_project_id
     VUE_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     VUE_APP_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
     VUE_APP_FIREBASE_APP_ID=your_app_id
     ```

5. Inicie o servidor local:  
   ```bash
   npm run serve
   ```  

6. Acesse o aplicativo em [http://localhost:8080](http://localhost:8080).

---

## 📄 Licença  
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](LICENSE) para mais detalhes.  
