#!/bin/bash

# Navigate to the BackEnd directory
cd BackEnd
echo "Installing BackEnd dependencies..."
npm install 

# Navigate back to the script's directory
cd ..

# Navigate to the Database directory
cd Database
echo "Installing Database dependencies..."
npm install

# Navigate back to the script's directory
cd ..

# Navigate to the FrontEnd directory
cd FrontEnd
echo "Installing FrontEnd dependencies..."
npm install   