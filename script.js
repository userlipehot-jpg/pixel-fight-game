// Função para iniciar o jogo
function startGame() {
    console.log('🎮 Jogo iniciado!');
    alert('🎮 Bem-vindo ao PIXEL FIGHT!\n\nControles:\n\n⬅️ ➡️ A/D - Mover\n🛡️ SPACE - Atacar\n\nQue a luta comece!');
    // Aqui você pode adicionar a transição para a tela do jogo
    // window.location.href = 'game.html';
}

// Função para abrir opções
function openOptions() {
    document.getElementById('optionsModal').style.display = 'block';
    console.log('⚙️ Opções abertas');
}

// Função para fechar opções
function closeOptions() {
    document.getElementById('optionsModal').style.display = 'none';
    console.log('⚙️ Opções fechadas');
}

// Função para abrir créditos
function openCredits() {
    document.getElementById('creditsModal').style.display = 'block';
    console.log('📜 Créditos abertos');
}

// Função para fechar créditos
function closeCredits() {
    document.getElementById('creditsModal').style.display = 'none';
    console.log('📜 Créditos fechados');
}

// Fechar modal ao clicar fora dele
window.onclick = function(event) {
    const optionsModal = document.getElementById('optionsModal');
    const creditsModal = document.getElementById('creditsModal');
    
    if (event.target == optionsModal) {
        optionsModal.style.display = 'none';
    }
    if (event.target == creditsModal) {
        creditsModal.style.display = 'none';
    }
}

// Adicionar efeito de som ao clicar (opcional)
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Efeito visual de clique
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });
});

// Efeito de teclado (opcional)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        document.getElementById('optionsModal').style.display = 'none';
        document.getElementById('creditsModal').style.display = 'none';
    }
    
    // Tecla P para jogar (E para Play)
    if (event.key.toLowerCase() === 'p') {
        startGame();
    }
});

console.log('🎮 Pixel Fight - Tela Inicial Carregada!');
console.log('Pressione P para jogar ou clique nos botões');