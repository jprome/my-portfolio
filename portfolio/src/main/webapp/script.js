function addRandomQuote() {
    const quotes =
        ['What matters in life is not what happens to you but what you remember and how you remember it.',
         'It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams.',
         'All profound distraction opens certain doors. You have to allow yourself to be distracted when you are unable to concentrate', 
         'You are never too old to set another goal or to dream a new dream.',
         'True humility is not thinking less of yourself; it is thinking of yourself less.',
         'Do not fear to be eccentric in opinion, for every opinion now accepted was once eccentric.',
         'Happiness must happen, and the same holds for success: you have to let it happen by not caring about it.',
         'Pursue what is meaningful (not what is expedient).', 
         'Living is a constant process of deciding what we are going to do.',
         'Who looks outside, dreams; who looks inside, awakes.',
         ' I am I plus my circumstances',
         'Without music, life would be a mistake',
         'Every man takes the limits of his own field of vision for the limits of the world.',
         'The world of reality has its limits; the world of imagination is boundless.',
         'The limits of my language mean the limits of my world.',
         'Challenging the meaning of life is the truest expression of the state of being human',
         'When you want something, all the universe conspires in helping you to achieve it.',
         'If you want to be happy, be.'
        ];
  
    const names = ['Gabriel Garcia Marquez','Gabriel Garcia Marquez','Julio Cortazar','CS Lewis','CS Lewis','Beltrand Russel','Viktor Frankl',
                   'Jordan Peterson',' Jose Ortega y Gasset',' Carl Jung','Jose Ortega y Gasset',' Fiedrich Nietzche','Arthur Schopenhauer','Jean-Jacques Rousseau',
                   ' Ludwig Wittgenstein','Viktor Frankl','Paulo Coelho', 'Leo Tolstoy'
                ]

    const index = Math.floor(Math.random() * quotes.length);
    // Pick a random greeting.
    const quote = quotes[index];
    const name = names[index];
  
    // Add it to the page.
    const quoteContainer = document.getElementById('quote-container');
    quoteContainer.innerText = quote;

    const nameContainer = document.getElementById('name-container');
    nameContainer.innerText = name;
  }