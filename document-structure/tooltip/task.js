const  aTooltips = document.querySelectorAll('.has-tooltip');

aTooltips.forEach((aTooltip) => {
    aTooltip.addEventListener('click', (e) => {
        e.preventDefault();

        document.querySelectorAll('.tooltip').forEach(tooltip => {
            tooltip.classList.remove('tooltip_active');
        });

        let tooltip = aTooltip.nextElementSibling; 
        if(!tooltip || !tooltip.classList.contains('tooltip')) {
            tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.innerText = aTooltip.getAttribute('title');

            aTooltip.insertAdjacentElement('afterend', tooltip);
        }

        const rect =aTooltip.getBoundingClientRect();
        tooltip.style.top = `${rect.bottom}px`;
        tooltip.style.left = `${rect.left}px`;

        tooltip.classList.add('tooltip_active');
    });

    document.addEventListener('click', function(event) {
        if (!event.target.classList.contains('has-tooltip')) {
            document.querySelectorAll('.tooltip').forEach(tooltip => {
                tooltip.classList.remove('tooltip_active');
            });
        }
    });
});