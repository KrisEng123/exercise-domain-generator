let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];
let extension = ['.com', '.us', '.net', '.io'];


for (let l=0; l<pronoun.length; l++) {
    for (let k=0; k<adj.length; k++) {
        for (let j=0; j<noun.length; j++) {
            for (let i=0; i<extension.length; i++) {
                console.log(pronoun[l] + adj[k] + noun[j] + extension[i]);
            }
        }
    }
}







