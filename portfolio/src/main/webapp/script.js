function addRandomQuote() {

    const quotes =
        [{quote:'What matters in life is not what happens to you but what you remember and how you remember it.', source:'Gabriel Garcia Marquez'},
         {quote:'It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.', source:'Gabriel Garcia Marquez'},
         {quote:'All profound distraction opens certain doors. You have to allow yourself to be distracted when you are unable to concentrate', source:'Julio Cortazar'},
         {quote:'You are never too old to set another goal or to dream a new dream.', source:'CS Lewis'},
         {quote:'True humility is not thinking less of yourself; it is thinking of yourself less.', source:'Viktor Frankl'},
         {quote:'Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.',source:'Beltrand Russel'},
         {quote:'Happiness must happen, and the same holds for success: you have to let it happen by not caring about it.',source:'Viktor Frankl'},
         {quote:'Pursue what is meaningful (not what is expedient).', source:'Jordan Peterson'},
         {quote:'Living is a constant process of deciding what we are going to do.',source: 'Jose Ortega y Gasset'},
         {quote:'Who looks outside, dreams; who looks inside, awakes.',source:'Carl Jung'},
         {quote:'I am I plus my circumstances',source:'Jose Ortega y Gasset'},
         {quote:'Without music, life would be a mistake',source:'Fiedrich Nietzche'},
         {quote:'Every man takes the limits of his own field of vision for the limits of the world.',source:'Arthur Schopenhauer'},
         {quote:'The world of reality has its limits; the world of imagination is boundless.',source:'Jean-Jacques Rousseau'},
         {quote:'The limits of my language mean the limits of my world.',source:'Ludwig Wittgenstein'},
         {quote:'Challenging the meaning of life is the truest expression of the state of being human',source:'Viktor Frankl'},
         {quote:'When you want something, all the universe conspires in helping you to achieve it.',source:'Paulo Coelho'},
         {quote:'If you want to be happy, be.',source:'Leo Tolstoy'}
        ];
  
    const index = Math.floor(Math.random() * quotes.length);
    // Pick a random greeting.
    const quote = quotes[index].quote;
    const name = quotes[index].source;
  
    // Add it to the page.
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;

    const nameContainer = document.getElementById('name-container');
    nameContainer.innerText = name;
  }

function addName() {
     fetch('/data').then(response => response.json()).then((data) => {
        document.getElementById('greeting-container').innerText = data.comments[0].comment;

        
    });
   
    
}

function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}
