# hotels-filter-interview-task

### Live: https://vigilant-raman-97654d.netlify.app/

## About the project itself

At first I wanted to point out that I like this assignment very much and I have some comments: <br />

1. In my opinion, it would be better to modernize the backend so that hotels and rooms are returned from one endpoint rather than two. It would be much more efficient. I used `Promise.all()` here because there are relatively few requests, so I can afford it, but if there were a lot of them, it would be a big problem.
2. I have been told to keep things simple, so I used a very nice library, which is `ChakraUI`. It allowed me to create components quickly and easily. I didn't have to bother with styling everything from scratch. It wasn't forced on me, but I learned something new while doing this assignment.
3. We see a bit of props drilling in the code, but I didn't want to complicate my task by using `useContext()` or `redux-toolkit`.
4. The first hotel has more photos than others so I took the liberty of using the `swiper` library to make a nice photo gallery. Just grab and move the photo with your finger or mouse.
5. I was supposed to put photos where there are crosses. I didn't know if I could put any image in the header, but I don't think that's a problem. I wanted everything to look pleasant to the user. The image is from pexels.com.
6. At the beginning, I created a simple UI in Figma to be able to reproduce my concept more easily. I hope you will like my aesthetics.
7. I didn't use `react-router-dom` in this project because I don't see the need to do so because we only have one page.

## How to build and run

Clone the repo and cd into it

```
$ git clone https://github.com/salvia-dev/hotels-filter-interview-task && cd hotels-filter-interview-task
```

Install the dependencies at first

```zsh
$ yarn install # or npm install
```

Build the app

```zsh
$ yarn build # or npm build
```

Now, you are able to serve the built version by running

```zsh
$ yarn start # or npm start
```

## Final words

I am ready to accept criticism of my code, website UI and functionality. I would like to get feedback on what I could change, what is good and what must be thrown away.
