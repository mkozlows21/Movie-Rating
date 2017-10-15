function rate_color(rating) {
	//rate_color: returns the color of the rating based
	//on a 0-10 scale 0=Red, 10=Green
	//
	//Ex:
	//	rating = 10
	//		red   = '00'
	//		green = 'ff'
	//		blue  = '00'
	//	rating = 5
	//		red   = '7F'
	//		green = '7F'
	//		blue  = '00'
	//:param rating: rating that the color will be based on
	//:return: string
	red = 255 * (1 - (rating / 10.0));
	green = 255 * (rating / 10.0);
	if(red == 0)
		red_hex = "00";
	else
		red_hex = red.toString(16);
	if(green == 0)
		green_hex = "00";
	else
		green_hex = green.toString(16);
	return red_hex[0] + red_hex[1] + green_hex[0] + green_hex[1] + "00";
}