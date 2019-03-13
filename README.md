# Getting started
This one needs to be done only once you start working on the project.
```
npm i
```

Please keep in mind that if you are a developer,
you have to create your own branch.
Don't push anything to the master branch,
just create a merge request to the master branch
choosing your own branch as the source.

# Starting development server
Just type and smash that Enter button:
```
gulp serve
```

# Compressing images with gulp
Please keep your images in `src/img` directory. In order to compress them, type:
```
gulp img
```
This command will compress all images to `dist/img` directory