# Super App Example

Welcome to the **Super App Example** repository! This project is part of a tutorial published on Callstack's blog, which you can find [here](https://www.callstack.com/blog/step-by-step-guide-to-super-app-development).

There are 2 branches in this repository:

- `main` - starting point for the tutorial

Learn more about Super Apps here: [https://www.callstack.com/super-app-development](https://www.callstack.com/super-app-development?utm_campaign=super_apps&utm_source=github&utm_content=super_apps_example).

## Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites

- Make sure you have the latest version of `node` and `yarn` installed on your system. Please note that this project uses `yarn@3.x.x`, and not the classic version.

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/Nazehs/super-app-react-native.git
   ```

2. Clone the news app test repo for remote connection

```sh
https://github.com/Nazehs/news-mini-app-test.git
```

3. Install the dependencies (including pods for both):

   ```sh
   yarn bootstrap
   ```

### Running the app

1. Start the dev servers

   ```sh
   yarn start
   ```

2. Run the host-app on `ios` or `android`:

   ```sh
   yarn run:host-app:ios
   # or
   yarn run:host-app:android
   ```

Note: If you do need to run the remote app you need to start the server on the news app repo with the below command

```sh
yarn start
```
