
document.addEventListener('DOMContentLoaded', function () {
    const warningContainer = document.getElementById('warnings-opportunities');
    if (!warningContainer) return;

    const section = document.createElement('section');
    section.innerHTML = `
        <h2>⚠️ Varningar & Möjligheter</h2>
        <ul id="warnings-list">
            <li>Inga aktuella varningar eller möjligheter.</li>
        </ul>
    `;
    warningContainer.appendChild(section);
});
