function firstChar(text) {
	
	if(text.length === 0){
		return '';
	}
  const firstLetter = text[0];
	return firstLetter;
}

// Do not change the code below

const text = prompt("Enter text:");
alert(firstChar(text));
