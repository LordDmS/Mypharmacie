//achat

//annuelle
const ctx1 = document.getElementById('myChart-achat-annuelle').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Objectif Annuelle', 'Mes Achats'],
        datasets: [{
            label: '# of Votes',
            data: [57, 43],
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
const ctx2 = document.getElementById('myChart-achat-mensuelle').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Objectif Mensuelle', 'Mes Achats'],
        datasets: [{
            label: '# of Votes',
            data: [37, 53],
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