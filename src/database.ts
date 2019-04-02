import mongoose from 'mongoose';

async function connect() {
    try {
        await mongoose.connect('mongodb://ts-nodejs-2019:calisTONY666@ds061325.mlab.com:61325/ts-nodejs-2019', {
            useNewUrlParser: true
        });
        console.log('Connecting in Mlab');
    } 
    catch { 
        console.log('Error connecting');   
    }
}

export default connect;