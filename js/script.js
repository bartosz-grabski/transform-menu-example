class TransformMenu {
	
	constructor(elementClass, transformMenuSelector) {
		this.transformMenuSelector = transformMenuSelector;
		this.elementClass = elementClass;

		this._place();
	}


	_place()  {
		
		const elements = document.querySelectorAll(this.transformMenuSelector);


		elements.forEach(wrapperElement => {

			const childNodes = wrapperElement.children;
			const innerWrapper = document.createElement("div");

			let elementsToMove = [];

			for (let i = 0; i < childNodes.length; i++) {
				const innerElement = childNodes[i];
				innerElement.classList.add(this.elementClass);
				innerElement.classList.add(this.elementClass + "-" + i);

				if (i === 0) {
					innerWrapper.classList.add(this.elementClass + "-" + i + "-active");
				}
				

				innerElement.addEventListener("click", evt => {
					const classes = [].slice.call(innerWrapper.classList);
					classes.forEach(cls => {
						innerWrapper.classList.remove(cls);
					});					
					innerWrapper.classList.add(this.elementClass + "-" + i + "-active");
				});

				
				elementsToMove.push(innerElement);
			}

			
			wrapperElement.appendChild(innerWrapper);
			elementsToMove.forEach((element) => innerWrapper.appendChild(element));

		});
	}



}