// CONFIGURAÇÃO DE SENHAS - APENAS NÚMEROS
const senhasValidas = [
  "1",
  "2",
  "3",
  "4",
  "5",
  // Adicione mais números conforme necessário
]

// Função de login
function fazerLogin() {
  const senha = document.getElementById("senhaInput").value.trim()
  const errorDiv = document.getElementById("loginError")

  if (senhasValidas.includes(senha)) {
    document.getElementById("loginScreen").style.display = "none"
    document.getElementById("dashboardScreen").style.display = "block"
    mostrarSucesso()
    errorDiv.innerHTML = ""
  } else {
    mostrarErro("Senha incorreta. Digite o número do seu PDF.")
  }
}

// Função para mostrar erro
function mostrarErro(mensagem) {
  const errorDiv = document.getElementById("loginError")
  errorDiv.innerHTML = `
    <div class="alert alert-error">
      <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="15" y1="9" x2="9" y2="15"></line>
        <line x1="9" y1="9" x2="15" y2="15"></line>
      </svg>
      <span>${mensagem}</span>
    </div>
  `
}

// Função para mostrar sucesso
function mostrarSucesso() {
  const dashboard = document.getElementById("dashboardScreen")
  dashboard.innerHTML = `
    <div class="dashboard-header">
      <h1 class="dashboard-title">AMG Pro</h1>
      <p class="dashboard-subtitle">Acesso Liberado</p>
      <button onclick="sair()" class="btn-logout">Sair</button>
    </div>

    <div class="success-card">
      <div class="success-icon">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22,4 12,14.01 9,11.01"></polyline>
        </svg>
      </div>
      <h3>PDF Validado</h3>
      <p>Seu treino foi autorizado com sucesso.</p>
    </div>
  `
}

// Função para abrir treino específico
function abrirTreino(index) {
  currentWorkout = workouts[index]
  document.getElementById("dashboardScreen").style.display = "none"
  document.getElementById("workoutScreen").style.display = "block"

  // Atualizar header do treino
  document.getElementById("workoutDayBadge").innerHTML = `
    <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
    ${currentWorkout.day}
  `

  document.getElementById("workoutName").textContent = currentWorkout.name
  document.getElementById("workoutDescription").textContent = `Treino de ${currentWorkout.day.toLowerCase()}`

  // Carregar exercícios
  carregarExercicios()
}

// Função para carregar exercícios
function carregarExercicios() {
  const container = document.getElementById("exercisesContainer")

  container.innerHTML = currentWorkout.exercises
    .map(
      (exercise, index) => `
    <div class="exercise-card">
      <div class="exercise-image">
        <img src="${exercise.image}" alt="${exercise.name}" loading="lazy">
        <div class="exercise-number">${index + 1}</div>
      </div>
      
      <div class="exercise-info">
        <h3 class="exercise-name">${exercise.name}</h3>
        
        <div class="exercise-details">
          ${
            exercise.warmup
              ? `
            <div class="exercise-set">
              <div class="set-badge warmup">Aquecimento</div>
              <div class="set-description">${exercise.warmup}</div>
            </div>
          `
              : ""
          }
          
          ${
            exercise.prep
              ? `
            <div class="exercise-set">
              <div class="set-badge prep">Preparatória</div>
              <div class="set-description">${exercise.prep}</div>
            </div>
          `
              : ""
          }
          
          <div class="exercise-set">
            <div class="set-badge work">Séries Válidas</div>
            <div class="set-description">${exercise.work}</div>
          </div>
          
          ${
            exercise.notes
              ? `
            <div class="exercise-set">
              <div class="set-badge note">Observação</div>
              <div class="set-description">${exercise.notes}</div>
            </div>
          `
              : ""
          }
        </div>
      </div>
    </div>
  `,
    )
    .join("")
}

// Função para voltar ao dashboard
function voltarDashboard() {
  document.getElementById("workoutScreen").style.display = "none"
  document.getElementById("dashboardScreen").style.display = "block"
  currentWorkout = null
}

// Função para sair
function sair() {
  document.getElementById("dashboardScreen").style.display = "none"
  document.getElementById("loginScreen").style.display = "block"
  document.getElementById("senhaInput").value = ""
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("senhaInput").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      fazerLogin()
    }
  })

  // Efeito de foco no input
  document.getElementById("senhaInput").addEventListener("focus", function () {
    this.parentElement.style.transform = "scale(1.02)"
  })

  document.getElementById("senhaInput").addEventListener("blur", function () {
    this.parentElement.style.transform = "scale(1)"
  })
})
