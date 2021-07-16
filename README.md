
<br />
<p align="center">
  <a href="https://github.com/GiacomoBorsellino/WhatWatch">
    <img src="/build/images/logo.png" alt="Logo" width="200">
  </a>

  <h3 align="center">WhatWatch</h3>

  <p align="center">
    WhatWatch è una single page application creata con lo scopo di aiutare l'utente suggerendogli un prodotto audiovisivo, da un database di 600K+, di cui visualizzerà la scheda e che avrà la possibilità di salvare.
  </p>
    <p align="center">
    <img src="/src/images/screen.png" alt="screenshot" width="80%">
  </p>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Indice</h2></summary>
  <ol>
    <li><a href="#tecnologieargomenti">Tecnologie/Argomenti</a></li>
    <li><a href="#api-e-utilizzo">API e utilizzo</a></li>
    <li><a href="#prerequisiti">Prerequisiti</a></li>
    <li><a href="#installazione">Installazione</a></li>
    <li><a href="#contatti">Contatti</a></li>
  </ol>
</details>

## Tecnologie/Argomenti

* HTML5
* CSS
* Javascript
* Webpack
* NPM
* dotenv
* API
* Environment&nbsp;variables

## API e utilizzo
Per la creazione di Ororo ho utilizzato 2 API: 
la AQICN e la OpenWeather.

La prima estrapola le informazioni relative lo stato dell'aria, definendo la presenza di particolato nocivo.

La seconda restituisce parametri quali temperatura, pressione, umidità, ecc...

L'uso è semplice: basta inserire il nome di una città, o cliccare sul tasto gps, per avere informazioni su questi parametri.
Se la città non è corretta o non esiste, un disclaimer avvertirà dell'errore.

É possibile provare l'app in modalità produzione a questo link: https://ororo-giacomo-borsellino.netlify.app/
o provarla in modalità dev, seguendo la sezione <a href="#installazione">Installazione</a>

N.b. É possibile che certe località dispongano dello stato meteorologico e non di quello dell'aria.

## Prerequisiti

* Installare l'ambiente Node.js per poter amministrare npm
* Git CLI

## Installazione

1. Clona il repository

   ```sh
   git clone https://github.com/GiacomoBorsellino/Ororo
   ```

2. Entra nella cartella

   ```sh
   Cd ororo
   ```

3. Installa NPM

   ```sh
   npm install npm@latest -g
   npm install 
   ```

4. Cambia file .env.example in .env e inserisci le tue keys
   (le API richiedono 2 keys per funzionare, richiedile sui siti dedicati).
[Air Quality Open Data Platform](https://aqicn.org/data-platform/token/#/).
[Open Weather](https://home.openweathermap.org/).

5. Crea la build

   ```sh
   npm run build
   ```

6. Avvia il progetto in modalità dev

   ```sh
   npm run dev
   ```

## Licenza

Distribuito con licenza MIT

## Contatti

Giacomo Borsellino - giacomoborsellino at gmail dot it

Profilo Linkedin, per collaborazioni o proposte di lavoro: [Linkedin](https://www.linkedin.com/in/giacomo-borsellino-4039071b7/)

Link all'app: [Ororo](https://ororo-giacomo-borsellino.netlify.app/)

## Crediti

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [Air Pollution: Real-time Air Quality Index (AQI)](https://aqicn.org/)
* [Open Weather](https://home.openweathermap.org/)
