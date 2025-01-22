// Pega os elementos do DOM
const counters = document.querySelectorAll(".counters span");
const container = document.querySelector(".counters");

// Variável que identifica se os contadores foram ativados
let activated = false;

window.addEventListener("scroll", () => {
	// Se a página for rolada e os contadores ainda não foram ativados
	if (
		window.pageYOffset > container.offsetTop - container.offsetHeight - 200 &&
		!activated
	) {
		// Marca os contadores como ativados
		activated = true;

		// Define o tempo total de duração da animação (em milissegundos)
		const animationDuration = 3500; // 3 segundos e meio

		// Define o tempo de início da animação
		const startTime = performance.now();

		// Função para atualizar os contadores
		function updateCount(timestamp) {
			// Calcula o progresso da animação (entre 0 e 1)
			const progress = Math.min(1, (timestamp - startTime) / animationDuration);

			// Atualiza cada contador
			counters.forEach((counter) => {
				// Pega o valor final do contador
				const target = parseInt(counter.dataset.count);

				// Calcula o valor atual do contador com base no progresso da animação
				const currentValue = Math.floor(target * progress);

				// Atualiza o texto do contador
				counter.innerText = currentValue.toLocaleString();
			});

			// Se ainda não atingimos o tempo total da animação, continua atualizando
			if (progress < 1) {
				requestAnimationFrame(updateCount);
			}
		}

		// Inicia a animação
		requestAnimationFrame(updateCount);
	}
});
