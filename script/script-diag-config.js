//Objectif vente du mois
const ctx1 = document.getElementById('myChart-obj-vente').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Chiffre d\'affaire', 'Mes ventes'],
        datasets: [{
            label: '# of Votes',
            data: [2000, 433],
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

//Objectif achat du mois
const ctx2 = document.getElementById('myChart-obj-achat').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Chiffre d\'affaire', 'Mes achats'],
        datasets: [{
            label: '# of Votes',
            data: [1500, 133],
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