function calcularTempoPouso(velocidadeInicial, desaceleracao, velocidadeLimite, velocidadeSegura, tempoMaximo) {
    let tempo = 0;
    let velocidade = velocidadeInicial;
    
    while (tempo <= tempoMaximo) {
        velocidade = velocidadeInicial - desaceleracao * tempo;

        if (velocidade < velocidadeLimite) {
            console.log(`Perigo de instabilidade no pouso! A velocidade caiu para ${velocidade} m/s em ${tempo} segundos.`);
            return;
        }

        if (velocidade <= velocidadeSegura) {
            console.log(`A sonda atingiu uma velocidade segura para pouso após ${tempo} segundos, com velocidade de ${velocidade} m/s.`);
            return;
        }

        tempo++;
    }

    console.log("Tempo máximo atingido sem alcançar a velocidade segura para pouso.");
}

// Parâmetros de entrada
let velocidadeInicial = 1000;   // Velocidade inicial da sonda (m/s)
let desaceleracao = 100;         // Taxa de desaceleração (m/s²)
let velocidadeSegura = 150;     // Velocidade segura para pouso (m/s)
let velocidadeLimite = 100;     // Velocidade mínima antes de instabilidade (m/s)
let tempoMaximo = 50;           // Tempo máximo permitido (segundos)

// Chamando a função
calcularTempoPouso(velocidadeInicial, desaceleracao, velocidadeLimite, velocidadeSegura, tempoMaximo);
