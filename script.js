function getRandomQuote() {
    fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            const quoteElement=document.getElementById('quote');
            quoteElement.innerHTML=`<p>${data.content}</p><footer>${data.author}</footer>`;
        })
        .catch(error => console.error('Error fetching quote:', error));
}
