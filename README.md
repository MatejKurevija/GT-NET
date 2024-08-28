

# CRUD Aplikacija za Upravljanje Korisnicima

Ova aplikacija je jednostavna CRUD (Create, Read, Update, Delete) aplikacija za upravljanje korisnicima. Backend je implementiran u Node.js koristeći Express.js, a frontend koristi jQuery i DevExtreme dxDataGrid komponentu. Podaci o korisnicima pohranjuju se u lokalnoj JSON datoteci (`db.json`).

## Sadržaj

1. [Zahtjevi](#zahtjevi)
2. [Instalacija](#instalacija)
3. [Pokretanje Projekta](#pokretanje-projekta)
4. [Korištenje Aplikacije](#korištenje-aplikacije)

## Zahtjevi

- Node.js i npm instalirani na vašem računalu. Možete ih preuzeti i instalirati sa službene web stranice: [Node.js](https://nodejs.org/).

## Instalacija

1. **Klonirajte repozitorij** ili kreirajte novu mapu na svom računalu gdje će se nalaziti projekt.

2. **Kreirajte strukturu projekta** kao što je prikazano:

    ```
    /project-folder
    ├── db.json
    ├── server.js
    ├── /public
    │   └── index.html
    ```

3. **Kreirajte datoteke** prema strukturi:

    - `db.json` datoteka za pohranu podataka o korisnicima:
      ```json
      []
      ```

    - `server.js` datoteka koja sadrži Node.js server kod.

    - `index.html` datoteka unutar `public` direktorija koja sadrži frontend kod.

4. **Inicijalizirajte npm projekt**:

    Otvorite terminal u mapi projekta i pokrenite:

    ```bash
    npm init -y
    ```

    Ovo će kreirati `package.json` datoteku.

5. **Instalirajte potrebne pakete**:

    U terminalu pokrenite:

    ```bash
    npm install express body-parser cors fs path
    ```

## Pokretanje Projekta

1. **Pokrenite Node.js server**:

    U terminalu unutar direktorija projekta, pokrenite:

    ```bash
    node server.js
    ```

    Ako sve radi ispravno, trebali biste vidjeti poruku:

    ```
    Server is running on http://localhost:8000
    ```

2. **Otvorite preglednik** i idite na URL: [http://localhost:8000](http://localhost:8000).

    Ovdje ćete vidjeti frontend aplikaciju s dxDataGrid komponentom za upravljanje korisnicima.

## Korištenje Aplikacije

- **Prikaz Korisnika**: Svi korisnici se prikazuju u dxDataGrid komponenti.
- **Dodavanje Korisnika**: Kliknite na opciju za dodavanje u dxDataGrid komponenti, unesite potrebne informacije, i spremite.
- **Uređivanje Korisnika**: Dvokliknite na ćeliju koju želite urediti, napravite promjene, i spremite.
- **Brisanje Korisnika**: Odaberite korisnika kojeg želite obrisati i kliknite na opciju za brisanje.

Aplikacija podržava validaciju podataka prilikom dodavanja i ažuriranja korisnika, kao i sortiranje i filtriranje unutar dxDataGrid komponente.

## Problemi i Rješenja

Ako naiđete na bilo kakve probleme tijekom instalacije ili korištenja aplikacije, provjerite sljedeće:

- Provjerite jesu li svi npm paketi ispravno instalirani.
- Provjerite jesu li Node.js i npm ispravno instalirani i ažurirani.
- Provjerite konzolu preglednika i terminal za moguće greške.

