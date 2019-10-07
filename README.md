# Feature Extractor
This app extracts features from source code files.  
This project is part of the [Guardjs](https://guardjs.github.io) organization.

This application has a command line interface thanks to "yargs".  
Simply extacts features from an string and save them as a "csv" file.  
It is for getting these specific features from js files, but thanks to beautiful architecture of this app and it's designer (me), it has the capability to easily reduce or increase a feature model to the feature set. 

## Usage  
* install requisites by `npm i`
* use `--help` command to get helped with this app
* app works with `serve` command like `$ node app serve`

### Commands
* `serve --directory="c:\\workspace\samples" --result="result.csv"`
* `serve -d="c:\\workspace\samples" -d="result.csv" -a` for append new feature value raw to an existing file
* `features` to show just a the feature set

# Feature set
Attention: the order of features are by the order of files of feature-model that the app uses and the order of features here isn't a default order! THERE'S NOT ANY ORDER  

| no. | feature                   | description                                   |
|:---:|---------------------------|-----------------------------------------------|
|  1  | eval                      | The number of eval                            |
|  2  | setTimeout                | The number of setTimeout                      |
|  3  | iframe                    | The number of strings containing “iframe”     |
|  4  | unescape                  | The number of unescape                        |
|  5  | escape                    | The number of escape                          |
|  6  | classid                   | The number of classid                         |
|  7  | parseInt                  | The number of parseInt                        |
|  8  | fromCharCode              | The number of fromCharCode                    |
|  9  | ActiveXObject             | The number of ActiveXObject                   |
| 10  | strDirect                 | The number of directly string assignments     |
| 11  | concat                    | The number of concat                          |
| 12  | indexOf                   | The number of indexOf                         |
| 13  | substring                 | The number of substring                       |
| 14  | replace                   | The number of replace                         |
| 15  | document.addEventListener | The number of document.addEventListener       |
| 16  | attachEvent               | The number of attachEvent                     |
| 17  | createElement             | The number of createElement                   |
| 18  | getElementById            | The number of getElementById                  |
| 19  | document.write            | The number of document.write                  |
| 20  | words                     | The number of words in JavaScript             |
| 21  | keywords                  | The number of JavaScript keywords             |
| 22  | chars                     | The number of characters in JavaScript        |
| 23  | keyOnWords                | The ratio between keywords and words          |
| 24  | wordperline               | The entropy of the script as a whole          |
| 25  | longest                   | The length of the longest JavaScript word     |
| 26  | longer200                 | The number of long strings(> 200) characters  |
| 27  | shortstring               | The length of the shortest JavaScript word    |
| 28  | wordperlongline           | The entropy of the longest JavaScript word    |
| 29  | space                     | The number of blank spaces in the JavaScript  |
| 30  | avg                       | Average length of words in the JavaScript     |
| 31  | hexvalue                  | The number of hex values in the javascript    |
| 32  | utfvalue                  | The number of utf values in the JavaScript    |
| 33  | vertexes                  | The number of vertexes                        |
| 34  | Largest                   | label	The length of longest label of a vertex  |
| 35  | edges                     | The number of edge                            |
| 36  | Largest                   | degree	The most degree of a vertex             |
| 37  | E/V                       | Ratio number of edges on vertexes             |
| 38  | Loop                      | The number of loops in graph                  |
| 39  | longestLoop               | The length of longest loop                    |
| 40  | condition                 | The number of condition branch                |
| 41  | exEdge                    | The number of edges of exceptions             |
| 42  | exEdge/edges              | Ratio number of exception edges on all edges  |
| 43  | strVertex                 | The number of vertexes with string assignment |


# Anatomy of project
`app` folder contains feature-models.
`middleware` folder is for some initializing and some functionality provided in the way to do the main job.
`app.js` file is the main process of the algorithem! I tried to make it simple and readable :)).  
```  
.
+-- _app  
|   +-- syntax  
|   +-- graph  
|   +-- index.js  
+-- _middleware  
|   +-- yargs.js  
|   +-- index.js  
+-- app.js
```

# farther question
Don't hesitate to contact me about this project  
[me on github](https://github.com/easa)  
[email me](mailto:easanodehi@gmail.com)  
[me on telegram (fast way)](https://t.me/eisanodehi)  