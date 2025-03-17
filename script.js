// Données des prix par mois (simulées pour l'exemple)
const prixParMois = {
    '2020': {
        'Janvier': 10200, 'Février': 10180, 'Mars': 10150, 'Avril': 10100,
        'Mai': 10080, 'Juin': 10050, 'Juillet': 10020, 'Août': 10000,
        'Septembre': 9980, 'Octobre': 9950, 'Novembre': 9920, 'Décembre': 9900
    },
    '2021': {
        'Janvier': 9950, 'Février': 10000, 'Mars': 10050, 'Avril': 10100,
        'Mai': 10150, 'Juin': 10200, 'Juillet': 10250, 'Août': 10300,
        'Septembre': 10350, 'Octobre': 10400, 'Novembre': 10450, 'Décembre': 10500
    },
    '2022': {
        'Janvier': 10550, 'Février': 10600, 'Mars': 10650, 'Avril': 10700,
        'Mai': 10750, 'Juin': 10800, 'Juillet': 10850, 'Août': 10900,
        'Septembre': 10950, 'Octobre': 11000, 'Novembre': 11050, 'Décembre': 11100
    },
    '2023': {
        'Janvier': 11150, 'Février': 11200, 'Mars': 11250, 'Avril': 11300,
        'Mai': 11350, 'Juin': 11400, 'Juillet': 11450, 'Août': 11500,
        'Septembre': 11550, 'Octobre': 11600, 'Novembre': 11650, 'Décembre': 11700
    },
    '2024': {
        'Janvier': 10500, 'Février': 10450, 'Mars': 10418
    }
};

// Données des arrondissements
const arrondissements = [
    { nom: "Paris 1er", prix: 11867 },
    { nom: "Paris 2e", prix: 11833 },
    { nom: "Paris 3e", prix: 12462 },
    { nom: "Paris 4e", prix: 13635 },
    { nom: "Paris 5e", prix: 12544 },
    { nom: "Paris 6e", prix: 15260 },
    { nom: "Paris 7e", prix: 14827 },
    { nom: "Paris 8e", prix: 13129 },
    { nom: "Paris 9e", prix: 11249 },
    { nom: "Paris 10e", prix: 9674 },
    { nom: "Paris 11e", prix: 10580 },
    { nom: "Paris 12e", prix: 9838 },
    { nom: "Paris 13e", prix: 10094 },
    { nom: "Paris 14e", prix: 9926 },
    { nom: "Paris 15e", prix: 10226 },
    { nom: "Paris 16e", prix: 12330 },
    { nom: "Paris 17e", prix: 10757 },
    { nom: "Paris 18e", prix: 9437 },
    { nom: "Paris 19e", prix: 8547 },
    { nom: "Paris 20e", prix: 9648 }
];

// Nouvelles données simulées
const volumeParMois = {
    '2024': {
        'Janvier': 3100, 'Février': 3200, 'Mars': 3245
    },
    '2023': {
        'Janvier': 3400, 'Février': 3350, 'Mars': 3300, 'Avril': 3250,
        'Mai': 3200, 'Juin': 3150, 'Juillet': 3100, 'Août': 3050,
        'Septembre': 3000, 'Octobre': 3100, 'Novembre': 3200, 'Décembre': 3300
    }
};

const delaiParArrondissement = [
    { nom: "Paris 1er", delai: 35 },
    { nom: "Paris 2e", delai: 38 },
    { nom: "Paris 3e", delai: 42 },
    { nom: "Paris 4e", delai: 40 },
    { nom: "Paris 5e", delai: 45 },
    { nom: "Paris 6e", delai: 32 },
    { nom: "Paris 7e", delai: 30 },
    { nom: "Paris 8e", delai: 35 },
    { nom: "Paris 9e", delai: 48 },
    { nom: "Paris 10e", delai: 52 },
    { nom: "Paris 11e", delai: 50 },
    { nom: "Paris 12e", delai: 55 },
    { nom: "Paris 13e", delai: 53 },
    { nom: "Paris 14e", delai: 51 },
    { nom: "Paris 15e", delai: 47 },
    { nom: "Paris 16e", delai: 38 },
    { nom: "Paris 17e", delai: 45 },
    { nom: "Paris 18e", delai: 58 },
    { nom: "Paris 19e", delai: 60 },
    { nom: "Paris 20e", delai: 56 }
];

