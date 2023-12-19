# [CF Status](https://skittles1412.github.io/CF-Status/)
[CodeForces Problemset Status](https://codeforces.com/problemset/status) but with the updating of new submissions and interesting graphs!

## Features
### Graphs
* A line graph of the number of running submissions each second
* A bar graph of the number of submissions for each language
* A bar graph of the current submission verdicts

### Recent Submissions
* Submission ID
* Submission time (converted to local timezone)
* Submission language
* Submission verdict
  * Diagnostics (but not the actual error and the line number)
  * Number of testcases passed for AC submissions.
* Time and memory used
  * Displays the memory in MB if necessary (rounds to two digits after the decimal point)
* New submissions are automatically added and updated

## Contributing
Please report bugs in the issues tab. Pull requests are always welcome!

### TODOs
* Further reduce CPU usage. Currently, plotting the line chart is the bottleneck. As time progresses, data gets buffered and rendering becomes less frequent (see [here](https://github.com/skittles1412/CF-Status/blob/master/status.html#L113-L116)). However, we could probably further reduce it based on user needs.
  * Add ability to hide graphs
  * Add ability to set graph update intervals
* Find a way to add the following (probably need to find a way to cross-domain post):
  * Submission link
  * Submitter
  * Problem
  * Diagnostics popup
