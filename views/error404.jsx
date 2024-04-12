const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
          <img src="https://unsplash.com/photos/pug-covered-with-blanket-on-bedspread-2Ts5HnA67k8" alt="Our mascot is currently working on the page." />
          </main>
      </Def>
    )
  }
  

module.exports = error404