const API_URL = "http://localhost:8080/users";

listarUsuarios();

function listarUsuarios() {
  fetch(API_URL)
    .then(response => response.json())
    .then(users => {
      const tabela = document.querySelector("#tabela-usuarios");
      const contador = document.querySelector("#contador-usuarios");

      tabela.innerHTML = "";
      contador.textContent = String(users.length).padStart(2, "0");

      users.forEach(user => {
        const primeiraLetra = user.name.charAt(0).toUpperCase();

        tabela.innerHTML += `
          <tr>
            <td data-label="ID">${user.id}</td>

            <td data-label="Usuário">
              <div class="user-info">
                <div class="avatar">${primeiraLetra}</div>
                <div>
                  <strong>${user.name}</strong>
                  <small>Usuário ativo</small>
                </div>
              </div>
            </td>

            <td data-label="E-mail">${user.email}</td>
            <td data-label="Telefone">${user.phone}</td>

            <td data-label="Ações">
              <div class="action-buttons">
                <button class="btn-action edit" onclick="carregarUsuario(${user.id})">
                  Editar
                </button>

                <button class="btn-action delete" onclick="deletarUsuario(${user.id})">
                  Excluir
                </button>
              </div>
            </td>
          </tr>
        `;
      });
    })
    .catch(error => {
      console.log("Erro ao listar usuários:", error);
    });
}

function salvarUsuario() {
  const id = document.querySelector("#user-id").value;

  const user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    phone: document.querySelector("#phone").value,
    password: document.querySelector("#password").value
  };

  if (id === "") {
    cadastrarUsuario(user);
  } else {
    atualizarUsuario(id, user);
  }
}

function cadastrarUsuario(user) {
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .then(data => {
      console.log("Usuário cadastrado:", data);

      limparFormulario();
      listarUsuarios();
    })
    .catch(error => {
      console.log("Erro ao cadastrar usuário:", error);
    });
}

function carregarUsuario(id) {
  fetch(`${API_URL}/${id}`)
    .then(response => response.json())
    .then(user => {
      document.querySelector("#user-id").value = user.id;
      document.querySelector("#name").value = user.name;
      document.querySelector("#email").value = user.email;
      document.querySelector("#phone").value = user.phone;
      document.querySelector("#password").value = user.password;
    })
    .catch(error => {
      console.log("Erro ao carregar usuário:", error);
    });
}

function atualizarUsuario(id, user) {
  fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(() => {
      console.log("Usuário atualizado");

      limparFormulario();
      listarUsuarios();
    })
    .catch(error => {
      console.log("Erro ao atualizar usuário:", error);
    });
}

function deletarUsuario(id) {
  fetch(`${API_URL}/${id}`, {
    method: "DELETE"
  })
    .then(() => {
      console.log("Usuário deletado");

      listarUsuarios();
    })
    .catch(error => {
      console.log("Erro ao deletar usuário:", error);
    });
}

function limparFormulario() {
  document.querySelector("#user-id").value = "";
  document.querySelector("#name").value = "";
  document.querySelector("#email").value = "";
  document.querySelector("#phone").value = "";
  document.querySelector("#password").value = "";
}