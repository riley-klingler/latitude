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

You don't need to wait for a Latitude PR to be merged before beginning using it in the monorepo. It's easy to work on your Latitude and monorepo concurrently. 

We will use the following tools to help sync the local repos:

```bash
brew install bindfs
brew cask install osxfuse
```

To set this up, point your monorepo's latitude dependency to your local repo:

```bash
bindfs -r <full_path_to_latitude_repo> <full_path_to_monorepo>/node_modules/latitude
# the first time you run this, you will have to go into Mac System Preferences to enable its kernel extension
```

To go back to the original version of latitude:

```bash
umount <full_path_to_monorepo>/node_modules/latitude
# NOTE: if you try running yarn install before going back to the original version of latitude, it will fail!
```

It is recommended you set up aliases for the above commands if you want to follow this flow

#### `yarn link` Approach

An alternative approach that uses less setup is to use [`yarn link`](https://yarnpkg.com/lang/en/docs/cli/link/). **However this has been known to cause Flow issues where Flow will evaluate Latitude components in monorepo.** Restarting the Flow server generally resolves this.


##### To link:
```bash
cd location/of/latitude
yarn link # adds Latitude to the link registry
cd location/of/flexport
yarn link latitude # links Latitude module to the Latitude in the link registry
```

##### To unlink:
```bash
cd location/of/flexport
yarn unlink latitude
```
After unlinking you shoulld run `yarn install --force` so that your node_modules folder are back to what they should be.

##### To remove Latitude from the link registry:
```bash
cd location/of/latitude
yarn unlink
```

#### Workflow Improvements in Development 

We are currently working on improving development workflow. You can keep track of progress in this JIRA issue: [LDS-531](https://flexport.atlassian.net/browse/LDS-531).


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


### Using personal forks

Most contributors will need to setup a personal fork to be able to open pull requests. If you directly clone this repository it will reject your pushes unless you are an owner.

Note: your fork will not automatically sync with the main repository. Make sure you keep it updated with `git pull upstream master`.

#### One-time setup

1. Fork the repository - notice the "Fork" button at the top of the page
2. Clone your personal version of the repo into your machine
```bash
git clone git@github.com:<YOUR GITHUB USERNAME>/latitude.git
```
3. Set the upstream repository
```bash
git remote add upstream https://github.com/flexport/latitude.git
```

#### Pushing

1. Commit your change
```bash
git commit -m "<COMMIT NAME>"
```
2. Fetch latest
```bash
git fetch upstream
```
3. Rebase to latest on the main repository
```bash
git rebase upstream/master
```
4. Push up your branch to your fork
```bash
git push origin <BRANCH NAME>
```
5. Open Github and open the pull request
