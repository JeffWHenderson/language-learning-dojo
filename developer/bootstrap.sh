#!/usr/bin/env bash

NODE_VERSION=10.12.0
NPM_VERSION=6.4.1

## Save script's current directory
#DIR="$( cd -P "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
#cd "${DIR}"

install_brew_if_missing() {
    which -s brew
    if [[ $? != 0 ]] ; then
        /usr/bin/ruby -e "$(curl -fsSL https://raw.github.com/gist/323731)"
    else
        brew update
    fi
}

install_node_if_missing() {
    echo "Checking for Node version ${NODE_VERSION}"
    node --version | grep ${NODE_VERSION}
    if [[ $? != 0 ]] ; then
        # Install Node
        cd `brew --prefix`
        $(brew versions node | grep ${NODE_VERSION} | cut -c 16- -)
        brew install node

        # Reset Homebrew formulae versions
        git reset HEAD `brew --repository` && git checkout -- `brew --repository`
    fi
}

install_NPM_if_missing() {
    echo "Checking for NPM version ${NPM_VERION}"
    npm --version | grep ${NPM_VERSION}
    if [[ $? != 0 ]] ; then
        echo "Downloading npm"
        git clone git://github.com/isaacs/npm.git && cd npm
        git checkout v${NPM_VERSION}
        make install
    fi
}

install_dependencies() {
#    echo 'Installing dependencies using brewfile' >&2
#    brew bundle

    which -s ng || brew install angular-cli
    which -s git || brew install git
}

install_brew_if_missing
install_node_if_missing
install_NPM_if_missing
install_dependencies


echo "\n\n Your Dev Environment has been set up. Happy Coding!"


######## ADD HEROKU TO PROJECT ??????? ####################

## Check if Heroku toolbelt is installed
##
#which -s heroku
#if [[ $? != 0 ]] ; then
#    # Install Heroku toolbelt
#    echo "Downloading Heroku toolbelt"
#    curl -O http://assets.heroku.com/heroku-toolbelt/heroku-toolbelt.pkg
#    open /tmp/heroku-toolbelt.pkg
#    read -p "Press return when done with Heroku installation"
#
#    # open https://api.heroku.com/login
#    # https://api.heroku.com/signup
#else
#    heroku update
#fi
#


##
## Heroku setup
##
#heroku login
#heroku keys | grep 'No keys' && heroku keys:add
#
#cd "${DIR}"
#git remote | grep heroku > /dev/null || git remote add heroku git@heroku.com:app-name.git
#
## Install node packages
#npm install
#which -s http-console || npm install -g http-console
