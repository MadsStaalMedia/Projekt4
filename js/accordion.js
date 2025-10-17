const acc = [
    '<button class="accordion__section">Hvad kan jeg lave?</button>',
    '<button class="accordion__section">Hvor meget skal jeg arbejde?</button>',
    '<button class="accordion__section">Hvad hvis jeg bor langt væk?</button>',
    '<button class="accordion__section">Hvordan bliver jeg frivillig?</button>',
    '<button class="accordion__section">Endnu et intelligent spørgsmål</button>'
];


for (let i = 0; i < acc.length; i++) {
    
    document.getElementById("accordion").innerHTML += acc[i];
    
}
