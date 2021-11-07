# Beregning av reisefradrag

Henter inn reiseinformasjon i JSON format


```
{
    "arbeidsreiser": [
        {"km": 91, "antall": 180},
        {"km": 378, "antall": 4}
    ],
    "besoeksreiser": [
        {"km": 580, "antall": 4}
    ],
    "utgifterBomFergeEtc": 4850
}
```

Og API'et skal returnere

`{
    "reisefradrag”: 13168
}`
