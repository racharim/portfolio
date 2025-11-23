// Script pour activer le lien courant
const links = document.querySelectorAll('.sidebar nav ul li a');
const currentPage = location.pathname.split('/').pop();
links.forEach(link => {
    if(link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// Script pour replier/déplier la barre latérale
const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggle-sidebar');
if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });
}