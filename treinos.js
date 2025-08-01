// Dados dos treinos
const workouts = [
  {
    name: "PUSH",
    day: "SEGUNDA",
    exercises: [
      {
        name: "SUPINO INCLINADO NO SMITH",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CHEST PRESS MÁQUINA",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CROSSOVER ALTO",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ELEVAÇÃO FRONTAL UNILATERAL POLIA",
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "TRÍCEPS PULLEY LATERAL",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd1d14a8de?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "TRÍCEPS FRANCÊS COM CORDA POLIA",
        image: "https://images.unsplash.com/photo-1566241134091-c0e5b1b8b5b5?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ABDÔMEN NA POLIA",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "3 séries válidas (100% da carga - 6 a 10 reps)",
      },
    ],
  },
  {
    name: "PULL",
    day: "TERÇA",
    exercises: [
      {
        name: "PUXADOR ALTO INVERSO",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ABERTURA PRONADA",
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "REMADA UNILATERAL COM TRONCO INCLINADO",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd1d14a8de?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "FACE PULL (foco em ombro)",
        image: "https://images.unsplash.com/photo-1566241134091-c0e5b1b8b5b5?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ELEVAÇÃO LATERAL MÁQUINA",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (10 reps + 10 segundos isometria)",
      },
      {
        name: "ROSCA MARTELO NA POLIA",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ROSCA SCOTT NA POLIA UNILATERAL",
        image: "https://images.unsplash.com/photo-1566241134091-c0e5b1b8b5b5?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
    ],
  },
  {
    name: "LEGS",
    day: "QUARTA",
    exercises: [
      {
        name: "PANTURRILHA NO SMITH",
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CADEIRA ADUTORA",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd1d14a8de?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "AGACHAMENTO SMITH",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CADEIRA EXTENSORA UNILATERAL",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CADEIRA FLEXORA",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "MESA FLEXORA UNILATERAL",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CADEIRA ABDUTORA",
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "PANTURRILHA SENTADO",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd1d14a8de?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
    ],
  },
  {
    name: "UPPER",
    day: "QUINTA",
    exercises: [
      {
        name: "SUPINO DECLINADO NO SMITH",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CRUCIFIXO MÁQUINA",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "PUXADOR ALTO COM TRIÂNGULO",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "REMADA PRONADA UNILATERAL MÁQUINA",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ROSCA 45°",
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "1 série válida (100% da carga - 6 a 10 reps)",
      },
      {
        name: "TRÍCEPS TESTA POLIA BANCO INCLINADO",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd1d14a8de?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "1 série válida (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ROSCA INVERSA + FLEXÃO PUNHO POLIA ALTA",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "1 série válida (100% da carga - 6 a 10 reps)",
      },
    ],
  },
  {
    name: "LOWER",
    day: "SEXTA",
    exercises: [
      {
        name: "PANTURRILHA NO LEG 45°",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "CADEIRA ADUTORA",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "LEG PRESS 45°",
        image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "FLEXÃO DE PERNAS MÁQUINA",
        image: "https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "STIFF",
        image: "https://images.unsplash.com/photo-1583500178690-f7fd1d14a8de?w=400&h=300&fit=crop&crop=center",
        warmup: "1 série de aquecimento (50% da carga - 10 a 12 reps)",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "BÚLGARO LIVRE OU SMITH",
        image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "ELEVAÇÃO PÉLVICA LIVRE",
        image: "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
      {
        name: "PANTURRILHA SENTADO",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&h=300&fit=crop&crop=center",
        prep: "1 série preparatória (80% da carga - 10 a 12 reps)",
        work: "2 séries válidas (100% da carga - 6 a 10 reps)",
      },
    ],
  },
]

let currentWorkout = null

// CONFIGURAÇÃO DE SENHAS - EDITE AQUI OS NOMES DOS SEUS PDFs
const senhasValidas = [
  // Adicione aqui os nomes exatos dos seus PDFs (sem a extensão .pdf)
  // Exemplo: se o PDF se chama "Treino-João-Push.pdf", adicione "Treino-João-Push"

  "exemplo-treino-1",
  "exemplo-treino-2",
  "exemplo-treino-3",

  // INSTRUÇÕES:
  // 1. Substitua os exemplos acima pelos nomes reais dos seus PDFs
  // 2. Não inclua a extensão .pdf
  // 3. Mantenha as aspas e vírgulas
  // 4. Uma senha por linha
]

// Função de login
function fazerLogin() {
  const senha = document.getElementById("senhaInput").value.trim()
  const errorDiv = document.getElementById("loginError")

  // Verifica se a senha digitada está na lista de senhas válidas
  // Aceita tanto maiúscula quanto minúscula
  const senhaValida = senhasValidas.some(
    (s) => s.toLowerCase() === senha.toLowerCase() || (s + ".pdf").toLowerCase() === senha.toLowerCase(),
  )

  if (senhaValida) {
    document.getElementById("loginScreen").style.display = "none"
    document.getElementById("dashboardScreen").style.display = "block"
    mostrarMensagemSucesso()
    errorDiv.innerHTML = ""
  } else {
    mostrarErro("Senha incorreta. Digite o nome do seu PDF de treino.")
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

// Função para mostrar mensagem de sucesso
function mostrarMensagemSucesso() {
  const dashboard = document.getElementById("dashboardScreen")
  dashboard.innerHTML = `
    <div class="dashboard-header">
      <h1 class="dashboard-title">AMG Pro - Acesso Liberado</h1>
      <p class="dashboard-subtitle">Seu treino foi validado com sucesso!</p>
      <button onclick="sair()" class="btn-logout">Sair</button>
    </div>

    <div class="success-card">
      <div class="success-icon">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22,4 12,14.01 9,11.01"></polyline>
        </svg>
      </div>
      <h3>Acesso Autorizado</h3>
      <p>Você pode agora acessar seu PDF de treino personalizado.</p>
      <div class="success-message">
        <svg class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14,2 14,8 20,8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10,9 9,9 8,9"></polyline>
        </svg>
        <span>Sistema AMG Pro - PDF Validado</span>
      </div>
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
  currentWorkout = null
}

// Event listeners
document.addEventListener("DOMContentLoaded", () => {
  // Permitir login com Enter
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
