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
    git clone https://github.com/yourusername/book-review-app.git 
    cd book-review-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Set up PostgreSQL:**
    Ensure you have PostgreSQL installed on your machine. You can download it from [PostgreSQL](https://www.postgresql.org/download/).

4. **Create the database:**
    ```bash
    createdb book_review_db
    ```

5. **Run database migrations:**

    COPY & PASTE ALL of the text file COPY-ME.txt into your postgresql

    then run the code

    IF not using default settings:
    Dont change the code UNLESS you are adding the tables to the db that isnt named postgres and into your Schemas that isnt named public
    **--**
    COPIEZ ET COLLEZ TOUT le contenu du fichier texte COPY-ME.txt dans votre PostgreSQL

    puis exécutez le code

    **SI vous n'utilisez pas les paramètres par défaut :
    Ne modifiez pas le code SAUF si vous ajoutez les tables à la database qui n'est pas nommée 'postgres' et dans vos schémas qui ne sont pas nommés 'public'
    

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
