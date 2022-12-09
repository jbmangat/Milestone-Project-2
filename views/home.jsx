const React = require('react');
const Def = require('./default');



function home () {
    return (
      <Def>
          <main>
              <h1>HOME</h1>
              <div>
                  <img src="/images/flex.png" alt="flexing" id="flexing"/>
              </div>
              <a href="/">
              <button className="btn-primary">Dashboard Page</button>
          </a>

          </main>
      </Def>
    )
  }
  
module.exports = home