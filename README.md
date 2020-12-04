## Live Link: https://bengrabowski.github.io/fetch-rewards/

## Built with
- React
- Bootstrap & Custom CSS

## Note about application data source
- I attempted to execute a GET fetch request to the specified data endpoint but received an error stating that no Access-Control-Allow-Origin header was present on the requested resource.
- I decided to create a file within the repository to store the data (STORE.js) in order to continue with the exercise.
- Here is the attempted fetch request (without chained promises):

```
  componentDidMount() {
      fetch('https://fetch-hiring.s3.amazonaws.com/hiring.json', {
          method: 'GET',
          headers: {
            'Accept': '*/*',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive'
          },
          redirect: 'follow'
      })
  }

```