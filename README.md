# 🔥 API Auth JWT - Sistema de Autenticação

Projeto fullstack de autenticação utilizando **Flask** no backend e **HTML, CSS e JavaScript** no frontend, com implementação de **JWT (JSON Web Token)** para controle de acesso.

## 🚀 Funcionalidades

- Cadastro de usuário
- Login com validação
- Geração de token JWT
- Armazenamento do token no navegador (`localStorage`)
- Acesso a rota protegida
- Logout

## 🧠 Tecnologias utilizadas

### Backend
- Python
- Flask
- Flask-CORS
- PyJWT

### Frontend
- HTML5
- CSS3
- JavaScript (Vanilla)

## 📁 Estrutura do projeto

```bash
api-auth-jwt/
│
├── assets/
│   └── screenshots/
│       ├── auth-home.png
│       ├── auth-register.png
│       ├── auth-profile.png
│       └── auth-token.png
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── app.py
│   ├── requirements.txt
│   └── .gitignore
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── login.js
│   │   ├── register.js
│   │   └── profile.js
│   ├── index.html
│   ├── login.html
│   ├── register.html
│   └── profile.html
│
└── README.md