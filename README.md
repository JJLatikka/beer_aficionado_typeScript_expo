# beer_aficionado_typescript_expo

Haaga-Helia AMK:n "Mobiiliohjelmointi"-kurssin lopputyönä päätin tehdä
olutharrastajan käyttöön tarkoitetun harrastuspäiväkirja-tyyppisen sovelluksen.
Tämä sovellus tuli toteuttaa React Native:lla 'Expo'-alustaa käyttäen. Expo:n
kautta, testikäyttöä varten, tämän sovelluksen myös julkaisin. Tässäkin
projektissani halusin käyttää TypeScript:ia jo pelkästään siksi, että
sovelluksen hallinnoima data voidaan luokitella hyvin selkeästi määrittyviin
tyyppeihin. - Olen havainnut, että nykypäivän melko valtaisa olutvalikoima voi
joskus aiheuttaa olutharrastajalle tilanteen, jossa tämä esim. ruokajuomaa tai
lenkki- tai saunaolutta valitessaan saattaa miettiä, onko jo maistanut jotain
tiettyä tuotetta vai ei, ja toisaalta vaikka olisikin maistanut, ei silti
välttämättä muista, millaisen arvion tuotteesta tuli muodostaneeksi. Siksi tämä
sovellus. - Datan tallentamiseen ja käyttäjien autentikointiin käytin 'PostgreSQL'-
tyylistä avoimen lähdekoodin 'Supabase'-pilvipalvelua. Muokkasin sovelluksesta myös
ns. 'economic'-version, jossa Supabase:en tallennetaan kaikki muu data paitsi
kuvat. Tämä siksi, etten ylittäisi 'Free Tier'-kiintiöitäni. Kuvat tässä
muokatussa versiossa tallennetaan paikalliseen 'SQLite'-tietokantaan. Tämänkin
sovellukseni värimaailman inspiraatioksi valitsin tuon legendaarisen nostalgisen
'Commodore 64'-kotitietokoneen oletusvärit.

---

For my final project in the "Mobile Programming" course at Haaga-Helia University
of Applied Sciences, I decided to create an application designed for beer enthusiasts.
I implemented this application using React Native with the Expo platform. Through Expo,
I also published this application for testing purposes. Also in this project, I wanted
to use TypeScript, beacause the data managed by the application can easily be classified
into certain specific types. - I've observed that the extensive variety of beers available
today can sometimes lead beer enthusiasts to situations where they might wonder if they
have already tried a particular product. When selecting a beer for a specific occasion
like a meal, after run, or a sauna session, even if he has tried a particular beer,
a beer enthusiast might not necessarily remember, which kind of rating or review he
gave to that product. Hence this application. - For data storage and user authentication,
I utilized an open-source, PostgreSQL-style cloud service called 'Supabase.' Afterwards,
I also created an 'economic' version of the application where all data, except for images,
is stored in Supabase. I did this to avoid exceeding my 'Free Tier' quotas. In this modified
version, images are stored in a local SQLite database. As inspiration for the color scheme
of this application, I once again chose the iconic nostalgic default colors of the legendary
'Commodore 64' home computer.
