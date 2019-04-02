import express from 'express';

class Application {
	app: express.Application;

	constructor() {
		this.app = express();
	}

	start() {
		this.app.listen(4000, () =>{
			console.log("server listening");
		})
	}
}

export default Application;