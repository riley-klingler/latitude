# Contributing

We believe that our design system is strongest when everyone contributes. This page outlines the various methods for contributing to Latitude.

## Setting up your environment

Before contributing to Latitude, do the following steps to get started:

```bash

# clone Latitude into the root directory of your local machine
cd ~/

# clone your fork of the project. If you're an internal developer, you can work
# off flexport/latitude directly.
git clone git@github.com:flexport/latitude.git

# step into the local repo
cd ~/latitude

# latitude requires node 8.11, switch versions via nvm
nvm use 8.11

# install dependencies
yarn install
```

## Development Guidelines

### Running Tests

The test suit runs on Jest and Enzyme. Visual changes can be tested manually via storybook.

```bash
# run jest tests
yarn test

# run storybook to manually test visual changes
yarn storybook
```

If you are actively developing, the recommended workflow is to have the tests and storybook running in the background in separate terminals. This should provide you with realtime feedback:

```bash
# rerun tests upon save
yarn jest --watch

# run storybook in the background
yarn storybook
```

### Style and Linting

This codebase adheres to [Airbnb Styleguide](https://github.com/airbnb/javascript) and is enforced using [ESLint](https://eslint.org/). For formatting, [Prettier](https://prettier.io/) is used.

It is recommended that you install ESLint plugin for your editor of choice when working on this codebase.

```bash
# run eslint
yarn eslint .
```

## Pull Request Guidelines

Before you submit a pull request, check that it meets these guidelines:

1. If you're an internal contributor and the pull request introduces a breaking change, follow our guidelines on how to [upgrade call-sites in the mono-repo](#Introducing-Breaking-changes-(Internal)).

2. If your pull request fixes a bug, it should include tests that fail without the change, and passes with them.

3. If your pull request adds functionality, update all relevant documentation (component doc blocks, prop doc blocks, etc).

4. Please rebase and resolve all conflicts before submitting.

### Introducing Breaking changes (Internal)

In an effort to keep the Flexport monorepo always dependent on the latest version of Latitude, we require any pull request that introduces breaking changes to update all monorepo call-sites directly. Below is a step by step example:

```bash
# cd into the local repo
cd ~/latitude

# check out a branch for your breaking change
git checkout -b github_name/my-breaking-change

# introduce breaking change to latitude (example)
mv TextField TextInput

# put up a pull request for your breaking change to recieve feedback.
# Upon approval, continue:

# cd into the local flexport repo
cd ~/flexport

# check out a branch for updating call-sites for your breaking change
git checkout -b github_name/my-breaking-change

# upgrade flexport's latitude dependency to point to your latitude branch
yarn upgrade latitude@https://github.com/flexport/latitude.git#github_name/my-breaking-change

# fix all call sites in the monorepo

# put up a pull request for your breaking change
mpr

# link to the monorepo pull request in the latitude pull request.
# Upon approval, A latitude maintainer will merge both pull requests for you.
```
