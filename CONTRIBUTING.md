Contributing
============

Latitude is currently designed only for internal use at Flexport. If you're not
at Flexport, feel free to poke around, but we don't recommend using Latitude.
(At least, not yet.)

Flexport engineers: we believe that our design system is strongest when everyone
contributes. This page contains guidelines and workflow tips that should make
it easy to contribute.

## Versioning philosophy
Latitude is versionless. It's also not published as an npm module. Instead,
in the monorepo:

* `package.json` file points at the Latitude master branch on GitHub
* `yarn.lock` pins Latitude to a particular SHA

This setup aims to reduce friction for internal Latitude contributors.

## Workflow tip: work concurrently

You don't need to wait for a Latitude PR to be merged before beginning your
product work. It's easy to work on your Latitude and product changes
concurrently.

To set this up, point your monorepo's latitude dependency to your branch:

```bash
cd ~/monorepo

# point to your latitude feature branch
yarn upgrade latitude@https://github.com/flexport/latitude.git#feature-branch-name
```

After pushing updates to your latitude branch, run `yarn upgrade latitude` from
your monorepo to see your changes there. Feel free to push as many times as you
like. Remember, you can squash changes before opening a PR or requesting review.

Once your Latitude PR merges, point your branch at master again by running

```bash
yarn upgrade latitude@https://github.com/flexport/latitude.git#master
```


## Workflow tip: watch mode

If you are actively developing, the recommended workflow is to have tests and
storybook running in the background in separate terminals. This should provide
you with realtime feedback:

```bash
yarn jest --watch
yarn storybook
```


## Pull request guidelines

Before you submit a pull request, check that it meets these guidelines:

1. If your pull request fixes a bug, it should include tests that fail without
   the change, and passes with them.
2. If your pull request adds functionality, update all relevant documentation
   (component doc blocks, prop doc blocks, etc). Don't forget tests.
3. Pull requests that introduce breaking changes should be accompanied by a
   monorepo pull request that updates all call-sites.
