function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
}

function draw() {
	background("#99E6DF");
    let c = color('#D53191');
    fill(c)
    let m = map(hour(), 0, 24, 0, 2*PI);
    arc(width/2, height/2, 250, 250, 0, m);
    c = color('#E97CBB');
    fill(c)
    m = map(minute(), 0, 60, 0, 2*PI);
    arc(width/2, height/2, 160, 160, 0, m);
    c = color('#FFBFE4');
    fill(c)
    m = map(second(), 0, 60, 0, 2*PI);
    arc(width/2, height/2, 80, 80, 0, m);
}