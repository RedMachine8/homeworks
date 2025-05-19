document.querySelectorAll('.tab__navigation').forEach(navigation => {
    const tabs = navigation.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            tabs.forEach(t => t.classList.remove('tab_active'));
            this.classList.add('tab_active');
            
            const index = Array.from(tabs).indexOf(this);
            const contents = navigation.closest('.tabs').querySelectorAll('.tab__content');
            contents.forEach(content => content.classList.remove('tab__content_active'));
            contents[index].classList.add('tab__content_active');
        });
    });
});