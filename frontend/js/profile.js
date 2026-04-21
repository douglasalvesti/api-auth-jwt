async function loadProfile() {
    const token = localStorage.getItem("token");
    const msg = document.getElementById("msg");

    if (!token) {
        msg.innerText = "Você não está logado.";
        msg.style.color = "red";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/profile", {
            method: "GET",
            headers: {
                "Authorization": token
            }
        });

        const data = await response.json();

        if (response.ok) {
            msg.innerText = data.message;
            msg.style.color = "green";
        } else {
            msg.innerText = data.error || "Erro ao carregar perfil.";
            msg.style.color = "red";
        }
    } catch (error) {
        msg.innerText = "Erro ao conectar com a API.";
        msg.style.color = "red";
    }
}

function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
}

loadProfile();