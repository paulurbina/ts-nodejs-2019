import express from 'express';
import morgan from 'morgan';
import exphbs from 'express-handlebars';
import path from 'path';

// import Routes
import allRoutes from './routes';

class Application {
	app: express.Application;

	constructor() {
		this.app = express();
		this.settings();
		this.middlewares();
		this.routes();
		this.public();
	}

	settings() {
		this.app.set('port', process.env.PORT || 4000)
		this.app.set('views', path.join(__dirname, 'views'));
		this.app.engine('.hbs', exphbs({
			layoutsDir: path.join(this.app.get('views'), 'layouts'),
			partialsDir: path.join(this.app.get('views'), 'partials'),
			defaultLayout: 'main',
			extname: '.hbs'
		}));
		this.app.set('view engine', '.hbs');
	}

	middlewares() {
		this.app.use(morgan('dev'));
	}

	routes() {
		this.app.use(allRoutes);
	}

	public() {
		this.app.use(express.static(path.join(__dirname, 'public')));
	}

	start() {
		this.app.listen(this.app.get('port'), () =>{
			console.log("server listening", this.app.get('port'));
		})
	}
}

export default Application;