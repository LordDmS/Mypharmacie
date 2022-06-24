//achat profil-part
const ctx3 = document.getElementById('myChart-act-part').getContext('2d');
const myChart3 = new Chart(ctx3, {
    type: 'doughnut',
    data: {
        labels: ['Achats mensuel', 'Mes activites'],
        datasets: [{
            label: '# of Votes',
            data: [100, 13],
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