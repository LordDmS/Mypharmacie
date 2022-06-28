//Livraison Mensuel fournisseur
const ctx1 = document.getElementById('myChart-liv-mois').getContext('2d');
const myChart1 = new Chart(ctx1, {
    type: 'doughnut',
    data: {
        labels: ['Livraison mensuelle', 'Mes livraisons'],
        datasets: [{
            label: '# of Votes',
            data: [120, 23],
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

//Livraison annuel Fournisseur
const ctx2 = document.getElementById('myChart-liv-an').getContext('2d');
const myChart2 = new Chart(ctx2, {
    type: 'doughnut',
    data: {
        labels: ['Livraison Annuelle', 'Mes Livraisons'],
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