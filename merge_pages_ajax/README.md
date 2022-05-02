# Merge multiple HTML pages using Ajax

This examples solve the issue of how to pass large file between multiple HTML pages. 

JS variable are document-dependent. This means that the data is lost as soon as we go from HTML page one to HTML page two. Saving data in the session storage or local storage is restricted to 10MB. A possible solution is the use of IndexedDB. But, while setting up and using IndexedDB is easy, with the wrapper https://dexie.org/, the loading from the DB is asynchronous.

The idea is to have a single html page that loads other html pages. 