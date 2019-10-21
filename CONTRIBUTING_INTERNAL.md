# Contributing Internal

This contributing page applies only to Flexport employees, and provides additional guidelines on making breaking changes and testing your changes in the monorepo.

## Testing your changes in the monorepo

To test your changes in the monorepo, you will need to point the monorepo's latitude dependency to your branch.

```bash
# cd into the monorepo
cd ~/flexport

# point the monorepo's dependency on latitude to your branch
yarn upgrade latitude@https://github.com/flexport/latitude.git#feature-branch-name
```

On subsequent updates made to your latitude branch, you'll need to run `yarn install` to see your changes in the monorepo.


## Introducing Breaking changes

In an effort to keep the Flexport monorepo using the latest version of Latitude, we require a pull request that introduces breaking changes to come with a pull request to update all call-sites in the monorepo.

You can have a branch on the mono repo depend on your latitude feature branch by running `yarn upgrade latitude@https://github.com/flexport/latitude.git#feature-branch-name`. After updating all call-sites, link to the monorepo pull request in the latitude pull request. Upon approval, a latitude maintainer will merge both pull requests for you.
