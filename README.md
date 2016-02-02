# dependument-cli

[![npm version](https://badge.fury.io/js/dependument-cli.svg)](https://badge.fury.io/js/dependument-cli)

## Installation

You can install the [npm package](https://www.npmjs.com/package/dependument-cli) for dependument-cli with a single command:

    $ npm install -g dependument-cli

You will need to have administrative privileges for this, because it has to be installed globally. So either run the terminal as an administrator, or use `sudo`.

## Usage

The basic usage of the CLI is a simple, parameterless command:

    dependument

This command reads dependencies from `package.json` and outputs the dependencies to `DEPENDENCIES.md`. (To specify these further, you can use arguments.)
