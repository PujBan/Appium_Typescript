<<<<<<< HEAD
import {expect} from 'chai';

describe('orientation', ()=>{

    it('12. check network connection', async()=>{

        driver.getNetworkConnection().then(async(currentNetworkConnection)=> {
            console.log(`network Connection: ${currentNetworkConnection}`);
           await expect (currentNetworkConnection).to.be.equal('4G')
            });     
        
    })

=======
describe('Login', ()=>{

    it('5. Success Login', async()=>{

        //enable Airplane mode
        await driver.toggleAirplaneMode();

        // Enable wifi
        await driver.toggleWiFi();

        //Enable location
        await driver.toggleLocationServices();

        
    })
>>>>>>> c9495dccbb1c8568078191ff04e23c8b166ded85
})