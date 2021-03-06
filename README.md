
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
* Local Storage
* API
* Environment&nbsp;variables

## API e utilizzo
WhatWatch è una single page application creata con lo scopo di rispondere alla domanda "Cosa guardo stasera?" che spesso ognuno di noi si pone.
La SPA si pone come obiettivo quello di semplificare la vita dell'utente, fornendo una risposta immediata e permettendo di scoprire generi e opere di taglio e tipologia totalmente diverse tra loro con lo scopo di ampliare la cultura dell'utente stesso e velocizzando il processo di scelta.
L'app implementa il local storage, così che, ritorando sulla pagina sia possibile, all'utente ritrovare i film salvati o, eventualmente, cancellarli. 

É possibile provare l'app in modalità produzione a questo link: https://whatwatch-app.netlify.app/
o provarla in modalità dev, seguendo la sezione <a href="#installazione">Installazione</a>

N.b. La key è nascosta opportunamente tramite l'uso delle environment variables, sfruttate utilizzando webpack e il sistema di Netlify.



## Prerequisiti

* Installare l'ambiente Node.js per poter amministrare npm
* Git CLI

## Installazione

1. Clona il repository

   ```sh
   git clone https://github.com/GiacomoBorsellino/WhatWatch
   ```

2. Entra nella cartella

   ```sh
   Cd WhatWatch
   ```

3. Installa NPM

   ```sh
   npm install npm@latest -g
   npm install 
   ```

4. Cambia file .env.example in .env e inserisci le tue keys
   (l' API richiede una key per funzionare, richiedila sul sito dedicato).
    [The Movie Database API](https://developers.themoviedb.org/3/getting-started/introduction).


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

Link all'app: [WhatWatch](https://whatwatch-app.netlify.app/)

## Crediti

* [Best-README-Template](https://github.com/othneildrew/Best-README-Template)
* [The Movie Database (TMDB) API](https://developers.themoviedb.org/3/getting-started/introduction)
