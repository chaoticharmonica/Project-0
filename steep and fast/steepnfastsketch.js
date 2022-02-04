

function setup() {
createCanvas (800, 800);  // put setup code here
}

function draw() {
	background (0);
	scale(10);
	noStroke ();
	fill (52, 181, 250);
	beginShape (); //bottom
	vertex (3, 24);
	vertex (6, 22);
	vertex (6, 23);
	vertex (23, 23);
	vertex (26, 24);
	endShape (CLOSE);

	push (); //left edge
	translate (33.95, 7); // closest: (33.95, 7)
	rotate (radians (109)); //closest (109)
	beginShape ();
	vertex (3.95, 24);
	
	vertex (4.95, 23); //top spike, closest (6.95,23)
	vertex (24, 22.7); // bottom, closest (24, 22.7)
	vertex (25.95, 24); //bottom left spike closest (25.95, 24)
	endShape (CLOSE);
	pop ();

	push (); // right edge
	translate (8.95, 40.5);    // closest (8.95, 40.5) 
	rotate (radians (232)); //closest 232
	print (mouseX);
	print (mouseY);
	beginShape ();
	vertex (3, 24); //arrowhead slope and...
	vertex (6, 22);
	vertex (6, 23); // arrowhead x=line y=spike, leave (6, 23)
	vertex (27.95, 22.97); //tail, closest (27.95, 22.97)
	vertex (28.95, 23.90); //tail closest (28.95, 23.90)
	endShape (CLOSE);
	pop ();
  // put drawing code here
}


