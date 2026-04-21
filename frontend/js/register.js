async function register() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("msg");

    msg.innerText = "";

    if (!username || !password) {
        msg.innerText = "Preencha usuário e senha.";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/register", {
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

        if (response.ok) {
            msg.innerText = data.message;
            msg.style.color = "green";
        } else {
            msg.innerText = data.error || "Erro ao cadastrar.";
            msg.style.color = "red";
        }
    } catch (error) {
        msg.innerText = "Erro ao conectar com a API.";
        msg.style.color = "red";
    }
}