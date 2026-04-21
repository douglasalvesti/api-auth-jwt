from flask import Blueprint, request, jsonify
from services.auth_service import register_user, login_user
import jwt

auth_routes = Blueprint("auth_routes", __name__)

SECRET_KEY = "minha_chave_secreta"


@auth_routes.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username e password são obrigatórios"}), 400

    response, status_code = register_user(username, password)
    return jsonify(response), status_code


@auth_routes.route("/login", methods=["POST"])
def login():
    data = request.get_json()

    username = data.get("username")
    password = data.get("password")

    if not username or not password:
        return jsonify({"error": "Username e password são obrigatórios"}), 400

    response, status_code = login_user(username, password)
    return jsonify(response), status_code


@auth_routes.route("/profile", methods=["GET"])
def profile():
    token = request.headers.get("Authorization")

    if not token:
        return jsonify({"error": "Token não fornecido"}), 401

    try:
        data = jwt.decode(token, SECRET_KEY, algorithms=["HS256"])
        return jsonify({"message": f"Bem-vindo {data['username']}"}), 200

    except jwt.ExpiredSignatureError:
        return jsonify({"error": "Token expirado"}), 401

    except jwt.InvalidTokenError:
        return jsonify({"error": "Token inválido"}), 401