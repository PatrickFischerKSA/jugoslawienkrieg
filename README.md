# jugoslawienkrieg

Interaktive Lernlandschaft zum Zerfall Jugoslawiens, zum Bosnienkrieg und zu den schwierigen Friedensordnungen danach.

Statische Web-App mit 4 Stationen, Freischaltlogik, Sofortkorrektur, Synonymerkennung und passwortgeschütztem Lehrer*innenzugang.

## Enthalten

- 4 didaktisch geordnete Stationen
- eingebundene Dropbox- und YouTube-Videos
- lokales Fragen-PDF im Projekt
- Sarajevo-Bildquellen als visuelle Leitmaterialien
- Lehrpersonenmodus mit Zeitbedarf, Diagnosefokus und Fehlvorstellungen
- Modulfreischaltung: Das nächste Modul wird erst ab 60 % im vorangehenden Modul geöffnet
- Lehrer*innenzugang mit Passwort: `jugoslawien`
- Sofortkorrektur für:
  - kurze Freitextantworten mit Synonymerkennung
  - offene Transferfragen mit Struktur- und Materialprüfung
  - Drag-and-drop-Chronologien

## Quellenbasis

- `Balkan in Flammen` Folge 1 bis 3
- sieben ergänzende YouTube-Playlist-Videos
- lokales PDF `assets/materials/balkan-in-flammen-fragen.pdf`
- [Wikipedia: Bosnienkrieg](https://de.wikipedia.org/wiki/Bosnienkrieg)
- lokale Bildquellen zu Sarajevo

## Start

Die Lernlandschaft ist eine statische Web-App. `index.html` direkt im Browser öffnen oder den Ordner über einen einfachen lokalen Server ausliefern.

## Struktur

- `index.html`: Layout der Lernlandschaft
- `styles.css`: Gestaltung
- `data.js`: Module, Materialien und Fragen
- `app.js`: Navigation, Fortschritt, Sofortkorrektur, Synonymerkennung
- `assets/materials/`: lokales PDF
- `assets/module-images/`: Sarajevo-Bildquellen und weitere Visuals
