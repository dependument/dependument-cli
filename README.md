# dependument-cli

[![npm version](https://badge.fury.io/js/dependument-cli.svg)](https://badge.fury.io/js/dependument-cli)

## Usage

### Simple

The basic usage of the CLI is a simple, parameterless command:

    dependument
    
This command reads dependencies from `package.json` and outputs the dependencies to `DEPENDENCIES.md`. (To specify these further, you can use arguments.)

### Arguments

#### Source

    --source [package.json]
    
Specify the file to source the dependencies from. This defaults to the `package.json` file if you don't specify a source.
