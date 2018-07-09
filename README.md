This is VeganFood project.

Demo
-

http://www.phuongjolly.com:3001

Solution
-
Using react/redux for implementation. IDE: WebStorm.

Completed features:

- List of Reviews
- List of Collections
- Show detail of Collection
- Add review to existing or new collection

Can be improve:

-


Configuration:
-

in `package.json`, change:

`proxy`: http://www.phuongjolly.com:3001.

Run locally:
-

This project uses `create-react-app`.
You can use IDE like WebStorm to open the project or follow these steps to run the application.

Install dependencies:

```
yarn install
```

Start website locally:

```
yarn start
```

Deploy using docker:
-

Build docker image:

```
docker build . -t phuongjolly/vegan-food

```

Push docker image to repository:

```
docker push phuongjolly/vegan-food
```

Deploy the website on the server:

```
docker run -p 80:80 phuongjolly/vegan-food
```

Deploy using nginx:
-

Build the project:

```
npm run build
```

Replace `/etc/nginx/conf.d/default.conf` by `server.conf`.
So that all route will be redirect to index.html

Copy `build` folder to `/usr/share/nginx/html` or nginx html folder.