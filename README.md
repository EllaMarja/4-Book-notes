================================================================================================= Book Review App
# Book Review App

Hello there! Bonjour !

---

## **WHAT IS BOOK REVIEW APP?!**

A personal book review application where users can add, edit, and delete book reviews. The app generates book covers using an API that requires the book's ISBN, OCLC, or LCCN number. This project is built for personal use and lacks security measures for protecting private databases.

> Une application personnelle de critique de livres où les utilisateurs peuvent ajouter, modifier et supprimer des critiques de livres. L'application génère des couvertures de livres en utilisant une API qui nécessite le numéro ISBN, OCLC ou LCCN du livre. Ce projet est conçu pour un usage personnel et ne dispose pas de mesures de sécurité pour protéger les bases de données privées.

---

## **Installation / Installation**

```bash

** 1. Clone the repository / Cloner le dépôt :

git clone https://github.com/EllaMarja/4-Book-notes 
cd 4-Book-notes

** 2. Install dependencies / Installer les dépendances :

npm install

IMPORTANT Notice: UPDATE the script in your package.json file. Change the start script to the following:

IMPORTANT : Mettez à jour le script dans votre fichier package.json. Changez le script start par le suivant :

"scripts": {
    "start": "nodemon views/src/index.js"
    ...


** 3. Set up PostgreSQL / Configurer PostgreSQL :

Ensure you have PostgreSQL installed on your machine. You can download it from PostgreSQL.

Assurez-vous d'avoir PostgreSQL installé sur votre machine. Vous pouvez le télécharger depuis PostgreSQL.



### 4. **Create the database / Créer la base de données :**



Default 'postgres' is used in the next step, so to make life easier, keep it and change it later.

La base de données par défaut 'postgres' est utilisée dans l'étape suivante, donc pour faciliter les choses, gardez-la et changez-la plus tard.

CREATE DATABASE postgres;




5. Run database migrations / Exécuter les migrations de base de données :



To set up the database:

Pour configurer la base de données :

Copy and paste all contents from the text file COPY-ME.txt into your PostgreSQL.

Copiez et collez tout le contenu du fichier texte COPY-ME.txt dans votre PostgreSQL.

Example book reviews are included; omit the insert into code if not needed.
Des exemples de critiques de livres sont inclus ; ignorez le code insert into si vous ne souhaitez pas les inclure.

Run the code.

npm start

If not using default settings:

Do not modify the code UNLESS you are adding tables to a database that isn't named 'postgres' or to schemas other than 'public'.

Si vous n'utilisez pas les paramètres par défaut :

Ne modifiez pas le code SAUF si vous ajoutez des tables à une base de données qui ne s'appelle pas 'postgres' ou à des schémas autres que 'public'.



6. Create an .env file / Créer un fichier .env :



Create a .env file in the root directory of your project with your PostgreSQL info.

Créez un fichier .env à la racine de votre projet avec vos informations PostgreSQL.

Copy and paste the following:

USER= ""
HOST= ""
DATABASE=""
PASSWORD = ""
PORT=



7. Start the application / Démarrer l'application :

npm start
