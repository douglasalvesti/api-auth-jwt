async function login() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    msg.innerText = "";

    if (!username || !password) {
        msg.innerText = "Preencha usuário e senha.";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });

        const data = await response.json();

        if (data.token) {
            localStorage.setItem("token", data.token);
            window.location.href = "profile.html";
        } else {
            msg.innerText = data.error || "Erro no login.";
            msg.style.color = "red";
        }
    } catch (error) {
        msg.innerText = "Erro ao conectar com a API.";
        msg.style.color = "red";
    }
}