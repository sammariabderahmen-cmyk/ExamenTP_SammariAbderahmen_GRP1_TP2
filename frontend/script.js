// Mock Data - Representing the Projects
const projects = [
    { id: 1, title: "IA pour la Santé", student: "Alice Dupont", status: "propose" },
    { id: 2, title: "Blockchain Logistique", student: "Bob Martin", status: "valide" },
    { id: 3, title: "App Mobile E-commerce", student: "Charlie Sims", status: "en-cours" },
    { id: 4, title: "Analyse Big Data", student: "David King", status: "soutenu" },
    { id: 5, title: "Cybersécurité Réseau", student: "Eve Green", status: "en-cours" }
];

function renderBoard() {
    const columns = {
        'propose': document.querySelector('#propose .task-list'),
        'valide': document.querySelector('#valide .task-list'),
        'en-cours': document.querySelector('#en-cours .task-list'),
        'soutenu': document.querySelector('#soutenu .task-list')
    };

    // Clear existing content
    Object.values(columns).forEach(col => col.innerHTML = '');

    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p><strong>Étudiant:</strong> ${project.student}</p>
            <p style="margin-top:5px; font-style:italic;">ID: #PRJ-${project.id}</p>
        `;
        columns[project.status].appendChild(card);
    });

    updateStats();
}

function updateStats() {
    const statsBar = document.getElementById('statsBar');
    const total = projects.length;
    const completed = projects.filter(p => p.status === 'soutenu').length;
    
    statsBar.innerHTML = `
        <div class="stat-item">Total Projets: ${total}</div>
        <div class="stat-item" style="color: var(--success)">Soutenus: ${completed}</div>
        <div class="stat-item" style="color: var(--primary)">En progression: ${((completed/total)*100).toFixed(0)}%</div>
    `;

    // Update column counters
    document.querySelectorAll('.column').forEach(col => {
        const count = col.querySelectorAll('.project-card').length;
        col.querySelector('.count').innerText = count;
    });
}

// Initial Render
document.addEventListener('DOMContentLoaded', renderBoard);