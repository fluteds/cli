<h1 align="center">/cli</h1>

<p align="center">
A short command line npm readme package that's pretty useless.
<br>but it links to my socials, work and a kitten cam so... that's a bonus?
</p>

<p align="center"><img src="https://raw.githubusercontent.com/fluteds/cli/main/screenshot.png" width="700"></p>

<p align="center">
<img alt="Code Quality" src="https://img.shields.io/npm/v/@fluteds/cli?color=ff69b4&logo=npm)](https://www.npmjs.com/package/@fluteds/cli">
<img alt="GitHub Workflow Status" src="https://github.com/fluteds/cli/actions/workflows/cli-release.yml/badge.svg">
<img alt="GitHub Workflow Status" src="https://github.com/fluteds/cli/actions/workflows/cli-test.yml/badge.svg">
<img alt="GitHub code size in bytes" src="https://img.shields.io/github/languages/code-size/fluteds/cli">
</p>

## Usage

To view the portfolio run the following in your terminal:

- You must have node.js/npm installed.

```sh
npx @fluteds/cli
```

## Development

To use this package as a dependency combine it with the following command. (This is also the command to use to install the files for development.)

```sh
npm install @fluteds/cli
```

### Publishing as an npm/github package

#### np

I use [`np`](https://github.com/sindresorhus/np) by sindresorhus to manage my package releases.
<br>It's better than `npm install` and creates draft release notes for you.

- Use the following command to install.
- Note: Remove `--global` if you want to only install it locally for your repo.

```sh
npm install --global np
```

#### Workflow Action

If you don't want to use `np`

- Enable the workflow `cli-release` & `cli-test`.
- Run the workflows whenever you want to push from github to npm & github packages.

Note: make sure you manually update `package.json` & `package-lock.json`.

## Inspired by

- [@sindresorhus/sindresorhus](https://github.com/sindresorhus/sindresorhus)

## Built using

- [ink](https://github.com/vadimdemedes/ink) - React for interactive command-line apps.
- [meow](https://github.com/sindresorhus/meow) - A command client helper by sindresorhus.

## License

This repo is licensed under [MIT ©](https://github.com/fluteds/cli/blob/main/LICENSE) More information can be found in full in the licence file.

<a href="https://github.com/fluteds/cli/blob/main/LICENSE.md"><img alt="GitHub license" src="https://img.shields.io/github/license/fluteds/cli"></a>
