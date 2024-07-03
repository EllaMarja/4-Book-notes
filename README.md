=================================================================================================
Book Review App
=================================================================================================


Hello there! Bonjour!



**---------------**
WHAT IS BOOK REVIEW APP?!
**---------------**
A personal book review application where users can add, edit, and delete book reviews. The app generates book covers using an API that requires the book's ISBN, OCLC, or LCCN number. This project is built for personal use and lacks security measures for protecting private databases.

Une application personnelle de critique de livres où les utilisateurs peuvent ajouter, modifier et supprimer des critiques de livres. L'application génère des couvertures de livres en utilisant une API qui nécessite le numéro ISBN, OCLC ou LCCN du livre. Ce projet est conçu pour un usage personnel et ne dispose pas de mesures de sécurité pour protéger les bases de données privées.


## Installation


1. **Clone the repository:**
    ```bash
    git clone https://github.com/EllaMarja/4-Book-notes 
    cd 4-Book-notes
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up PostgreSQL:**
    Ensure you have PostgreSQL installed on your machine. You can download it from [PostgreSQL](https://www.postgresql.org/download/).

4. **Create the database:**
    Default 'postgres' is used in next step, so to make life easier, keep it and change it later.
    
    ```bash
    CREATE DATABASE postgres;
    ```

5. **Run database migrations:**

To set up the database:

1. Copy and paste all contents from the text file COPY-ME.txt into your PostgreSQL.

- Example book reviews are included; omit the insert into code if not needed.

2. Run the code.

If not using default settings:

- Do not modify the code UNLESS you are adding tables to a database that isn't named 'postgres' or to schemas other than 'public'.


**-------------**
En français :

Pour configurer la base de données :

1. Copiez et collez tout le contenu du fichier texte COPY-ME.txt dans votre PostgreSQL.

- Des exemples de critiques de livres sont inclus ; ignorez le code insert into si vous ne souhaitez pas les inclure.

2. Exécutez le code.

Si vous n'utilisez pas les paramètres par défaut :

- Ne modifiez pas le code SAUF si vous ajoutez des tables à une base de données qui ne s'appelle pas 'postgres' ou à des schémas autres que 'public'.

    

6. **Create an `.env` file:**
    Create a `.env` file in the root directory of your project with your postgres info.
    Copy and paste the following:
    ```env
        USER= ""
        HOST= ""
        DATABASE=""
        PASSWORD = ""
        PORT=
    ```

7. **Start the application:**
    ```bash
    node views/src/index.js
    ```
