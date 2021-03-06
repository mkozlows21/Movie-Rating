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
	if(red < 16)
		red_hex = "0" + red.toString(16)[0];
	else
		red_hex = red.toString(16);
	if(green < 16)
		green_hex = "0" + green.toString(16)[0];
	else
		green_hex = green.toString(16);
	return red_hex[0] + red_hex[1] + green_hex[0] + green_hex[1] + "00";
}

function rate_color_percent(rating) {
	//rate_color_percent: returns the color of the rating based
	//on a 0-10 scale 0=red, 10=green, where the rating is a percentage
	//:param rating: rating as a percentage where 0 <= rating <= 100
	//:return: string
	return rate_color(rating / 10);
}