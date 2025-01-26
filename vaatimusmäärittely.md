# Vaatimusmäärittely

## Sovelluksen tarkoitus

Sovelluksen avulla käyttäjä voi merkitä pilkillä saadun saaliin kartalle. Merkinnästä ilmenee paikka, aika ja saaliin tiedot (laji, paino, pituus).

## Käyttäjät

Sovelluksella on aluksi yksi käyttäjärooli, normaali käyttäjä. Myöhemmin voidaan lisätä laajemmilla oikeuksilla toimiva pääkäyttäjä.

## Käyttöliittymäluonnos

![](./kuvat/uiluonnos.jpg)

Sovelluksessa on karttanäkymä ja nappi, josta lisätään saalistiedot. Napista siirrytään lomakenäkymään, jossa tiedot syötetään ja tallennetaan. Jos käyttäjä ei ole kirjautunut, lomakenäkymä kehottaa kirjautumaan kirjautumisnäkymässä.

## Perusversion tarjoama toiminnallisuus

### Ennen kirjautumista

- Käyttäjä voi luoda käyttäjätunnuksen.
    - Käyttäjätunnuksen tulee olla uniikki.
    - Salasanan on oltava 12 merkkiä pitkä, ja sen tulee sisältää isoja kirjaimia, pieniä kirjaimia, numeroita ja symboleja.
    - Sovellus ilmoittaa, jos tunnus ei täytä mainittuja kriteerejä.
- Käyttäjä voi kirjautua sisään.
    - Sovellus ilmoittaa virheellisistä tunnuksista.
- Käyttäjä voi selata karttaa ja muiden tekemiä havaintoja.
- Käyttäjä voi vaihtaa kartan tasoa satelliittikuvasta karttanäkymään. (VALMIS)
- Käyttäjä voi painaa lisäysnappia, joka siirtää kirjautumisnäkymään.

### Kirjautumisen jälkeen

- Käyttäjä voi kirjautua ulos.
- Käyttäjä voi lisätä saaliin tiedot kartalle.
    - Napin painamisen jälkeen käyttäjä merkitsee kartalle paikan, josta kala saatiin. Merkki asetetaan hiiren vasemmalla painikkeella. (VALMIS)
    - Merkitsemisen aikana karttaa voi liikuttaa hiiren oikealla painikkeella.
    - Ruksin asettamisen jälkeen aukeaa lisäyslomake. Lomakkeelle käyttäjä voi kirjoittaa kalan lajin (pakollinen tieto) sekä halutessaan painon, pituuden ja muun kommentin.
- Käyttäjä voi muokata lisäämäänsä merkintää.
- Käyttäjä voi poistaa lisäämänsä merkinnän.