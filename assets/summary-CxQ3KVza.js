var e=`# 2026 · Kapitel 8: ORM und Datenbankmigration

## Überblick

Dieses Kapitel erklärt den Object-Relational Mapper und verbindet EF Core Database First mit DbUp.

## Inhalte

- Objektmodell und relationales Datenmodell
- Zweck, Vorteile und Grenzen von ORM-Systemen
- EF Core Database First und Reverse Engineering
- \`dotnet ef dbcontext scaffold\`
- Generierte Entities, \`DbContext\` und Navigationseigenschaften
- LINQ-Abfragen und ihre SQL-Übersetzung
- Schemaänderungen als versionierte Datenbankmigrationen
- DbUp mit nummerierten SQL-Skripten und Journal-Tabelle
- Expand-and-Contract und sichere Datenmigrationen

## Zusammenhang

EF Core löst hier die Anbindung eines bereits existierenden Schemas: Die Datenbank ist die Quelle der Wahrheit und \`scaffold\` erzeugt daraus C#-Modellklassen. DbUp löst ein anderes Problem: Spätere Schemaänderungen werden als versionierte SQL-Skripte reproduzierbar ausgerollt. ORM und Migration ergänzen sich, sind aber nicht dasselbe.

## Lernziele

Die Studierenden können ein bestehendes Datenbankschema mit EF Core anbinden und kontrollierte DbUp-Migrationen für spätere Schemaänderungen erstellen.
`;export{e as default};