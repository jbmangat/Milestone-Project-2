const React = require('react')
const Def = require('./default')

function error404 () {
    return (
      <Def>
          <main>
              <h1>404: PAGE NOT FOUND</h1>
              <p>Oops, sorry, we can't find this page!</p>
              <div>
                  <img src="/images/Bat-Slap.jpg" alt="Batman slaps Robin" id="batman"/>
              </div>
              <div>
                  Photo by <a href="AUTHOR_LINK">JOSEPH OCASIO</a> on <a href="https://www.cbr.com/batman-funniest-slapping-robin-memes/">cbr</a>
              </div>
              
          </main>
      </Def>
    )
  }
  
module.exports = error404