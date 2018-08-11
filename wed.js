/*
function under21(){
var users = [
  ["adi", 20,'male'],
  ['budi', 19, 'male'],
  ['cici', 20, 'female'],
  ['dodo', 21, 'male'],
]
  var output = []
  if (var i = 0; users.length; i++){
    if(users[i][i]) < 21){
    console.log(users[i][0])
    }
  };

  var product = [
    ["adidas", $50],
    ['nike', $100],
    ['puma', $70],
  ];
  var trans = [
    [0,0]
    [0,1]
    [0,2]
    [0,3]
  ]
}

console.log
*/

function buying(name) {
  var users = [
    ['Adi', 20, 'male'],
    ['Budi', 19, 'male'],
    ['Cici', 20, 'female'],
    ['Dodo', 21, 'male']
  ];
  var product = [
    ['zarra clothes', 500000],
    ['Levi jeans', 1000000],
    ['Adidas Shoes', 1000000]
  ];
  var trans = [
    [0,0],
    [0,2],
    [1,1],
    [2,0],
    [3,2]
  ];
  var id_user;
  var id_product;
  var array = []
  for(var i = 0; i < users.length; i++){
    if(name === users[i][0]){
      //console.log(users[i][0])
      id_user = i

        //  console.log(product[j]);

      }
    }
    for(var j =0 ; j < trans.length; j++){
      if(id_user === trans[j][0]){
        array.push(product[trans[j][1]][0])
        //array = product[trans[j][1]][0]
        //console.log(array)
      }
    }
    return array;
}

console.log(buying('Adi')); // ['zarra clothes', 'Adidas Shoes']
