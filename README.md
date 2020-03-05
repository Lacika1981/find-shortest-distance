# find-shortest-distance

Please write an application which takes a string as input. The string contains a comma
separated list of numbers. Each pair of numbers is the (x, y) coordinates of a mobile phone
mast.
Example Input
50,50, 54,79, 90,100, 54,60, 10,12, 1,1
First mast is at 50,50 and second at 54,79 etc.
The application needs to output to the console the index, and coordinates of the 2 masts which
are closest to each other.
The distance between 2 sets of coordinates (x1,y1) and (x2,y2) can be calculated as follows
Dx = x1-x2
Dy = y1-y2
Distance = Sqrt( (Dx * Dx) + (Dy * Dy) )
