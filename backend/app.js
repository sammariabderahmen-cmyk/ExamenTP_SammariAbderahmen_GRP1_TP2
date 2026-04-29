const API_URL = 'http://localhost:3000/projects';

async function loadProjects() {
    const response = await fetch(API_URL);
    const projects = await response.json();
    
    // Vider les listes
    document.querySelectorAll('.list').forEach(l => l.innerHTML = '');

    projects.forEach(p => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <h3>${p.title}</h3>
            <p>Étudiant : ${p.student_name}</p>
            <button onclick="changeStatus(${p.id}, 'valide')">Valider</button>
            <button onclick="changeStatus(${p.id}, 'en-cours')">Démarrer</button>
            <button onclick="changeStatus(${p.id}, 'soutenu')">Terminer</button>
        `;
        document.querySelector(`#${p.status} .list`).appendChild(card);
    });
}

async function changeStatus(id, newStatus) {
    await fetch(`${API_URL}/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
    });
    loadProjects(); // Recharger pour voir le mouvement SQL en temps réel
}

window.onload = loadProjects;