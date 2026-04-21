import bcrypt
import jwt
import datetime
from models.user_model import users

SECRET_KEY = "minha_chave_secreta"


def register_user(username, password):
    for user in users:
        if user["username"] == username:
            return {"error": "Usuário já existe"}, 400

    hashed_password = bcrypt.hashpw(password.encode("utf-8"), bcrypt.gensalt())

    new_user = {
        "username": username,
        "password": hashed_password
    }

    users.append(new_user)

    return {"message": "Usuário cadastrado com sucesso"}, 201


def login_user(username, password):
    for user in users:
        if user["username"] == username:
            if bcrypt.checkpw(password.encode("utf-8"), user["password"]):
                token = jwt.encode(
                    {
                        "username": username,
                        "exp": datetime.datetime.utcnow() + datetime.timedelta(hours=1)
                    },
                    SECRET_KEY,
                    algorithm="HS256"
                )
                return {"token": token}, 200

            return {"error": "Senha inválida"}, 401

    return {"error": "Usuário não encontrado"}, 404