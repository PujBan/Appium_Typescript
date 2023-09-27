import {expect} from 'chai';

describe('orientation', ()=>{

    it('12. check network connection', async()=>{

        driver.getNetworkConnection().then(async(currentNetworkConnection)=> {
            console.log(`network Connection: ${currentNetworkConnection}`);
           await expect (currentNetworkConnection).to.be.equal('4G')
            });     
        
    })

})