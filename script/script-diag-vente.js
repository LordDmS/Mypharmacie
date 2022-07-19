//vente

//annuelle
const ctx1 = document.getElementById('myChart-vente-annuelle').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Objectif Annuelle', 'Mes ventes'],
        datasets: [{
            label: '# of Votes',
            data: [87, 13],
            backgroundColor: [
                '#1B7541',
                '#4dfa08f6',
            ],
            borderColor: [
                '#1B7541',
                '#4dfa08f6',
            ],
            borderWidth: 2
        }]
    }

});

//mensuelle
const ctx2 = document.getElementById('myChart-vente-mensuelle').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Objectif Mensuelle', 'Mes ventes'],
        datasets: [{
            label: '# of Votes',
            data: [17, 83],
            backgroundColor: [
                '#1B7541',
                '#4dfa08f6',
            ],
            borderColor: [
                '#1B7541',
                '#4dfa08f6',
            ],
            borderWidth: 2
        }]
    }

});