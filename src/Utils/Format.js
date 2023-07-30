export const pairFixed = (number, pair_name, pairs, addFixed = 0) => {
	pair_name = pair_name.replace("_", "/");

	if(pairs.length) {
		const targetPair = pairs.find((x) => x.name === pair_name);
		return fixed(number, ((targetPair ? targetPair.digits : 0) + addFixed));
	}
};

export const fixed = (number, fixedLength = 2) => {
	return Number(number).toFixed(fixedLength);
};
