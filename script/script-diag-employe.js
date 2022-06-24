//vente profil-employe
const ctx1 = document.getElementById('myChart-vente-emp').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Ventes mensuel', 'Mes ventes'],
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

//achat profil-employe
const ctx2 = document.getElementById('myChart-achat-emp').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Achats mensuel', 'Mes achats'],
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