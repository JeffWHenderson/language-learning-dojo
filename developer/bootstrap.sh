#!/usr/bin/env bash
cat tools/lib/banner.txt

install_brew_if_missing() {
    if ! [ -x "$(command -v brew)" ]; then
        echo ">>> $(tput setaf 1)Error: Homebrew is not installed.$(tput sgr 0)\n\n"
        while true; do
            read -p "Do you wish to install this Hombrew?" yn
            case $yn in
                [Yy]* ) /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"; break;;
                [Nn]* ) exit;;
                * ) echo "Please answer yes or no.";;
            esac
        done
    else
        echo ">>> $(tput setaf 2)Homebrew is installed - skipping installation.$(tput sgr 0)\n\n"
    fi
}

install_dependencies() {
    echo 'Installing dependencies using project Brewfile' >&2
    brew bundle
}

install_brew_if_missing
install_dependencies

echo "\n\n$(tput setaf 5)Your development machine has been brewed. Happy coding courtesy of the Notorious RBG Team$(tput setaf 0)\n\n"
