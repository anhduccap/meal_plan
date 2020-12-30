import { Record } from "immutable";

export default new Record({
	isLoading: false,
	error: null,
	data: [],
	form: new Record({
		isLoading: false,
		error: null,
		Id: "",
		ref:"",
		name: "",
		note: "",
		ingredients: [],
		currentId: -1
	})()
})();
