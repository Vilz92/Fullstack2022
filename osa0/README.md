# osan 0 tehtävät

## 0.1: HTML
[HTML Basics](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/HTML_basics)

## 0.2: CSS
[CSS](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/CSS_basics)


## 0.3: HTML:n lomakkeet
[HTML-lomakkeet](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)


## 0.4: uusi muistiinpano
[Sekvenssieditori](https://www.websequencediagrams.com/)

Koodi:
```
selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
palvelin-->selain: 302 to https://studies.cs.helsinki.fi/exampleapp/notes
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/notes
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
palvelin-->selain: main.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```

![Sekvenssikaavio](/osa0/uusi_postaus.png?raw=true)

## 0.5 Single Page App

Koodi:
```
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa
palvelin-->selain: HTML-koodi
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
palvelin-->selain: main.css
selain->palvelin: HTTP GET https://studies.cs.helsinki.fi/exampleapp/spa.js
palvelin-->selain: spa.js

note over selain:
selain alkaa suorittaa js-koodia
joka pyytää JSON-datan palvelimelta
end note

selain->palvelin: HTTP GET (xhr) https://studies.cs.helsinki.fi/exampleapp/data.json
palvelin-->selain: [{ content: "HTML on helppoa", date: "2019-01-01" }, ...]

note over selain:
selain suorittaa tapahtumankäsittelijän
joka renderöi muistiinpanot näytölle
end note
```

![Sekvenssikaavio](/osa0/spa.png?raw=true)
## 0.6: Uusi muistiinpano

Koodi:
```
note over selain:
selain ajaa spa.js-koodista form.onsubmit-funktion, jossa uusi muistiinpano
asetetaan paikalliseen tietorakenteeseen ja näytetään käyttäjälle
end note

selain->palvelin: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
palvelin-->selain: { message: "note created" }
```
![Sekvenssikaavio](/osa0/uusi_postaus_spa.png?raw=true)
