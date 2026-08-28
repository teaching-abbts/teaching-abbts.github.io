var e=`# 2026 · Kapitel 11: Build und Deploy

## Überblick

Dieses Kapitel verfolgt den Weg vom Quellcode zum überprüften Deployment.

## Inhalte

- Build-Rezept, Abhängigkeiten und reproduzierbare Artefakte
- Installieren, Prüfen, Bauen und Verpacken
- Vite-/Slidev-Builds und korrekte Base-Pfade
- Trennung von Build-Artefakt und Runtime-Konfiguration
- Umgebungsvariablen und Umgang mit Secrets
- Statische Web-App und SPA-Fallbacks
- CI/CD-Pipelines und minimale Deployment-Rechte
- Smoke Tests, Logs und Health Checks
- Rollback auf ein bekannt gutes Artefakt

## Zusammenhang

Ein Build ist erfolgreich, wenn ein reproduzierbares Artefakt entsteht. Ein Deployment ist erst erfolgreich, wenn dieses Artefakt mit der richtigen Konfiguration erreichbar ist und Smoke Tests besteht. Diese Trennung macht Fehler nachvollziehbar: Man kann unterscheiden, ob der Fehler beim Quellcode, beim Build, bei der Konfiguration oder in der Zielumgebung liegt.

## Lernziele

Die Studierenden können eine Webanwendung reproduzierbar bauen, ausliefern und nach dem Deployment technisch überprüfen.
`;export{e as default};