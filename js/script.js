class TransformMenu {
	
	constructor(numberOfElements, elementClass, transformMenuSelector) {
		this.numberOfElements = numberOfElements;
		this.transformMenuSelector = transformMenuSelector;
		this.elementClass = elementClass;

		this._place();
	}

	_place()  {
		const elements = document.querySelectorAll(this.transformMenuSelector);


		elements.forEach(wrapperElement => {

			const innerWrapper = document.createElement("div");


			for (let i = 0; i < this.numberOfElements; i++) {
				const innerElement = document.createElement("div");
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

				innerWrapper.appendChild(innerElement);

			}

			wrapperElement.appendChild(innerWrapper);
		});
	}



}