const negociationParArrondissement = [
    { nom: "Paris 1er", taux: -2.5 },
    { nom: "Paris 2e", taux: -2.8 },
    { nom: "Paris 3e", taux: -3.0 },
    { nom: "Paris 4e", taux: -2.7 },
    { nom: "Paris 5e", taux: -3.2 },
    { nom: "Paris 6e", taux: -2.0 },
    { nom: "Paris 7e", taux: -2.2 },
    { nom: "Paris 8e", taux: -2.5 },
    { nom: "Paris 9e", taux: -4.0 },
    { nom: "Paris 10e", taux: -4.5 },
    { nom: "Paris 11e", taux: -4.2 },
    { nom: "Paris 12e", taux: -4.8 },
    { nom: "Paris 13e", taux: -4.6 },
    { nom: "Paris 14e", taux: -4.4 },
    { nom: "Paris 15e", taux: -3.8 },
    { nom: "Paris 16e", taux: -3.0 },
    { nom: "Paris 17e", taux: -3.5 },
    { nom: "Paris 18e", taux: -5.0 },
    { nom: "Paris 19e", taux: -5.2 },
    { nom: "Paris 20e", taux: -4.8 }
];

// Gestion des onglets
function initTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Retirer la classe active de tous les onglets
            tabs.forEach(t => t.classList.remove('active'));
            // Ajouter la classe active à l'onglet cliqué
            tab.classList.add('active');
            
            // Masquer tous les contenus
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.remove('active');
            });
            
            // Afficher le contenu correspondant
            const tabId = `${tab.dataset.tab}-tab`;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Création du graphique des prix
function createChart() {
    const labels = [];
    const data = [];
    
    Object.keys(prixParMois).forEach(annee => {
        Object.entries(prixParMois[annee]).forEach(([mois, prix]) => {
            labels.push(`${mois} ${annee}`);
            data.push(prix);
        });
    });

    const ctx = document.getElementById('priceChart').getContext('2d');
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Prix au m² (€)',
                data: data,
                borderColor: '#2980b9',
                backgroundColor: 'rgba(41, 128, 185, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Évolution du prix au m² à Paris depuis 2020',
                    font: {
                        size: 16
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Prix au m²'
                    }
                }
            }
        }
    });
}

// Création du graphique de volume
function createVolumeChart() {
    const labels = [];
    const data = [];
    
    Object.keys(volumeParMois).reverse().forEach(annee => {
        Object.entries(volumeParMois[annee]).forEach(([mois, volume]) => {
            labels.push(`${mois} ${annee}`);
            data.push(volume);
        });
    });

    const ctx = document.getElementById('volumeChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Nombre de transactions',
                data: data,
                backgroundColor: 'rgba(46, 204, 113, 0.2)',
                borderColor: 'rgba(46, 204, 113, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Volume mensuel des transactions',
                    font: { size: 16 }
                }
            }
        }
    });
}

// Création de la grille des délais
function createDelaiGrid() {
    const grid = document.getElementById('delai-grid');
    
    delaiParArrondissement.forEach(arr => {
        const card = document.createElement('div');
        card.className = 'arrondissement-card';
        
        card.innerHTML = `
            <h3>${arr.nom}</h3>
            <p>${arr.delai} jours</p>
        `;
        
        grid.appendChild(card);
    });
}

// Création de la grille des taux de négociation
function createNegociationGrid() {
    const grid = document.getElementById('negociation-grid');
    
    negociationParArrondissement.forEach(arr => {
        const card = document.createElement('div');
        card.className = 'arrondissement-card';
        
        card.innerHTML = `
            <h3>${arr.nom}</h3>
            <p>${arr.taux.toFixed(1)}%</p>
        `;
        
        grid.appendChild(card);
    });
}

// Création du graphique des délais
function createDelaiChart() {
    const ctx = document.getElementById('delaiChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: delaiParArrondissement.map(arr => arr.nom),
            datasets: [{
                label: 'Délai moyen de vente (jours)',
                data: delaiParArrondissement.map(arr => arr.delai),
                backgroundColor: 'rgba(52, 152, 219, 0.2)',
                borderColor: 'rgba(52, 152, 219, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Délai de vente par arrondissement',
                    font: { size: 16 }
                }
            }
        }
    });
}

// Création du graphique des taux de négociation
function createNegociationChart() {
    const ctx = document.getElementById('negociationChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: negociationParArrondissement.map(arr => arr.nom),
            datasets: [{
                label: 'Taux de négociation (%)',
                data: negociationParArrondissement.map(arr => arr.taux),
                backgroundColor: 'rgba(155, 89, 182, 0.2)',
                borderColor: 'rgba(155, 89, 182, 1)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                title: {
                    display: true,
                    text: 'Taux de négociation par arrondissement',
                    font: { size: 16 }
                }
            }
        }
    });
}

// Création de la grille des arrondissements
function createArrondissementsGrid() {
    const grid = document.getElementById('arrondissements-grid');
    
    arrondissements.forEach(arr => {
        const card = document.createElement('div');
        card.className = 'arrondissement-card';
        
        card.innerHTML = `
            <h3>${arr.nom}</h3>
            <p>${arr.prix.toLocaleString()} €/m²</p>
        `;
        
        grid.appendChild(card);
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    initTabs();
    createChart();
    createVolumeChart();
    createDelaiChart();
    createNegociationChart();
    createArrondissementsGrid();
    createDelaiGrid();
    createNegociationGrid();
});