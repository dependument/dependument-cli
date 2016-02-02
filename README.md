# dependument-cli

[![npm version](https://badge.fury.io/js/dependument-cli.svg)](https://badge.fury.io/js/dependument-cli)

## Installation

You can install the [npm package](https://www.npmjs.com/package/dependument-cli) for dependument-cli with a single command:

    $ npm install -g dependument-cli

You will need to have administrative privileges for this, because it has to be installed globally. So either run the terminal as an administrator, or use `sudo`.

### Why does it need administrative privileges to be installed?
dependument-cli itself doesn't need any administrative privileges. npm requires administrator privileges to install a package globally...

### Why does it need global installation?
dependument-cli needs to be installed globally (with the `-g` argument) so that you can run it (easily) from the command line.

## Usage

The basic usage of the CLI is a simple, parameterless command:

    $ dependument

This command reads dependencies from `package.json` and outputs the dependencies to `DEPENDENCIES.md`. (To specify these further, you can use arguments.)

## Licence
Dependument is (un)licensed under [The Unlicense](http://unlicense.org/). Do what you like with it.
