export const checkImageURL = (url) => {
	if (!url) return false
	else {
		const patern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jped|bmp|gif|webp)$', 'i');
		return patern.test(url);
	}
};