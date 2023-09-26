let chaussures = [
    {
      marque: 'Nike',
      titre: 'Jordan Air',
      collector: true,
      taillesDispo: [28, 29, 30],
      prix: 300,
      elements: {
        lacets: 'rouge',
        corps: 'blanc',
        semelle: 'bleu',
      },
    },
    {
      marque: 'Vans',
      titre: 'Old Skool',
      collector: false,
      taillesDispo: [34, 36, 38],
      prix: 70,
      elements: {
        lacets: 'noir',
        corps: 'marron',
      },
    },
    {
      marque: 'Adidas',
      titre: 'Stan Smith',
      collector: false,
      taillesDispo: [40, 42, 44],
      prix: 100,
      elements: {
        lacets: 'vert',
        corps: 'blanc',
      },
    },
    {
      marque: 'Nike',
      titre: 'Air Force',
      collector: true,
      taillesDispo: [36, 37, 38],
      prix: 200,
      elements: {
        lacets: 'bleu',
        corps: 'marron',
      },
    },
    {
      marque: 'Nike',
      titre: 'Air Max',
      collector: true,
      taillesDispo: [36, 38, 40],
      prix: 900,
      elements: {
        lacets: 'jaune',
        corps: 'vert',
      },
    },
    {
      marque: 'Vans',
      titre: 'Era',
      collector: false,
      taillesDispo: [30, 32, 40],
      prix: 40,
      elements: {
        lacets: 'bleu',
        corps: 'noir',
      },
    },
    {
      marque: 'Vans',
      titre: 'Sk8',
      collector: false,
      taillesDispo: [28, 30, 26],
      prix: 40,
      elements: {
        lacets: 'bleu',
        corps: 'noir',
        languette: 'rouge',
      },
    },
    {
      marque: 'Vans',
      titre: 'Old Skool',
      collector: false,
      taillesDispo: [36, 28, 60],
      prix: 60,
      elements: {
        lacets: 'blanc',
        corps: 'noir',
        languette: 'noir',
      },
    },
    {
      marque: 'Nike',
      titre: 'Nike SB',
      collector: false,
      taillesDispo: [30, 31, 32],
      prix: 50,
      elements: {
        lacets: 'blanc',
        corps: 'noir',
      },
    },
    {
      marque: 'Adidas',
      titre: 'Old Skool',
      collector: false,
      taillesDispo: [29, 30, 32],
      prix: 70,
      elements: {
        lacets: 'rouge',
        corps: 'bleu',
      },
    },
  ];
// 1/ : 
//   for (let i = 0; i < chaussures.length; i++) {

//     let chaussure = chaussures[i];

//     console.log("Chaussure #" + (i + 1));
//     console.log("Marque: " + chaussure.marque);
//     console.log("Titre: " + chaussure.titre);
//     console.log("Collector: " + chaussure.collector);
//     console.log("Tailles Disponibles: " + chaussure.taillesDispo.join(", "));
//     console.log("Prix: " + chaussure.prix);
//     console.log("Éléments:");
//     console.log("  Lacets: " + chaussure.elements.lacets);
//     console.log("  Corps: " + chaussure.elements.corps);


//     if (chaussure.elements.semelle) {
//       console.log("  Semelle: " + chaussure.elements.semelle);
//     }
//     if (chaussure.elements.languette) {
//       console.log("  Languette: " + chaussure.elements.languette);
//     }
//     console.log("---------------------------------");
//   };

chaussures.forEach((chaussure, index) => {
    console.log("Chaussure #" + (index + 1));
    console.log("Marque: " + chaussure.marque);
    console.log("Titre: " + chaussure.titre);
    console.log("Collector: " + chaussure.collector);
    console.log("Tailles Disponibles: " + chaussure.taillesDispo.join(", "));
    console.log("Prix: " + chaussure.prix);
    console.log("Éléments:");
    console.log("  Lacets: " + chaussure.elements.lacets);
    console.log("  Corps: " + chaussure.elements.corps);
  
    if (chaussure.elements.semelle) {
      console.log("  Semelle: " + chaussure.elements.semelle);
    }
    if (chaussure.elements.languette) {
      console.log("  Languette: " + chaussure.elements.languette);
    }
    console.log("---------------------------------");
  });

  // 2/ :
let nikes = chaussures.filter(chaussure => chaussure.marque === 'Nike');

console.log("Chaussures Nike :");
console.log(nikes);

// 3/ : 

let vansOldSkool = chaussures.filter(chaussure => chaussure.marque === 'Vans' && chaussure.titre === 'Old Skool');


console.log("Prix des chaussures Vans 'Old Skool':");
vansOldSkool.forEach(chaussure => {
  console.log(chaussure.prix);
});

// 4/ : 

let chaussuresCollector = chaussures.filter(chaussure => chaussure.collector === true);

console.log("Chaussures Collector :");
console.log(chaussuresCollector);


// 5 / : 

let vansSk8 = chaussures.find(chaussure => chaussure.marque === 'Vans' && chaussure.titre === 'Sk8');


if (vansSk8) {
  console.log("Couleur des lacets de la chaussure Vans Sk8 : " + vansSk8.elements.lacets);
} else {
  console.log("La chaussure Vans Sk8 n'a pas été trouvée dans le tableau.");
};

// 6/ : 

// let vansSk8 = chaussures.find(chaussure => chaussure.marque === 'Vans' && chaussure.titre === 'Sk8');

if (vansSk8) {
  vansSk8.elements.lacets = 'violet';

  console.log("Chaussure Vans Sk8 mise à jour :");
  console.log(vansSk8);
} else {
  console.log("La chaussure Vans Sk8 n'a pas été trouvée dans le tableau.");
};

// 7: / 
// let nikes = chaussures.filter(chaussure => chaussure.marque === 'Nike');


let montantTotalNike = nikes.reduce((total, chaussure) => total + chaussure.prix, 0);
console.log("Montant total des chaussures Nike : " + montantTotalNike + " euros");


