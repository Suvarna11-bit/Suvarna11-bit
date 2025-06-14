// Do not import anything that is not in the standard library
const fs = require('fs');

function read_scores(infile) {
    // Read `country: score` pairs from infile and return a list of pairs
    const filedata = fs.readFileSync(infile, 'utf8');
    const lines = filedata.replace(/\r\n/, "\n").split("\n");
    let scores = [];
    for (let i in lines) {
        let line = lines[i].trim();
        if (!line)
            break;
        
        let [country, score] = line.split(":");
        scores.push([country.trim(), parseInt(score)]);
    }
    return scores;
}
    
function no_century_country_count(scores) {
    const countryScores = new Map();
    const centuryCountries = new Set();
    for(const [country,score] of scores){
        if(!countryScores.has(country)){
            countryScores.set(country);
    }
    countryScores.get(country).push(score);
    if(score >= 100){
        centuryCountries.add(country);
    }
}

        let no_century_count = 0;
        for(const country of countryScores.keys()){
            if(!centuryCountries.has(country)){
                no_century_count++;
            }
        }
    return no_century_count;
}

function run() {
    // read from stdin. 0 represents stdin for fs.readFile
    let scores = read_scores(0);
    let no_century_count = no_century_country_count(scores);
    console.log(no_century_count);
}

run();