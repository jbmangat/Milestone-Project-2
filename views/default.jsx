const React = require('react')

function Def (html) {
    return (
        <html>
            <head>
                <title>Title</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/css/style.css"/>
            </head>
            <body>
            <nav>
                <ul>
                    <li>
                        <a href="/">Dashboard</a>
                    </li>
                    <li>
                        <a href="/places">Workouts</a>
                    </li>
                    <li>
                        <a href="/places/new">Add Wor</a>
                    </li>
                </ul>
                </nav>
                {html.children}
            </body>
            
        </html>
    )
}

module.exports = Def