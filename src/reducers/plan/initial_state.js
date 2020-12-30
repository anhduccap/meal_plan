import { Record } from "immutable";

export default new Record({
	isLoading:null,
	data: [],
	// selectedDate:"",
	form: new Record({
        Id:"",
        ref:"",
		dateString: "",
		breakfast: [],
		lunch: [],
		dinner: []
	})()
})();
