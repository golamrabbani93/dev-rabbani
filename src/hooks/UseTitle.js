const {useEffect} = require('react');

const UseTitle = (title) => {
	useEffect(() => {
		document.title = title;
	}, [title]);
};

export default UseTitle;
