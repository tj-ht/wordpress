# Wordpress Dev Environment

A local wordpress environment for react.

uses wp-env to manage docker-compose environment variables. Bundled with the wordpress 5.8 core and brads gutenberg block.


see:
https://www.npmjs.com/package/@wordpress/env
https://github.com/WordPress/WordPress
https://github.com/LearnWebCode/brads-boilerplate-wordpress

Broken:
permissions on wp-config.php cannot be written.
run chmod +w wp-config.php in the wordpress root directory

Todo:
add config variables for an nginx reverse proxy for web deployment.

#quickstart

npm -g i @wordpress/env
git clone ht-wp/wordpress
cd wordpress/ht-wp
wp-env start

site will be accessible on localhost:8888 u:admin p:password

#full install

install latest node LTS

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
nvm install --lts
nvm use --lts

##windows - configure wsl2
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
wsl --set-default-version 2
Wsl -i Ubuntu2004

##ubuntu / debian LTS - install modern docker
sudo apt install apt-transport-https ca-certificates curl software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudoadd-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu focalstable"
sudo apt update
apt-cache policy docker-ce
Sudo apt install docker-ce
sudo systemctl status docker
sudo usermod -aG docker ${USER}

## get files
git clone tj-ht/wordpress
cd wordpress/wpdev-ht/
chmod +w wp-config.php
wp-env start

docker ps
(verify that your docker containers are running and visit localhost:8888)

cd wp-content/plugins/ads-v03/
npm install
npm run build / npm run start

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
