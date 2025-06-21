const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

const xhr = new XMLHttpRequest();
const xhrStat = new XMLHttpRequest();

xhrStat.addEventListener('readystatechange', () => {
    if(xhrStat.readyState === xhrStat.DONE) {
        const statistics = JSON.parse(xhrStat.response).stat;
        console.log(statistics);
        pollAnswers.innerHTML = '';
        statistics.forEach(statistic => {
            const statElement = document.createElement('div');
            statElement.innerHTML = `<p>${statistic.answer}: ${statistic.votes}%</p>`;
            pollAnswers.appendChild(statElement);
        });
    }
});

xhr.addEventListener('readystatechange', () => {
    if(xhr.readyState === xhr.DONE) {
        pollAnswers.innerHTML = '';

        const dataQuestion = JSON.parse(xhr.response);
        pollTitle.textContent = dataQuestion.data.title;

        dataQuestion.data.answers.forEach(answer => {
            const buttonAnswer = document.createElement('button');
            buttonAnswer.classList.add('poll__answer');
            buttonAnswer.textContent = answer;
            buttonAnswer.addEventListener('click', () => {
                alert('Спасибо, ваш голос засчитан!');
                xhrStat.open('POST', 'https://students.netoservices.ru/nestjs-backend/poll');
                xhrStat.setRequestHeader( 'Content-type', 'application/x-www-form-urlencoded' );
                xhrStat.send(`vote=${dataQuestion.id}&answer=${dataQuestion.data.answers.indexOf(answer)}`);
            });

            pollAnswers.appendChild(buttonAnswer);
        });
    }
});
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();


