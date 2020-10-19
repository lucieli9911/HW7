
# Overview
Using the same content you submitted for Individual HW#1 (not necessarily the same repository), update your pages to (1)  run as a Docker container and (2) include sortable tables.

_**Link directly to the table page.**_ Your submission URL should look something like: `https://github.com/iu-msis/2-simple-docker-js-[username]/public/[table_file.html]`

### Which repository?
You can copy the Docker config files from this repo to your old repository, or copy your `app` folder from your previous repo into this one, making any improvements you need. _(Yes, I know this isn't the best way to do version control.)_

Make sure that you don't accidentally copy the `.git` folder over when moving files.

Choose either, but submit the link to the repo you use.

### Folder structure

Use an `app` folder; put your `public` folder inside the app folder.

# Make a Docker container, use it
Using the Docker config files in this repo, launch Docker and view your new web site. Practice this, as we'll be doing it often.

## Using the command line
As a reminder, use `cd` (**c**hange **d**irectory) to navigate, and `dir` (Windows) / `ls` (everything else) to view directory listings.

## Using Docker
When in your project directory on the command line, you can use `docker-compose build` to build this docker image.

After building, use `docker-compose up` from the project directory to run the container. (`ctrl-C` is one way to quit a running container.)

After running this image container, the web page should be visible at http://localhost:8080/

The provided file `docker-compose.yml` maps the container's port 80 (default web port) to the host machine's (your machine's) port 8080 with the `ports` command.

The `volumes` command in `docker-compose.yml` maps your repository folder `app` to the container's `\srv\app\` folder. Changes made in one place will be made in the other. This means when you make changes to your HTML, CSS, or Javascript files that you won't have to rebuild your container.

## Add a `.dockerignore` File
Read the following [explanation of the `.dockerignore` file](https://blog.codeship.com/leveraging-the-dockerignore-file-to-create-smaller-images/)
Create a `.dockerignore` file with at least the following. Be able to explain what each line does.

```
.*
docker-compose.yml
*.md
```

## Enter your container

If you wish, you may enter your running container via the command line. First, you'll need to discover the hash of your container. `docker ps` lists all active containers. Copy the hash from your container, and replace it in the following command:

```bash
docker exec -it c0ee14f0c047 bash
```

The `-it` flag allows you to run an interactive `bash` session. `bash` is the name of the command line shell available in Docker images.

Once inside, you can `ls` and `cd` to poke around. Try to find your document root! (Hint: it's where we copied files to.) When finished, exit `bash` with the `exit` command.


# Make the table sortable.

There are many public "sort table" scripts. For simplicity, I recommend using [this one](http://tristen.ca/tablesort/demo/). I've uploaded a short video showing how to do this. ("[03 Adding a sort table script.mp4](https://iu.mediaspace.kaltura.com/media/03+Adding+a+sort+table+script/1_9cd5rcdg)") If you use this script, you'll need to give your table a unique ID.

## A simple Javascript

Adding this script should be simple. Read the documentation of your chosen script for help.

You may use any table sort script on the web. Here are two to get your search started:

* http://tristen.ca/tablesort/demo/ (This one is used in the video linked above)
* https://github.hubspot.com/sortable/docs/welcome/ (I think I like this one better.)

The ideal script "just works", perhaps with simply adding only a class to your table. The less we have to configure in our code to connect to the library, the better off we are.

## No errors
Check the browser console before submitting to make sure you don't have any Javascript errors.

## Sort with style
Add any necessary CSS to make the sorting look good. (e.g., up/down arrows on the column headers). How you do this will depend on which table sort script you use. Whatever solution you pick, there should be some changes to your CSS file.

# Correct any errors
If you missed parts of HW#1, or receiving feedback telling you to change something, fix it now. Mention your change(s) in the submission comments on Canvas.

# Submit
Submit the URL to your GitHub repository on Canvas. _**Link directly to the table page.**_ It will help if you name that file `table.html`. (Remember you may need to fix your navbar links too.)
