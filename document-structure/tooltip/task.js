const urlTooltips = document.querySelectorAll('.has-tooltip');

urlTooltips.forEach((urlTooltip) => {
    urlTooltip.addEventListener('click', (e) => {
        e.preventDefault();
        let tooltip = document.querySelector('.tooltip');
        const texTooltip = urlTooltip.title;

        if(texTooltip === tooltip.textContent) {
            tooltip.classList.toggle('tooltip_active');
        } else {
            tooltip.textContent = texTooltip;
            const rect = urlTooltip.getBoundingClientRect();
            tooltip.style.top = `${rect.bottom}px`;
            tooltip.style.left = `${rect.left}px`;
        }
    });
});