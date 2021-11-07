

function beregnAntallKilometer(arrayData){
    return arrayData.map(val => val.km * val.antall).reduce((val1,val2) => val1+val2)
}

function beregnFradragPerKm(totalKm){
    //Maks kilometer er 75000
    totalKm = totalKm > 75000 ? 75000 : totalKm
    const krPerKmved50000 = 50000 * 1.5
    const krPerResterendeKm = totalKm-50000 * 0.7
    const krPerKmUnder50000 = totalKm * 1.5
    return totalKm < 50000 ? krPerKmUnder50000 : krPerKmved50000 + krPerResterendeKm
}

function beregnBomUtgifter(bomUtgift){
    return bomUtgift > 3400 ? bomUtgift : 0
}

function beregnReisefradrag(JSON) {
    const arbeidsReiserKm = beregnAntallKilometer(JSON.arbeidsreiser)
    const besoeksReiserKm = beregnAntallKilometer(JSON.besoeksreiser)
    const kilometerFradrag = beregnFradragPerKm(arbeidsReiserKm + besoeksReiserKm)
    const bomUtgifter = beregnBomUtgifter(JSON.utgifterBomFergeEtc)
    const egenAndel = 22000;
    
    return {reisefradrag: kilometerFradrag + bomUtgifter - egenAndel}
}

module.exports = {beregnReisefradrag};