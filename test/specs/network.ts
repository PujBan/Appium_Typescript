describe('Login', ()=>{

    it('5. Success Login', async()=>{

        //enable Airplane mode
        await driver.toggleAirplaneMode();

        // Enable wifi
        await driver.toggleWiFi();

        //Enable location
        await driver.toggleLocationServices();

        
    })
})